import {Link, Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import '../index.css';
import {useSelector} from "react-redux";


export const Layout = () => {

    return(

        <div>

            <header className={'header'}>
                <Link to={"/"} className={'header-link'}>Пиццы</Link>
                <Link to={"/cart"}className={'header-link'}>Корзина</Link>
            </header>

                <Outlet></Outlet>


            <footer>
                Хачу питсы <br/> 2023
            </footer>

        </div>
    )

}