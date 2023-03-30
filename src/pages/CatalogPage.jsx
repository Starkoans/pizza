import PizzaItem from "../components/PizzaItem.jsx";
import {Pizzas} from "../DB/Pizzas.js";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";


export const CatalogPage = () => {

  return(
      <div className={'catalog'}>
          {
              Pizzas.map((pizza,index)=>{
                return( <PizzaItem key={index}
                                   pizza={pizza}

                />)
              })
          }
      </div>
  )
}