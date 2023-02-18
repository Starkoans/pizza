import React, {useEffect, useState} from 'react';

function SizeRadio(props) {


    return(
        <div>
            {
                props.sizesArr.map((size, index)=>(
                    <input key={index}
                        type={"button"}
                        name="sizeType"
                        value={size}
                        style={props.pizzaSize === size ?  {color:"green"}:{color:"grey"}}
                        onClick={(e) => props.selectSize(e.target.value)}
                    />)
                )
            }
        </div >
    )
}
export default function PizzaItem (props){

    const sizesArr = ["25см","30см","40см"];

    const [selectedSizeType, setSizeType ]= useState(sizesArr[0]);
    const handleClickSizeType = (data) => {
        setSizeType( data);
    }
    const [price, setPrice] = useState(props.pizza.price[0]);

    useEffect(()=>{

            switch (selectedSizeType) {
                case sizesArr[0] :
                    setPrice(props.pizza.price[0]);
                    break;
                case sizesArr[1] :
                    setPrice(props.pizza.price[1]);
                    break;
                case sizesArr[2] :
                    setPrice( props.pizza.price[2]);
                    break;
            }
        }
        ,[selectedSizeType]
    )

    const [selectedItem, setSelectedItem]= useState({});

    //записывает, когда меняется состояние, а надо записывать когда происходит клик
    const handleClickAddItem = (data)=>{

        setSelectedItem({
             ...selectedItem,

            id: props.pizza.id,
            name:props.pizza.name,
            img : props.pizza.img,
            size: selectedSizeType,
            price: price,
            count: 1
        })

        console.log(selectedItem);

    }

    useEffect(()=>{

        if (Object.keys(selectedItem).length !== 0){
            props.handleAddItem(selectedItem);
        }


    },[selectedItem])



    return(
        <div>
            <img style={{height:'200px',weight: '200px'} } alt={'Pizza_'+props.pizza.name} src={props.pizza.img}/>
            <h3>{props.pizza.name}</h3>
            <p>{props.pizza.type}</p>
            <p>{props.pizza.description}</p>

            <SizeRadio pizzaSize={selectedSizeType}
                       sizesArr={sizesArr}
                       selectSize={handleClickSizeType} />

            <h3>{price} руб.</h3>
            <input type={"button"}
                   value={"Добавить"}
                   onClick={handleClickAddItem}

            />

        </div>
    )
}