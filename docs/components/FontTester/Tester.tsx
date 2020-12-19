import { useFont } from "@/lib/context/ContextFont";
import { useFontTester } from "@/lib/context/ContextFontTester";
import { useVariableFont } from "@/lib/context/ContextVariable";
import { useCallback } from "react";
import styles from "./font-tester.module.scss";

export const Tester = () => {
  const { selectedFont } = useFont();
  const { VFConfig } = useVariableFont();
  const { fontSize } = useFontTester();

  const fVariableStyle = useCallback(() => {
    if (!VFConfig) return {};
    const varStyle = JSON.stringify(VFConfig).replace(/[{}:]/g, "");
    return { fontVariationSettings: varStyle };
  }, [VFConfig]);

  return (
    <div className={styles.tester}>
      <section
        className={styles.editable}
        style={{
          fontFamily: `"${selectedFont}", "Alliance Platt", sans-serif`,
          fontSize,
          ...fVariableStyle(),
        }}
      >
        Shoreditch is a district in the East End of London, forming the southern
        part of London Borough of Hackney, with neighbouring parts of Tower
        Hamlets sometimes also precived as a part of the area. Typetools by
        Pulipola™.
      </section>
    </div>
  );
};
