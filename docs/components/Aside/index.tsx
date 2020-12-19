import styles from "./aside.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "@components/Utils/ThemeSwitcher";
import { AsideHeader } from "./AsideHeader";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { STATIC_HASH_LINKS } from "@/lib/constants";
import Link from "next/link";
import { InputFont } from "@components/Utils/InputFont";
import { useVariableFont } from "@/lib/context/ContextVariable";
import { AsideFooter } from "./AsideFooter";

export const Aside = () => {
  const { width } = useWindowSize();
  const { fontInfo } = useVariableFont();
  const isMobile = width <= 960;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <aside
      className={styles.aside}
      data-mobile={isMobile}
      data-open={isMobile && isOpen}
    >
      <AsideHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div style={{ padding: "1rem", position: "static", top: "4rem" }}>
        <ul style={{ padding: 0, margin: 0 }}>
          {STATIC_HASH_LINKS.map(({ url, label }) => (
            <li
              key={url}
              style={{
                height: "2rem",
                borderBottom: "1px solid",
                listStyle: "none",
                fontSize: 12,
              }}
            >
              <Link href={url}>
                <a
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
        <InputFont />
      </div>
      {fontInfo && (
        <>
          <div
            style={{
              fontSize: 12,
              // marginTop: "0.95rem",
              padding: "0rem 1rem",
              overflow: "scroll",
              position: "relative",
              display: "block",
              width: "100%",
              height: "calc(50vh - 4rem)",
              // height: "100%",
              // borderBottom: "1px solid",
              // borderTop: "1px solid",
            }}
          >
            <table>
              <tbody>
                <tr>
                  <th>Version</th>
                  <td>{fontInfo.version?.en}</td>
                </tr>
                <tr>
                  <th>Family Name</th>
                  <td style={{ fontWeight: "bold" }}>
                    {fontInfo.fontFamily.en}
                  </td>
                </tr>
                <tr>
                  <th>Sub Family</th>
                  <td>{fontInfo.fontSubfamily.en}</td>
                </tr>
                <tr>
                  <th>Full Name</th>
                  <td>{fontInfo.fullName?.en}</td>
                </tr>
                <tr>
                  <th>PostScript</th>
                  <td>{fontInfo.postScriptName?.en}</td>
                </tr>
                <tr>
                  <th>Designer</th>
                  <td>
                    {fontInfo.designer && fontInfo.designerURL && (
                      <a
                        href={
                          fontInfo.designerURL.en.includes("https") ||
                          fontInfo.designerURL.en.includes("http")
                            ? `${fontInfo.designerURL.en}`
                            : `https://${fontInfo.designerURL.en}`
                        }
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {fontInfo.designer.en}
                      </a>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Manufacturer</th>
                  <td>
                    {fontInfo.manufacturer && fontInfo.manufacturerURL && (
                      <a
                        href={
                          fontInfo.manufacturerURL.en.includes("https") ||
                          fontInfo.manufacturerURL.en.includes("http")
                            ? `${fontInfo.manufacturerURL.en}`
                            : `https://${fontInfo.manufacturerURL.en}`
                        }
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {fontInfo.manufacturer.en}
                      </a>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>License</th>
                  <td>{fontInfo.license?.en}</td>
                </tr>
                <tr>
                  <th>License URL</th>
                  <td>
                    {fontInfo.licenseURL && (
                      <a
                        href={
                          fontInfo.licenseURL.en.includes("https") ||
                          fontInfo.licenseURL.en.includes("http")
                            ? `${fontInfo.licenseURL.en}`
                            : `https://${fontInfo.licenseURL.en}`
                        }
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {fontInfo.licenseURL.en}
                      </a>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Trademark</th>
                  <td>{fontInfo.trademark?.en}</td>
                </tr>
                <tr>
                  <th>Copyright</th>
                  <td>{fontInfo.copyright?.en}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      <AsideFooter />
    </aside>
  );
};
