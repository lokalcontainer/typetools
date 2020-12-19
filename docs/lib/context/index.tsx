import { FC } from "react";
import { ProviderFont } from "./ContextFont";
import { ProviderVariable } from "./ContextVariable";

export const ProviderApp: FC = ({ children }) => {
  return (
    <ProviderFont>
      <ProviderVariable>{children}</ProviderVariable>
    </ProviderFont>
  );
};
