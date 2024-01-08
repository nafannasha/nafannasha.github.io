import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü")
    .toUpperCase();
};

const Breadcrumbs = ({ color = "text-darkRed" }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      var path = router.asPath;
      var hash = path.indexOf("#");

      var questionMarkIndex = path.indexOf("?");
      path = path.substring(
        0,
        questionMarkIndex != -1 ? questionMarkIndex : path.length
      );

      path = path.substring(0, hash != -1 ? hash : path.length);
      const linkPath = path.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs">
      <ol className="flex flex-wrap justify-start divide-x">
        <li className="pr-2">
          <Link href="/">
            <h4
              className={`text-xs lg:text-sm leading-5 tracking-widest ${color} uppercase cursor-pointer`}
            >
              HOME
            </h4>
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <Fragment key={index}>
              <li key={breadcrumb.href} className="px-2 whitespace-nowrap">
                <Link href={breadcrumb.href}>
                  <h4
                    className={classnames(
                      "text-xs lg:text-sm leading-5 tracking-widest uppercase cursor-pointer " +
                        color,
                      {
                        "font-medium": index === breadcrumbs.length - 1,
                      }
                    )}
                  >
                    {convertBreadcrumb(breadcrumb.breadcrumb)}
                  </h4>
                </Link>
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
