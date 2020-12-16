import styles from "./aside.module.scss";
import { ThemeSwitcher } from "@components/Utils/ThemeSwitcher";
import { AsideHeader } from "./AsideHeader";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <AsideHeader />
      <ThemeSwitcher />
    </aside>
  );
};
