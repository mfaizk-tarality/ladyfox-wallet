import React, { createContext, useContext, useState } from "react";

type UiProps = {
  networkModal: boolean;
  setNetworkModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UIStore = createContext<UiProps | undefined>(undefined);

export const UIStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [networkModal, setNetworkModal] = useState(false);
  return (
    <UIStore value={{ networkModal, setNetworkModal }}>{children}</UIStore>
  );
};

export const useUIStore = (): UiProps => {
  const context = useContext(UIStore);
  if (context === undefined) {
    throw new Error("useUIStore must be used within a UIProvider");
  }
  return context;
};
