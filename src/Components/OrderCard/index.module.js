import styled from "styled-components";

export const OrderCardWrapper = styled.div`
  width: 250px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  border: 1px solid grey;
  margin: 5px;
  padding: 12px 15px;
`;

export const OrderCardHeader = styled.div`
  display: flex;
  alignitems: center;
  justify-content: space-between;
`;

export const OrderNumWrapper = styled.div`
  margin-bottom: 18px;
`;

export const OrderNum = styled.h4`
  color: black;
`;

export const OrderTime = styled.p`
  color: grey;
  font-size: 14px;
  line-height: 16px;
`;

export const IconWrapper = styled.button`
  background: whitesmoke;
  outline: none;
  border: none;
  padding: 0;
  border-radius: 50%;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  width: 24px;
  height: 24px;
`;
