import {useForm} from "react-hook-form";
import {useState} from "react";

export default function OrderForm(){
const [isSent, setIsSent] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
        mode,
        reset
    } = useForm({mode: "onBlur"});
    const onSubmit = data => {
        console.log(data);
        setIsSent(true);
        reset();
    };



    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Имя</label>
            <input defaultValue="test"
                   {...register("firstName", {
                    required: "Поле обязательно к заполнению.",
                       pattern: {
                           value: /^[А-Яа-яЁё\s]+$/ ||  /^[А-Яа-яЁё\s]+$/,
                           message: "Некорректнный ввод."
                       },
                    minLength: {
                        value: 2,
                        message: "Слишком мало символов."
                        },
                    maxLength:{
                        value:30,
                        message: "Слишком много символов."
                        }
                    })
            } />
            <div>
                {errors?.firstName && (errors.firstName.message || <p>Error</p>) }
            </div>

            <label>Фамилия</label>
            <input
                {...register("lastName",
                    {
                        required: "Поле обязательно к заполнению.",
                        pattern: {
                            value: /^[А-Яа-яЁё\s]+$/ ||  /^[А-Яа-яЁё\s]+$/,
                            message: "Некорректнный ввод."
                        },
                        minLength: {
                            value: 2,
                            message: "Слишком мало символов."
                            },
                        maxLength:{
                            value:30,
                            message: "Слишком много символов."
                            }
                    })
                } />
            <div>
                {errors?.lastName && (errors.lastName.message || <p>Error</p>) }
            </div>
            <label>Номер телефона:</label>
            <input placeholder = {"+7 - (___) - ___ - __ - __"}
                {...register("phone",
                    {
                        required: "Поле обязательно к заполнению.",
                       pattern: {
                            value: /^(?:\+7)?(?:\d{10})$/ ,
                           message: "Некорректнный ввод."
                       }

                    })
                } />

            <div>

                {errors?.phone && (errors.phone.message || <p>Error</p>) }
            </div>
            <label>Город:</label>
            <input type={"textarea"}
                   {...register("addressCity",
                       {
                           required: "Поле обязательно к заполнению.",
                           pattern: {
                               value: /^[А-Яа-яЁё\s]+$/ ||  /^[А-Яа-яЁё\s]+$/,
                               message: "Некорректнный ввод."
                           },
                           minLength: {
                               value: 3,
                               message: "Слишком мало символов."
                           },
                           maxLength:{
                               value:20,
                               message: "Слишком много символов."
                           }

                       })
                   } />
            <div>
                {errors?.addressCity && (errors.addressCity.message || <p>Error</p>) }
            </div>

            <label>Улица:</label>
            <input type={"textarea"}
                   {...register("addressStreet",
                       {
                           required: "Поле обязательно к заполнению.",
                           pattern: {
                               value: /^[А-Яа-яЁё\s]+$/ ||  /^[А-Яа-яЁё\s]+$/,
                               message: "Некорректнный ввод."
                           },
                           minLength: {
                               value: 3,
                               message: "Слишком мало символов."
                           },
                           maxLength:{
                               value:30,
                               message: "Слишком много символов."
                           }

                       })
                   } />
            <div>
                {errors?.addressStreet && (errors.addressStreet.message || <p>Error</p>) }
            </div>

            <label>Дом:</label>
            <input type={"textarea"}
                   {...register("addressHouseNum",
                       {
                           required: "Поле обязательно к заполнению.",
                           pattern: {
                               value: /[0-9]/ ,
                               message: "Некорректнный ввод."
                           },
                           minLength: {
                               value: 1,
                               message: "Слишком мало символов."
                           },
                           maxLength:{
                               value:3,
                               message: "Слишком много символов."
                           }
                       })
                   } />
            <div>
                {errors?.addressHouseNum && (errors.addressHouseNum.message || <p>Error</p>) }
            </div>
            <label>Корпус:</label>
            <input type={"textarea"}
                   {...register("addressCorpus",
                       {
                           required: false,
                           maxLength:{
                               value:2,
                               message: "Слишком много символов."
                           }
                       })
                   } />
            <div>
                {errors?.addressCorpus && (errors.addressCorpus.message || <p>Error</p>) }
            </div>

            <label>Квартира:</label>
            <input type={"textarea"}
                   {...register("addressFlat",
                       {
                           required: "Поле обязательно к заполнению.",
                           pattern: {
                               value: /[0-9]/ ,
                               message: "Некорректнный ввод."
                           },
                           minLength: {
                               value: 1,
                               message: "Слишком мало символов."
                           },
                           maxLength:{
                               value:3,
                               message: "Слишком много символов."
                           }
                       })
                   } />
            <div>
                {errors?.addressFlat && (errors.addressFlat.message || <p>Error</p>) }
            </div>

            <label>Комментарий к заказу:</label>
            <input type={"textarea"}
                   {...register("comm",
                       {
                           required: false,
                           maxLength:{
                               value:50,
                               message: "Слишком много символов."
                           }

                       })
                   } />
            <div>
                {errors?.comm && (errors.comm.message || <p>Error</p>) }
            </div>
            <input type="submit" />
            {
                isSent ? <div> Ваш заказ отправлен!</div> : null
            }

        </form>
    );

}