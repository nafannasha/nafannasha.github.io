import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useGlobalState } from "src/contexts/GlobalStateContext";
import DesktopNav from "src/components/Nav/DesktopNav";
import MobileNav from "src/components/Nav/MobileNav";
import Footer from "src/components/Footer";
import MicroNav1 from "src/components/MicroNav1";
import MicroNav2 from "src/components/MicroNav2";
import { useTranslation } from "react-i18next";
import menu from "../static/megaMenuData.json";
import BaseNav from "./Nav/BaseNav";
import IndustryCatalogueNav from "./Nav/IndustryCatalogueNav";
import MDCAPNav from "./Nav/MDCAPNav";
import QuickLinks from "./Nav/QuickLinks";
import LevelUpNav from "./Nav/LevelUpNav";
import ExpatsDeskNav from "./Nav/ExpatsDeskNav";
import ExpatsMobileNav from "./Nav/ExpatsMobileNav";
import Kre8tif2022DesktopNav from "./Nav/Kre8tif/2022/Kre8tif2022DesktopNav";
import Kre8tif2021DesktopNav from "./Nav/Kre8tif/2021/Kre8tif2021DesktopNav";

const Layout = ({ children }) => {
  const { persona, setPersona } = useGlobalState();
  const [open, setOpen] = useState(false);
  const [QuickLinksTab, setQuickLinksTab] = useState(1);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const router = useRouter();

  const changePersona = (persona) => {
    setPersona(persona);
    if (router.pathname.length > 1) router.push("/");
  };
  const { t } = useTranslation();

  const erezekiLinks = [
    {
      label: "Tutorial",
      href: "tutorial",
    },
    {
      label: t("jobType"),
      href: "jobScope",
    },
    {
      label: t("success_stories"),
      href: "successStories",
    },
    {
      label: t("partners_general"),
      href: "partners",
    },
    {
      label: t("faq_general"),
      href: "faq",
    },
  ];

  return (
    <div className="font-Montserrat">
      {router.pathname.includes("eRezeki") ? (
        <MicroNav1
          navArray={erezekiLinks}
          registerLink={"https://erezeki.my/register"}
          signInLink={"https://erezeki.my/login"}
        />
      ) : router.pathname.includes("mywit") ? (
        <MicroNav2 />
      ) : router.pathname.includes("mdcap") ? (
        <>
          <MDCAPNav
            persona={persona}
            setPersona={changePersona}
            megaMenu={menu}
            showQuickLinks={showQuickLinks}
            setShowQuickLinks={setShowQuickLinks}
            open={open}
            setOpen={setOpen}
          />
          <QuickLinks
            QuickLinksTab={QuickLinksTab}
            setQuickLinksTab={setQuickLinksTab}
            showQuickLinks={showQuickLinks}
            setShowQuickLinks={setShowQuickLinks}
          />
        </>
      ) : router.pathname.includes("kre8tif/2022") ? (
        <>
          <Kre8tif2022DesktopNav
            showQuickLinks={showQuickLinks}
            setShowQuickLinks={setShowQuickLinks}
            open={open}
            setOpen={setOpen}
          />
          <QuickLinks
            QuickLinksTab={QuickLinksTab}
            setQuickLinksTab={setQuickLinksTab}
            showQuickLinks={showQuickLinks}
            setShowQuickLinks={setShowQuickLinks}
          />
        </>
      ) : router.pathname.includes("kre8tif/2021/") ? (
        <>
          <Kre8tif2021DesktopNav
            showQuickLinks={showQuickLinks}
            setShowQuickLinks={setShowQuickLinks}
            open={open}
            setOpen={setOpen}
          />
          <QuickLinks
            QuickLinksTab={QuickLinksTab}
            setQuickLinksTab={setQuickLinksTab}
            showQuickLinks={showQuickLinks}
            setShowQuickLinks={setShowQuickLinks}
          />
        </>
      ) : router.pathname.includes("dedagang") ? (
        <BaseNav />
      ) : router.pathname.includes("industrycatalogue") ? (
        <IndustryCatalogueNav open={open} setOpen={setOpen} />
      ) : router.pathname.includes("levelupkl2022") ? (
        <LevelUpNav open={open} setOpen={setOpen} />
      ) : router.pathname.includes("expats") ? (
        <>
          <ExpatsDeskNav
            persona={persona}
            setPersona={changePersona}
            megaMenu={menu}
          />
          <ExpatsMobileNav
            persona={persona}
            setPersona={changePersona}
            open={open}
            setOpen={setOpen}
            megaMenu={menu}
            showQuickLinks={showQuickLinks}
            setShowQuickLinks={setShowQuickLinks}
          />
          <QuickLinks
            QuickLinksTab={QuickLinksTab}
            setQuickLinksTab={setQuickLinksTab}
            showQuickLinks={showQuickLinks}
            setShowQuickLinks={setShowQuickLinks}
          />
        </>
      ) : (
        <>
          <DesktopNav
            persona={persona}
            setPersona={changePersona}
            megaMenu={menu}
            showQuickLinks={showQuickLinks}
            setShowQuickLinks={setShowQuickLinks}
          />
          <MobileNav
            persona={persona}
            setPersona={changePersona}
            open={open}
            setOpen={setOpen}
            megaMenu={menu}
            showQuickLinks={showQuickLinks}
            setShowQuickLinks={setShowQuickLinks}
          />
          <QuickLinks
            QuickLinksTab={QuickLinksTab}
            setQuickLinksTab={setQuickLinksTab}
            showQuickLinks={showQuickLinks}
            setShowQuickLinks={setShowQuickLinks}
          />
        </>
      )}

      {/* CHILDREN */}
      <main className="mx-auto w-full h-full pt-10 sm:pt-0">{children}</main>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Layout;
