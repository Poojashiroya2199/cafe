import React, { useState, createContext, useContext, useMemo } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import StyledSidebar from "@/Components/Sidebar";

export const SidebarContext = createContext({});

// props validation
type Props = {
    children: any,
}

/**
 * [SidebarProvider]
 * @param {any} children
 * @returns SidebarProvider
 */
export default function SidebarProvider({children}: Props) {
  const [collapsed, setCollapsed] = useState(true);

  const handleSidebar:any = () => {
    setCollapsed(!collapsed);
  };

  const sidebarValue = useMemo(() => ({
    collapsed,
    handleSidebar
  }),[collapsed, handleSidebar])

   return (
   <ProSidebarProvider>
      <SidebarContext.Provider
        value={sidebarValue}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <StyledSidebar />
          {children}
        </div>
      </SidebarContext.Provider>
    </ProSidebarProvider>
  );
        }

  export const useSidebarContext = () => useContext(SidebarContext);