import Tabs from "src/components/Nav/Tabs";
import TabItem from "src/components/Nav/TabItem";
import chunk from "lodash/chunk";
import NewsEventsCard from "src/components/NewsEventsCard";
import VideoCard from "src/components/VideoCard";
import Carousel from "src/components/Carousel";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const NewsEventsVideoSection = ({}) => {
  const { t } = useTranslation("mdm");
  const [newsEventsTab, setNewsEventsTab] = useState(1);
  const [allEvents, setAllEvents] = useState("");
  const [allNews, setAllNews] = useState("");

  const goEcomEventsURL = "https://mdec.my/wp-json/md/v1/goecom-events";
  const goEcomNewsURL = "https://mdec.my/wp-json/md/v1/goecom-news";

  useEffect(() => {
    axios
      .get(goEcomEventsURL)
      .then((res) => setAllEvents(res.data))
      .catch((err) => console.log(err));

    axios
      .get(goEcomNewsURL)
      .then((res) => setAllNews(res.data))
      .catch((err) => console.log(err));
  }, []);

  const allVideo = [
    {
      video_link: "https://www.youtube.com/embed/HVxIgpK6urk",
      title: "Program Blee: MDEC Sasar 2,000 Usahawan Mikro Tahun Ini",
      imgSrc:
        "/static/images/my-digital-maker/index/news-events/program-blee.jpeg",
      date: "Tuesday, 6 November 2018",
      desc: "Perbadanan Ekonomi Digital Malaysia (MDEC) melantik MyBazar Malaysia bagi meneruskan komitmen agensi itu untuk memperkasa usahawan tempatan melalui program Blee. Program ini menjangkakan penglibatan 2,000 usahawan mikro tempatan pada tahun ini.",
    },
    {
      video_link: "https://www.youtube.com/embed/Mle1XJzRBuc",
      title: "eUsahawan Launch Video",
      imgSrc:
        "/static/images/my-digital-maker/index/news-events/eusahawan.jpeg",
      date: "Tuesday, 6 November 2018",
      desc: "eUsahawan program is an initiative from MDEC to implement digital entrepreneurial knowledge and values among young and micro entrepreneurs.",
    },
    {
      video_link: "https://www.youtube.com/embed/B-mL7WQlfTk",
      title: "eU@Marketplace Promotional Video",
      imgSrc:
        "/static/images/my-digital-maker/index/news-events/eu-marketplace.jpeg",
      date: "Tuesday, 6 November 2018",
      desc: "eU@Marketplace is one of the many initiatives MDEC has planned to help eUsahawan participants in expanding their product market to more potential customers. MDEC strives to support participants by providing online business platform for selling and promoting activities to bigger marketplace with the help of affliates.",
    },
  ];

  return (
    <>
      <p className="font-bold text-3xl">
        {t("my_digital_maker.news_events.main_title")}
      </p>
      <Tabs className="py-8">
        <TabItem
          activeTab={newsEventsTab === 1}
          tabName={t("my_digital_maker.news_events.events")}
          onClick={() => setNewsEventsTab(1)}
          fontColor="sm:px-12 font-bold"
          borderColor="border-mdecRed"
        />
        <TabItem
          activeTab={newsEventsTab === 2}
          tabName={t("my_digital_maker.news_events.news")}
          onClick={() => setNewsEventsTab(2)}
          fontColor="sm:px-12 font-bold"
          borderColor="border-mdecRed"
        />
        <TabItem
          activeTab={newsEventsTab === 3}
          tabName={t("my_digital_maker.news_events.video")}
          onClick={() => setNewsEventsTab(3)}
          fontColor="sm:px-12 font-bold"
          borderColor="border-mdecRed"
        />
      </Tabs>

      {newsEventsTab === 1 && (
        <div className="pb-8 flex gap-x-8">
          <Carousel>
            {chunk(allEvents, 3).map((datas, index) => {
              return (
                <div
                  key={index}
                  className="grid xs:grid-cols-3 gap-x-8 gap-y-10 pb-4"
                >
                  {datas.map((data, index) => {
                    return (
                      <NewsEventsCard
                        key={index}
                        cta_link={data.permalink}
                        title={data.title}
                        date={data.date}
                        time={data.time}
                        imgSrc={data.image}
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
      {newsEventsTab === 2 && (
        <div className="pb-8 flex gap-x-8">
          <Carousel>
            {chunk(allNews, 3).map((datas, index) => {
              return (
                <div
                  key={index}
                  className="grid xs:grid-cols-3 gap-x-8 gap-y-10 pb-4"
                >
                  {datas.map((data, index) => {
                    return (
                      <NewsEventsCard
                        key={index}
                        cta_link={data.permalink}
                        title={data.title}
                        date={data.date}
                        imgSrc={data.image}
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
      {newsEventsTab === 3 && (
        <Carousel>
          {chunk(allVideo, 3).map((datas, index) => {
            return (
              <div
                key={index}
                className="grid xs:grid-cols-3 gap-x-8 gap-y-10 pb-4"
              >
                {datas.map((data, index) => {
                  return (
                    <VideoCard
                      key={index}
                      video_link={data.video_link}
                      title={data.title}
                      imgSrc={data.imgSrc}
                      date={data.date}
                      desc={data.desc}
                    />
                  );
                })}
              </div>
            );
          })}
        </Carousel>
      )}
    </>
  );
};

export default NewsEventsVideoSection;
