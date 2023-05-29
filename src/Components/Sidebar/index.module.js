import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const SidebarContainer = styled.section`
  max-width: fit-content;
  width: fit-content;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  background-color: #03254c;
  height: 100vh;
  padding: 20px 16px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.collapsed && css`
      width: 70px;
      max-width: 70px;
    `}
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
align-items: center;
`;

export const User = styled.h3`
   font-size: 24px;
   line-height: 28px;
`;

export const UserImage = styled(Image)`
  width: 90px;
  height: 90px;
  background-color:white;
  border-radius: 50%;
  margin: 24px 0;
`;

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SidebarMenu = styled.ul`
  width: 100%;
  min-width: 100%;
 
`;

export const SidebarMenuItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuItem = styled(Link)`
 margin: 10px 0;
 width: 100%;
 display: flex;
 align-items: center;
 color: white;
 background: none;
 outline: none;
 border: 1px solid rgba(255,255,255,0.4);
 padding: 8px;
 border-radius: 8px;
 font-size: 18px;
 line-height:24px;
 cursor: pointer;
 box-shadow: 2px 2px rgba(255,255,255,0.2);

 & > *:first-child {
  margin-right: 15px;
 }

 ${(props) => props.collapsed && css`
   padding: 6px;
   justify-content: center;
  
   & > *:first-child {
    margin-right: 0px;
   }
 `}

 ${(props) => !props.collapsed && css`
   width: 160px;
 `}
`;