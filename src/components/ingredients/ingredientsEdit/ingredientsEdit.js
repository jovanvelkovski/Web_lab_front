import React, {useState, useEffect} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import axios from '../../../custom_axios/axios';

const ingredientsEdit = (props) => {

    const [term,setTerm] = useState({});
    const termId = useParams();
    const history = useHistory();


    useEffect(() => {
        axios.get("/ingredients/"+termId.ingredientId).then((data)=>{
            setTerm(data.data);
        })
    },[]);

    const onFormSubmit = (formData) => {
        const oldName = window.location.pathname.split("/")[2];
        formData.preventDefault();

        const term = {
            "name": formData.target.ingredientName.value,
            "spicy": formData.target.ingredientSpicy.checked,
            "amount": formData.target.ingredientAmount.value,
            "veggie": formData.target.ingredientVeggie.checked,
            "pizzas": []
        };

        props.onEdit(term, oldName);
        history.push("/ingredients");
    };

    return(
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Edit Ingredient</h4>
                <div className="form-group row">
                    <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Ingredient name</label>
                    <div className="col-sm-6">
                        <input name="ingredientName" value={term.name} type="text" className="form-control" id="ingredient" placeholder="Ingredient name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Amount</label>
                    <div className="col-sm-6">
                        <input name="ingredientAmount" value={term.amount} type="text" className="form-control" id="amount" placeholder="Amount"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="veggie" className="col-sm-4 offset-sm-1 text-left">Veggie</label>
                    <div className="col-sm-6 col-xl-4">
                        <input name="ingredientVeggie" checked={term.veggie} type="checkbox" className="form-control" id="veggie"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="spicy" className="col-sm-4 offset-sm-1 text-left">Spicy</label>
                    <div className="col-sm-6 col-xl-4">
                        <input name="ingredientSpicy" checked={term.spicy} type="checkbox" className="form-control" id="spicy"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
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

export default ingredientsEdit;