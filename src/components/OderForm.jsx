import {Controller, useForm} from "react-hook-form";
import {useState} from "react";
import styles from './styles/OrderForm.module.css'

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
    <div>
        { isSent ? <div className={styles.orderFormMessage}> Ваш заказ отправлен!</div> :
        <form className={styles.orderForm}
            onSubmit={handleSubmit(onSubmit)}>
            <input type={"button"} value={"х"} className={styles.orderFormCloseBtn}/>
            <div className={styles.orderFormField}>
                <label className={styles.orderFormLabel}>Имя</label>
                <input
                    className={errors.firstName? styles.orderFormInputError : styles.orderFormInput}
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
                       }
                />
                <div className={styles.orderFormInputErrorText}>
                    {errors?.firstName && (errors.firstName.message || <p className={styles.orderFormInputError}>Error</p>) }
                </div>
            </div>

            <div className={styles.orderFormField}>
                <label>Фамилия</label>
                <input
                    className={errors.lastName? styles.orderFormInputError : styles.orderFormInput}
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
                            })}
                />
                <div
                    className={styles.orderFormInputErrorText}>
                    {errors?.lastName && (errors.lastName.message || <p>Error</p>) }
                </div>
            </div>

            <div className={styles.orderFormField}>
                <label>Номер телефона:</label>
                <input
                    className={errors.phone? styles.orderFormInputError : styles.orderFormInput}
                    placeholder = {"+7 - (___) - ___ - __ - __"}
                        {...register("phone",
                            {
                                required: "Поле обязательно к заполнению.",
                               pattern: {
                                    value: /^(?:\+7)?(?:\d{10})$/ ,
                                   message: "Некорректнный ввод."
                               }

                            })
                        }
                />
                <div
                    className={styles.orderFormInputErrorText}>
                    {errors?.phone && (errors.phone.message || <p>Error</p>) }
                </div>
            </div>

            <div className={styles.orderFormField}>
                <label>Город:</label>
                <input
                    className={errors.addressCit? styles.orderFormInputError : styles.orderFormInput}
                    type={"textarea"}
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
                           })}
                />
                <div
                    className={styles.orderFormInputErrorText}>
                    {errors?.addressCity && (errors.addressCity.message || <p>Error</p>) }
                </div>
            </div>

            <div className={styles.orderFormField}>
                <label>Улица:</label>
                <input
                    className={errors.addressStreet? styles.orderFormInputError : styles.orderFormInput}
                    type={"textarea"}
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
                               }})}
                />
                <div className={styles.orderFormInputErrorText}>
                    {errors?.addressStreet && (errors.addressStreet.message || <p>Error</p>) }
                </div>
            </div>
            <section className={styles.orderFormHouseSection}>
            <div className={styles.orderFormField}>
                <label>Дом:</label>
                <input
                    className={errors.addressHouseNum? styles.orderFormInputError : styles.orderFormInput}
                    type={"textarea"}
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
                               }})
                       }
                />
                <div className={styles.orderFormInputErrorText}>
                    {errors?.addressHouseNum && (errors.addressHouseNum.message || <p>Error</p>) }
                </div>
            </div>

            <div className={styles.orderFormField}>
                <label>Корпус:</label>
                <input
                    className={errors.addressCorpus? styles.orderFormInputError : styles.orderFormInput}
                    type={"textarea"}
                       {...register("addressCorpus",
                           {
                               required: false,
                               maxLength:{
                                   value:2,
                                   message: "Слишком много символов."
                               }})
                       }
                />
                <div className={styles.orderFormInputErrorText}>
                    {errors?.addressCorpus && (errors.addressCorpus.message || <p>Error</p>) }
                </div>
            </div>

            <div className={styles.orderFormField}>
            <label>Квартира:</label>
            <input
                className={errors.addressFlat? styles.orderFormInputError : styles.orderFormInput}
                type={"textarea"}
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
            <div className={styles.orderFormInputErrorText}>
                {errors?.addressFlat && (errors.addressFlat.message || <p>Error</p>) }
            </div>
            </div>
            </section>

            <div className={styles.orderFormField}>
            <label>Комментарий к заказу:</label>
                <textarea name="Комментарий к заказу:"
                          cols="10" rows="3"
                          className={styles.orderFormInputComment}
                          {...register("comm",
                              {
                                  required: false,
                                  maxLength:{
                                      value:200,
                                      message: "Слишком много символов."
                                  }

                              })
                          }>

                </textarea>

            <div className={styles.orderFormInputErrorText}>
                {errors?.comm && (errors.comm.message || <p>Error</p>) }
            </div>
            </div>
            <input type="submit" className={styles.orderFormSubmitBtn} />
            {
                 null
            }

        </form>}


    </div>
    );

}