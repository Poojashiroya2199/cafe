import { FcBusinessman } from "react-icons/fc";

import StyledIcon from "../Icon";
import OrderList from "../OrderList";

//css
import { OrderCardHeader, OrderCardWrapper, OrderNumWrapper, OrderNum, OrderTime, IconWrapper } from './index.module';

export default function OrderCard (){
    return (
        <OrderCardWrapper>
            <OrderCardHeader>
                <OrderNumWrapper>
                    <OrderNum>Order #123</OrderNum>
                    <OrderTime>time</OrderTime>
                </OrderNumWrapper>
                <IconWrapper>
                <FcBusinessman />
                </IconWrapper>
            </OrderCardHeader>
            <OrderList />
        </OrderCardWrapper>
    )
}