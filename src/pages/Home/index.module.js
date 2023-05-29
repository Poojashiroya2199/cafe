import Link from "next/link";
import styled, { css } from "styled-components";

export const HomeWrapper = styled.section`
  background-color: #fff;
  padding: 24px;
  width: calc(100% - 192px);
  box-sizing: border-box;

  ${props => props.collapsed && css`
    width: calc(100% - 70px);
  `}
`;

export const Header = styled.header`
  display: flex;
  justify-content:space-between;
  align-items:center;
`;

export const SearchWrapper = styled.div`
 padding: 5px 5px 5px 8px;
 border: 1px solid grey;
 display: flex;
 align-items: center;
 width: fit-content;
 border-radius: 6px;
`;

export const SearchInput = styled.input`
  border: none;
  outline:none;
  font-size: 16px;
  line-height:20px;
  font-weight: 600px;
  &:input:focus {
    outline: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NotificationLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  & > *{
    width: 25px;
    height: 25px;
    margin-right: 12px;
  }
`;

export const User = styled.button`
  border-radius: 50%;
  border:none;
  outline: none;
  padding: 8px;

  & > *{
    width: 25px;
    height: 25px;
  }
`;

