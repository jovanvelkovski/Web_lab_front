import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import $ from 'jquery/dist/jquery';

const ingredientAdd = (props) => {

    const history = useHistory();


    const onFormSubmit = (formData) => {
      formData.preventDefault();

        const newIngredient = {
            "name": formData.target.ingredientName.value,
            "spicy": formData.target.ingredientSpicy.checked,
            "amount": formData.target.ingredientAmount.value,
            "veggie": formData.target.ingredientVeggie.checked,
            "pizzas": []
        };

        props.onNewIngredientAdded(newIngredient);
        history.push("/ingredients");
    };
    //
    // const term = {
    //     "name": "",
    //     "spicy": false,
    //     "amount": 0,
    //     "veggie": false,
    //     "pizzas": []
    // };

    // let isEnabled = false;
    // const handleButtonOnChange  = (e) => {
    //     const ime = document.getElementById('ingredient').value;
    //     const kol = document.getElementById('amount').value;
    //
    //     if((ime.length < 50 && kol.length < 50) && (ime !== "" && kol !== "")){
    //         isEnabled = true;
    //     }
    //     else{
    //         isEnabled = false;
    //     }
    //     console.log(isEnabled)
    //     console.log(ime)
    //     console.log(kol)
    //     let s =document.getElementById('kopche');
    //     s.disabled = true;
    // };


    function handleButtonOnChange() {
        //debugger;
        if ($("#ingredient").val().length > 50 ||
            $("#ingredient").val() === "" ||
            $("#amount").val() > 999999999 ||
            $("#amount").val() === "")
            $("#kopche").attr("disabled", true);

        else
            $("#kopche").attr("disabled", false);

        console.log($("#ingredient").val())
        console.log($("#amount").val())
    }

    return(
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add Ingredient</h4>
                <div className="form-group row">
                    <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Ingredient name</label>
                    <div className="col-sm-6">
                        <input name="ingredientName" type="text" className="form-control" onChange={handleButtonOnChange} id="ingredient" placeholder="Ingredient name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Amount</label>
                    <div className="col-sm-6">
                        <input name="ingredientAmount" type="text" className="form-control" onChange={handleButtonOnChange} id="amount" placeholder="Amount"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="veggie" className="col-sm-4 offset-sm-1 text-left">Veggie</label>
                    <div className="col-sm-6 col-xl-4">
                        <input name="ingredientVeggie" type="checkbox" className="form-control" id="veggie"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="spicy" className="col-sm-4 offset-sm-1 text-left">Spicy</label>
                    <div className="col-sm-6 col-xl-4">
                        <input name="ingredientSpicy" type="checkbox" className="form-control" id="spicy"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            id="kopche"
                            type="submit"
                            className="btn btn-primary text-upper">
                            Save
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            type="reset"
                            className="btn btn-warning text-upper">
                            Reset
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <Link to={"/ingredients"}>
                            <button
                                className="btn btn-danger text-upper">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default ingredientAdd;