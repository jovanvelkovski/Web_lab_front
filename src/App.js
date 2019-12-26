import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Header from '../src/components/header';
import Home from '../src/components/home';
import Pizzas from '../src/components/pizzas/pizzasList/pizzas'
import PizzaService from "./repository/axiosRepositories/axiosPizzaRepository";
import Ingredient from "./components/ingredients/ingredientsList/ingredients";
import IngredientDetails from "./components/ingredients/ingredientsDetails/ingredientsDetails";
import IngredientAdd from '../src/components/ingredients/ingredientsAdd/ingredientsAdd';
import IngredientEdit from '../src/components/ingredients/ingredientsEdit/ingredientsEdit';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            terms: [],
            ingredients: []
        }
    }

    componentDidMount() {
        this.loadListOfPizzas();
        this.loadListOfIngredients();
    }

    loadListOfPizzas = () => {
        PizzaService.loadPizzas().then(response => {
            this.setState((prevState) => {
                return {
                    terms: response.data.content
                }
            })
        })
    };

    loadListOfIngredients = () => {
        PizzaService.loadIngredients().then(response => {
            this.setState((prevState) => {
                return {
                    ingredients: response.data.content
                }
            })
        })
    };

    deleteIngredient = (ing) => {
       PizzaService.deleteIngredient(ing);
        this.setState((prevState) => {
            const startIndex = prevState.ingredients.findIndex(i => i.name === ing.name);
            prevState.ingredients.splice(startIndex, 1);
            const ingredients = prevState.ingredients;

            return {
                ingredients: ingredients
            }
        })

    };

    editIngredient = (ing, oldName) => {
        PizzaService.editIngredient(ing, oldName).then(response => {
            this.loadListOfIngredients();
        })
    };

    createIngredient = (newIngredient) => {
        PizzaService.addIngredient(newIngredient).then(resp => {
            const newIng = resp.data;

            this.setState((prevState) => {
                const ingredients = prevState.ingredients.concat(newIng);
                return {
                    ingredients: ingredients
                }
            });
            this.loadListOfIngredients();
        })
    };

    render() {
        return(
            <Router>
                <div className="app">
                    <Header/>
                    <div className="container">
                        <Route path={"/home"} exact>
                            <Home/>
                        </Route>

                        <Route path={"/pizzas"} exact>
                            <Pizzas listOfPizzas={this.state.terms}/>
                        </Route>

                        <Route path={"/ingredients"} exact>
                            <Ingredient listOfIngredients={this.state.ingredients} onDelete={this.deleteIngredient} />
                        </Route>

                        <Route path={"/ingredients/:ingredientId/details"}>
                            <IngredientDetails/>
                        </Route>

                        <Route path={"/ingredients/new"} exact>
                            <IngredientAdd onNewIngredientAdded={this.createIngredient}/>
                        </Route>

                        <Route path={"/ingredients/:ingredientId/edit"}>
                            <IngredientEdit onEdit={this.editIngredient}/>
                        </Route>

                        <Redirect to={"/home"}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;