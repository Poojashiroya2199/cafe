import Image from 'next/image';
import styled from 'styled-components';

export const OrderListItem = styled.li`
  display: flex;
  align-items:center;
  padding: 8px;
  margin-bottom:10px;
  border-bottom: 1px solid lightgrey;
`;

export const OrderItemImg = styled(Image)`
  width: 50px;
  border-radius: 50%;
  height: 50px;
  image-orientation: center;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  width: 158px;
`;

export const ItemName = styled.h4``;

export const ItemDesc = styled.p`
 font-size: 14px;
 color: lightgrey;
 line-height: 16px;
 margin: 5px 0;
`;

export const QuantityWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;
`;

export const Quantity = styled.p``;

export const ItemPrice = styled.h4``;
