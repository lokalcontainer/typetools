import styles from "./aside.module.scss";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { SITE_INFO } from "@/lib/constants";

import { SVGArrow } from "@components/Utils/SVG";

type AsideHeaderProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const AsideHeader = ({ setIsOpen }: AsideHeaderProps) => {
  const { width } = useWindowSize();
  const isMobile = width <= 960;
  const { site, creator } = SITE_INFO;

  return (
    <header className={`theme ${styles.header}`}>
      <span>
        <Link href="/">
          <a>{site.name}</a>
        </Link>{" "}
        by{" "}
        <a href={creator.url} rel="noopener noreferrer" target="_blank">
          {creator.name}
        </a>
      </span>
      {isMobile && (
        <button
          aria-label="Toggle Menu"
          title="Toggle Menu"
          className={styles.toggle}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <SVGArrow type="downward" />
        </button>
      )}
    </header>
  );
};
