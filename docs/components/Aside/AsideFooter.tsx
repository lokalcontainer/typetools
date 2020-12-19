import styles from "./aside.module.scss";
import { SITE_INFO } from "@/lib/constants";

export const AsideFooter = () => {
  const { site } = SITE_INFO;
  return (
    <footer className={`theme ${styles.footer}`}>Version {site.version}</footer>
  );
};
