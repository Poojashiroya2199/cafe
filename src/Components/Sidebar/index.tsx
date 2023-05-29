import {
  FcMenu,
  FcClock,
  FcHome,
  FcSettings,
  FcConferenceCall,
} from "react-icons/fc";
import { AiFillCaretLeft } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import StyledIcon from "../Icon";
import Images from "@/Utils/Images";
import { useSidebarContext } from "@/Providers/SidebarProvider";

//css
import {
  SidebarContainer,
  NavigationContainer,
  User,
  NavigationBar,
  SidebarMenu,
  SidebarMenuItem,
  MenuItem,
  UserImage,
} from "./index.module";

/**
 * [Sidebar]
 * @returns Sidebar
 */
export default function StyledSidebar() {
  const { collapsed, handleSidebar } = useSidebarContext();

  return (
    <SidebarContainer collapsed={collapsed}>
      <NavigationContainer>
        {!collapsed && (
          <>
            <NavigationBar>
              <User>Admin</User>
              <StyledIcon
                handleClick={handleSidebar}
                icon={<AiFillCaretLeft />}
              />
            </NavigationBar>
            <UserImage src={Images.logo} alt="user-image" />
          </>
        )}
        {collapsed && (
          <StyledIcon handleClick={handleSidebar} icon={<FcMenu />} />
        )}
      </NavigationContainer>
      <SidebarMenu>
        <SidebarMenuItem>
          <MenuItem href="/Home" collapsed={collapsed}>
            <FcHome width="15px" height="22px" />
            {!collapsed && "Home"}
          </MenuItem>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <MenuItem href="/menu" collapsed={collapsed}>
            <MdOutlineRestaurantMenu width="15px" height="22px" />
            {!collapsed && "Menu"}
          </MenuItem>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <MenuItem href="/orders" collapsed={collapsed}>
            <FcClock width="15px" height="22px" />
            {!collapsed && "Order History"}
          </MenuItem>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <MenuItem href="/customers" collapsed={collapsed}>
            <FcConferenceCall width="15px" height="22px" />
            {!collapsed && "Custormers"}
          </MenuItem>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <MenuItem href="/setting" collapsed={collapsed}>
            <FcSettings width="15px" height="22px" />
            {!collapsed && "Settings"}
          </MenuItem>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
}
