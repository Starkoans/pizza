import {Link, Outlet} from "react-router-dom";

export const Layout = () => {

    return(

        <div>
            <header>
                <Link to={"/"}>Пиццы</Link>
                <Link to={"/cart"}>Корзина</Link>
            </header>
            
            <Outlet></Outlet>

            <footer>
                Хачу питсы <br/> 2023
            </footer>

        </div>
    )

}