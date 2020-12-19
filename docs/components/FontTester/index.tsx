import styles from "./font-tester.module.scss";
import { Config } from "./Config";
import { Tester } from "./Tester";
// import { STATIC_HASH_LINKS } from "@/lib/constants";

export const FontTester = () => {
  return (
    <div
      // id={STATIC_HASH_LINKS[0].url.replace(/#/g, "").replace(/\//g, "")}
      className={`grid ${styles.container}`}
    >
      <Config />
      <Tester />
    </div>
  );
};
