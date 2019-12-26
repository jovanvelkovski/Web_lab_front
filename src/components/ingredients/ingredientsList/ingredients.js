import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Ingredient extends Component {
    render() {
        return(
            <div className="row">
                <h4 className="text-upper text-left"><b>Ingredients</b></h4>
                <div className="table-responsive">
                    <table className="table tr-history table-striped small">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Spicy</th>
                            <th scope="col">Veggie</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>

                        {this.props.listOfIngredients.map((ing, ingID) =>
                            <tr>
                                <td scope="col">{ing.name}</td>
                                <td scope="col">{ing.amount}</td>
                                <td scope="col">{ing.spicy.toString()}</td>
                                <td scope="col">{ing.veggie.toString()}</td>
                                <td scope="col">

                                    <Link to={"/ingredients/"+ing.name+"/edit"}>
                                        <button className="btn btn-sm btn-secondary">
                                            <span className="fa fa-edit"/>
                                            <span><strong>Edit</strong></span>
                                        </button>
                                    </Link>

                                    <button onClick={()=>this.props.onDelete(ing)} className="btn btn-sm btn-outline-secondary ">
                                        <span className="fa fa-remove"/>
                                        <span><strong>Remove</strong></span>
                                    </button>

                                    <Link to={"/ingredients/"+ing.name+"/details"}>
                                        <button className="btn btn-sm btn-outline-dark">
                                            <span><strong>Details</strong></span>
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </div>
                <Link to={"/ingredients/new"}>
                    <button className="btn btn-outline-secondary">
                        <span><strong>Add new ingredient</strong></span>
                    </button>
                </Link>

                <br/><br/><br/>

                {/*<ul>*/}
                {/*    {this.props.listOfIngredients.map(ing =>*/}
                {/*    <li>*/}
                {/*        {ing.name}*/}
                {/*    </li>)}*/}
                {/*</ul>*/}
            </div>
        );
    }
}

export default Ingredient;