import PizzaItem from "../components/PizzaItem.jsx";
import {Pizzas} from "../DB/Pizzas.js";
import {useEffect, useState} from "react";

export const CatalogPage = () => {

    //состояние для сборки листа предметов в корзину
    const [addedItems, setAddedItems]=useState([]);

    //сосотояние предмета
    const [Item,setItem] = useState({});

    const handleAddItem = (data) =>{

        setItem( {
             ...Item,

            id: data.id,
            name:data.name,
            img : data.img,
            size: data.size,
            price: data.price,
            count: 1
        })
        console.log(data);

    }
    useEffect(()=>{
        if(Object.keys(Item).length !== 0){
            setAddedItems( [...addedItems, Item]);
        }

    },[Item]);


    useEffect(()=>{

        console.log(addedItems.length);
        console.log("В корзине: ");
        console.log(addedItems);
        // localStorage.setItem('cart',JSON.stringify(addedItems));
    },[addedItems])

  return(
      <div>It's RootPage
          {
              Pizzas.map((pizza,index)=>{
                return( <PizzaItem key={index}
                                   handleAddItem={handleAddItem}
                                   pizza={pizza}

                />)
              })
          }

          <p>Корзинка:</p>


      </div>
  )
}