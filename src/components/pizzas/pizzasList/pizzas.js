import React from 'react';
import PizzaTerm from '../pizzasList/pizzaTerm';

const pizzas = (props) => {
    const pizzasList = getPizzasList();

    return(
        <div>
            <br/>
            <h2><b>Our pizzas:</b></h2>
            <br/>
            {pizzasList}
        </div>
    );

    function getPizzasList(){
        return props.listOfPizzas.map((v, index) =>
            <PizzaTerm pizzaName={v.name} pizzaDescription={v.description} key={index}/>
        );
    }
};

export default pizzas;