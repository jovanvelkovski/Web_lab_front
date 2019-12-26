import React, {useEffect, useState} from 'react';
import axios from '../../../custom_axios/axios';

const IngredientDetails = () => {
    const[ing, setIng] = useState({
        name: "Default",
        spicy: false,
        amount: 999,
        veggie: false,
        pizzas: []
    });

    useEffect(() => {
       const ingredientName = window.location.pathname.split("/")[2];
       axios.get("/ingredients/" + ingredientName).then(data => {
           setIng(data.data);
       })
    }, []);


    return (
        <div>
            <h2><b>DETAILS</b></h2>
            <p>Name: {ing.name}</p>
            <p>Spicy: {ing.spicy.toString()}</p>
            <p>Amount: {ing.amount}</p>
            <p>Veggie: {ing.veggie.toString()}</p>

            <ul>
                <p>Pizzas: </p>
                {ing.pizzas.map(pica => <li>
                    {pica.name}, {pica.description}
                </li>)}
            </ul>
        </div>
    )
};

export default IngredientDetails;