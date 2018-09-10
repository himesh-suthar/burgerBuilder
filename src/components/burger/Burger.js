import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './BurgerIngredient';
const burger = (props) => {
    const newIngredient = Object.keys(props.ingredients).map(key=>{
        return[...Array(props.ingredients[key])].map((_,i)=>{
           return  <BurgerIngredient key={key + i} type={key} />
        })
    })
    return(
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
            {newIngredient}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    )
}

export default burger;