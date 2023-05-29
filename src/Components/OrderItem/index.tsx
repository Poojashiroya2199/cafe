import Image from "next/image";

import Images from "@/Utils/Images";

//css
import { ItemContent, ItemPrice, ItemDesc, ItemName, OrderItemImg, OrderListItem, Quantity, QuantityWrapper } from './index.module';

export default function OrderItem () {
    return (
        <OrderListItem>
              <OrderItemImg src={Images.chapati} alt="" />
            <ItemContent>
              <ItemName>Sandwich</ItemName>
              <ItemDesc>veg grilled</ItemDesc>
              <QuantityWrapper>
                <ItemPrice>$5.0</ItemPrice>
                <Quantity>Quntity: 1</Quantity>
              </QuantityWrapper>
            </ItemContent>
        </OrderListItem>
    )
}