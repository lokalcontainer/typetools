import styles from "./input.module.scss";
import { ChangeEvent } from "react";
import { SVGArrow } from "../SVG";
import { useFont } from "@/lib/context/ContextFont";

export const InputFont = () => {
  const { fontList, selectedFont, setSelectedFont, setUserFont } = useFont();

  // This is the key method for displaying font for whole app
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const f = e.target.files;
    if (f) {
      const multiple = f.length > 1;
      const single = f.length === 1;
      if (multiple) {
        const files = Array.from(f);
        Promise.all(
          files.sort().map((file) => {
            const reader = new FileReader();
            return new Promise((resolve, reject) => {
              reader.readAsDataURL(file);
              reader.onload = (e) => resolve(e.target?.result);
              reader.onerror = () => reject;
            });
          })
        ).then((e) => {
          e.forEach((result) => {
            setUserFont(result);
          });
        });
      } else if (single) {
        const reader = new FileReader();
        const file = f[0];
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          setUserFont(e.target?.result);
        };
      } else {
        console.log("Cancel");
      }
    }
  };

  return (
    <div>
      <div className="custom-select">
        <select
          className="theme"
          value={selectedFont}
          aria-label="Choose font"
          onChange={(e) => setSelectedFont(e.target.value)}
          style={{ fontFamily: `"${selectedFont}", sans-serif` }}
        >
          <optgroup label="Default Fonts">
            {fontList
              .filter(({ group }) => group === "default")
              .map(({ name }, key) => (
                <option key={key} value={name}>
                  {name}
                </option>
              ))}
          </optgroup>

          {fontList.filter(({ group }) => group === "user").length >= 1 && (
            <optgroup label="User Fonts">
              {fontList
                .filter(({ group }) => group === "user")
                .map(({ name }, key) => (
                  <option key={key} value={name}>
                    {name}
                  </option>
                ))}
            </optgroup>
          )}
        </select>
        <span>
          <SVGArrow type="expand-more" />
        </span>
      </div>
      <input
        type="file"
        className={styles.input}
        aria-label="Font files"
        onChange={handleChange}
        accept=".ttf, .otf, .woff"
        multiple
      />
    </div>
  );
};

// const userFont = (source: any) => {
//   // console.log(source);
//   // console.log(typeof source);
//   loadFont(source).then(({ font }) => {
//     setOpentype(font);
//     // console.log(variableAxes);
//     const fontFamily = font.names.fullName.en;
//     //@ts-ignore
//     newFontFace(fontFamily, source).then((res) => {
//       const newName = res.name;
//       setFontList((prev) => [...prev, newName]);
//       setSelectedFont(newName);
//     });
//   });
// };

{
  /* <div>
        {fontList.map((item, key) => (
          <button
            key={key}
            className={`theme ${styles.button}`}
            title={item}
            data-active={item === selectedFont}
            onClick={() => setSelectedFont(item)}
            onFocus={() => setSelectedFont(item)}
            style={{ fontFamily: item }}
          >
            {item}
          </button>
        ))}
      </div> */
}
