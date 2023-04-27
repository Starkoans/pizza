import {useDispatch} from "react-redux";
import {addSameCartItem, deleteSameCartItem} from "../store/CartItemSlice.js";
import styles from './styles/CartItem.module.css'
export default function CartItem (props){

    const dispatch = useDispatch();

    const handleClickCount = (value)=>{


        switch (value) {
            case "-" :
                dispatch( deleteSameCartItem( {
                    id: props.cartItemId,
                    countValue: props.cartItemCount,

                }) )
                break;
            case "+" :

                dispatch( addSameCartItem( {
                    id: props.cartItemId,
                    countValue: props.cartItemCount,

                }) )

                break;

        }
    }


    return(
        <div>
            {

                <div className={styles.cartItem}>
                    <div className={styles.cartItemImgDiv}>
                        <img className={styles.cartItemImg} alt={'Pizza_img'} src={props.cartItemImg}/>
                    </div>

                    <div className={styles.cartItemDescription}>

                        <p className={styles.cartItemName}>{props.cartItemName}</p>
                        <p className={styles.cartItemPrice}>{props.cartItemPriceOfOne } руб.</p>
                        <div className={styles.cartItemCounter}>
                            <input type={"button"}
                                   className={styles.cartItemCounterBtn}
                                   value={"-"}
                                   onClick={(e)=>{
                                       handleClickCount(e.target.value);
                                   }}
                            />

                            <p className={styles.cartItemCountValue}>{props.cartItemCount}</p>

                            <input type={"button"}
                                   className={styles.cartItemCounterBtn}
                                   value={"+"}
                                   onClick={(e)=>{
                                       handleClickCount(e.target.value);
                                   }}
                            />

                        </div>

                    </div>

                    <div className={styles.cartItemDelete}>
                        <input
                            className={styles.cartItemDeleteBtn}
                            type={"button"}
                            value={'х'}>

                        </input>
                    </div>

                </div>
            }

        </div>

    )
}