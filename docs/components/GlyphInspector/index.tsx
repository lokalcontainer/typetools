// import { STATIC_HASH_LINKS } from "@/lib/constants";
import styles from "./glyph.module.scss";
import { Inspector } from "./Inspector";
import { Thumbnail } from "./Thumbnail";

export const GlyphInspector = () => {
  return (
    <div
      // id={STATIC_HASH_LINKS[1].url.replace(/#/g, "")}
      className={`grid ${styles.container}`}
    >
      <Thumbnail />
      <Inspector />
    </div>
  );
};
