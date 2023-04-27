import {Link, Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import styles from "./styles/Layout.module.css"
import {useSelector} from "react-redux";
import LogoSvg from "../../PizzaLogo.svg"
import CartSVg from "../../material-symbols_shopping-cart-sharp.svg"

export const Layout = () => {

    return(

        <div>

            <header className={styles.header} >
                <img src={LogoSvg} className={styles.headerLogoSvg} alt={"Logo"}/>
                <Link to={"/"} className={styles.headerLinks}>Пиццы</Link>
                <Link to={"/cart"} className={styles.headerLinks}>

                    <img src={CartSVg}className={styles.cartSvg} alt={"Cart"}/>
                    </Link>
            </header>

                <Outlet></Outlet>


            <footer className={styles.footer}>
                Хачу питсы <br/> 2023
            </footer>

        </div>
    )

}