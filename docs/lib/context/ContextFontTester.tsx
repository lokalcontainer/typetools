import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ContextFontTesterProps = {
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
};

const init: ContextFontTesterProps = {
  fontSize: 48,
  setFontSize: (val) => val,
};

const ContextFontTester = createContext<ContextFontTesterProps>(init);
export const useFontTester = () => useContext(ContextFontTester);
export const ProviderFontTester: FC = ({ children }) => {
  const [fontSize, setFontSize] = useState<number>(init.fontSize);
  return (
    <ContextFontTester.Provider value={{ fontSize, setFontSize }}>
      {children}
    </ContextFontTester.Provider>
  );
};
