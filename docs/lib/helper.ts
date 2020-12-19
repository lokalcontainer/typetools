import { VFontAxes } from "@/types/font";
import { load } from "opentype.js";
import VariableFont from "./variablefont";

export const newFontFace = async (name: string, url: string | ArrayBuffer) => {
  // @ts-ignore
  const font = new FontFace(name, `url("${url}")`, { fontDisplay: "block" });
  await font.load();
  // @ts-ignore
  document.fonts.add(font);
  document.documentElement.classList.add("fonts-loaded");

  return { name };
};

export const loadFont = async (res: any) => {
  const font = await load(res);
  const vf = new VariableFont(font);
  const variableAxes: VFontAxes[] = vf.getAxes();

  return { font, variableAxes };
};

// Promise.all(
//   files.map((file) => {
//     const reader = new FileReader();
//     return new Promise((resolve, reject) => {
//       reader.addEventListener("load", (res) => {
//         resolve(res.target?.result);
//       });
//       reader.addEventListener("error", reject);
//       reader.readAsDataURL(file);
//     });
//   })
// ).then((e) => {
//   e.forEach((result) => mantep(result));
// });
