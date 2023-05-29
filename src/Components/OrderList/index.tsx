import OrderItem from "../OrderItem";
import { OrderListWrapper } from './index.module';

export default function OrderList () {
    return (
        <OrderListWrapper>
      <OrderItem />
      <OrderItem />
      </OrderListWrapper>
    )
}