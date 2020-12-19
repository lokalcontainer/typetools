import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
// import VariableFont from "../variablefont";
import { useFont } from "./ContextFont";
import { FontNames } from "opentype.js";

type VFAxisProps = any[] | null;
type VFConfigProps = any | null;

type ContextVariableProps = {
  VFAxis: VFAxisProps;
  setVFAxis: Dispatch<SetStateAction<VFAxisProps>>;
  VFConfig: VFConfigProps;
  setVFConfig: Dispatch<SetStateAction<VFConfigProps>>;
  fontInfo: FontNames | undefined;
  setFontInfo: Dispatch<SetStateAction<FontNames | undefined>>;
};

const ContextVariable = createContext<ContextVariableProps>({
  VFAxis: [],
  setVFAxis: (val) => val,
  VFConfig: undefined,
  setVFConfig: (val) => val,
  fontInfo: undefined,
  setFontInfo: (val) => val,
});
export const useVariableFont = () => useContext(ContextVariable);

export const ProviderVariable: FC = ({ children }) => {
  const { loadedFont, selectedFont } = useFont();
  const [VFAxis, setVFAxis] = useState<VFAxisProps>([]);
  const [VFConfig, setVFConfig] = useState<VFConfigProps>();
  const [fontInfo, setFontInfo] = useState<FontNames | undefined>();

  useEffect(() => {
    if (loadedFont) {
      const filetered = loadedFont.find(({ name }) => name === selectedFont);
      if (filetered) {
        const axes = filetered.variableAxes;
        setFontInfo(filetered.font.names);
        if (axes) {
          // @ts-ignore
          const axesOBJ = axes.reduce((obj, item) => {
            return Object.assign(obj, { [item.tag]: item.defaultValue });
          }, {});
          setVFConfig(axesOBJ);
          setVFAxis(axes);
        } else {
          setVFConfig(null);
          setVFAxis(null);
        }
      }
    }
  }, [loadedFont, selectedFont]);

  return (
    <ContextVariable.Provider
      value={{
        VFAxis,
        setVFAxis,
        VFConfig,
        setVFConfig,
        fontInfo,
        setFontInfo,
      }}
    >
      {children}
    </ContextVariable.Provider>
  );
};
