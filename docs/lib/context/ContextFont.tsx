import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { loadFont, newFontFace } from "../helper";

type FontListGroup = "default" | "user";
type FontListType = {
  group: FontListGroup;
  name: string;
  url?: string;
};
type FontList = FontListType[];

const fontList: FontList = [
  {
    name: "RobotoDelta Regular",
    group: "default",
    url: "/fonts/Roboto/RobotoDelta-VF.ttf",
  },
  {
    name: "JetBrains Mono Regular",
    group: "default",
    url: "/fonts/JetBrainsMono/JetBrainsMono-VariableFont_wght.ttf",
  },
  {
    name: "JetBrains Mono Italic",
    group: "default",
    url: "/fonts/JetBrainsMono/JetBrainsMono-Italic-VariableFont_wght.ttf",
  },
  {
    name: "Space Grotesk Light",
    group: "default",
    url: "/fonts/SpaceGrotesk/SpaceGrotesk-VariableFont_wght.ttf",
  },
  {
    name: "Rubik Light",
    group: "default",
    url: "/fonts/Rubik/Rubik-VariableFont_wght.ttf",
  },
  {
    name: "Sansita Swashed Light",
    group: "default",
    url: "/fonts/SansitaSwashed/SansitaSwashed-VariableFont_wght.ttf",
  },
  {
    name: "Grenze Gotisch Regular",
    group: "default",
    url: "/fonts/GrenzeGotisch/GrenzeGotisch-VariableFont_wght.ttf",
  },
];
// type Opentype = Font | undefined;
type UserFont = unknown;

type LoadedFont = any[];

type ContextFontProps = {
  fontList: FontList;
  setFontList: Dispatch<SetStateAction<FontList>>;
  selectedFont: string;
  setSelectedFont: Dispatch<SetStateAction<string>>;
  userFont: UserFont;
  setUserFont: Dispatch<SetStateAction<UserFont>>;
  loadedFont: LoadedFont;
  setLoadedFont: Dispatch<SetStateAction<LoadedFont>>;
};

const init: ContextFontProps = {
  fontList,
  setFontList: (val) => val,
  selectedFont: fontList[0].name,
  setSelectedFont: (val) => val,
  userFont: null,
  setUserFont: (val) => val,
  loadedFont: [],
  setLoadedFont: (val) => val,
};

const ContextFont = createContext<ContextFontProps>(init);
export const useFont = () => useContext(ContextFont);

type ProviderFontProps = {
  fontList?: FontList;
};

export const ProviderFont: FC<ProviderFontProps> = ({
  children,
  fontList: fontListProps,
}) => {
  const [fontList, setFontList] = useState<FontList>(
    fontListProps || init.fontList
  );
  const [selectedFont, setSelectedFont] = useState<string>(init.selectedFont);
  const [userFont, setUserFont] = useState<UserFont>();
  const [loadedFont, setLoadedFont] = useState<LoadedFont>([]);

  useEffect(() => {
    if (!userFont) {
      fontList.map(({ url, group }) => {
        loadFont(url).then(({ font, variableAxes }) => {
          const fontFamily = font.names.fullName.en;
          // @ts-ignore
          newFontFace(fontFamily, url).then(() => {
            setLoadedFont((prev) => [
              ...prev,
              {
                name: fontFamily,
                font,
                group,
                variableAxes: variableAxes ? variableAxes : null,
              },
            ]);
          });
        });
      });
    } else {
      loadFont(userFont).then(({ font, variableAxes }) => {
        const fontFamily = font.names.fullName.en;

        // @ts-ignore / Installation user fonts
        newFontFace(fontFamily, userFont).then((res) => {
          const newName = res.name;
          setFontList((prev) => [...prev, { group: "user", name: newName }]);
          setSelectedFont(newName);
          setLoadedFont((prev) => [
            ...prev,
            {
              name: fontFamily,
              font,
              group: "user",
              variableAxes: variableAxes ? variableAxes : null,
            },
          ]);
        });
      });
    }
  }, [userFont]);

  return (
    <ContextFont.Provider
      value={{
        fontList,
        setFontList,
        selectedFont,
        setSelectedFont,
        userFont,
        setUserFont,
        loadedFont,
        setLoadedFont,
      }}
    >
      {children}
    </ContextFont.Provider>
  );
};
