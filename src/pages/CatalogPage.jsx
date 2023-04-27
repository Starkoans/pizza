import PizzaItem from "../components/PizzaItem.jsx";

import React, {useEffect, useState} from "react";
import styles from './styles/CatalogPage.module.css'



export const CatalogPage = () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch("https://64412df1792fe886a8a08448.mockapi.io/items")
            .then(response => response.json())
            .then( res => setItems(res))

    }, [])

  return(

      <div className={styles.catalog}>
          {

              items.map((pizza,index)=>{
                return( <PizzaItem key={index}
                                   pizza={pizza}

                />)
              })

          }
      </div>
  )
}