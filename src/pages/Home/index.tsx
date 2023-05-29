import Image from "next/image";
import Link from "next/link";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";

// css
import { Header, HomeWrapper, NotificationLink, SearchInput, SearchWrapper, User, Wrapper } from './index.module';
import { useSidebarContext } from "@/Providers/SidebarProvider";
import OrderCard from "@/Components/OrderCard";

/**
 * [HomePage]
 * @returns HomePage
 */
export default function HomePage() {
    const { collapsed } = useSidebarContext();

    return (
        <HomeWrapper collapsed={collapsed}>
            <div>
                <Header>
                    <SearchWrapper>
                        <SearchInput type="text" />
                        <AiOutlineSearch />
                    </SearchWrapper>
                    <Wrapper>
                        <NotificationLink href="#" >
                            <MdOutlineNotificationsActive />
                        </NotificationLink>
                        <User title="User">
                            <FcBusinessman />
                        </User>
                    </Wrapper>
                </Header>
                <div>
                    <OrderCard />
                    <OrderCard />
                </div>
            </div>
        </HomeWrapper>
    )
}