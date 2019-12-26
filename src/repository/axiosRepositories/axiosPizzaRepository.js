import axios from '../../custom_axios/axios';

const PizzaService = {
    loadPizzas: () => {
        return axios.get("/pizzas")
    },

    loadIngredients: () => {
        return axios.get("/ingredients")
    },
    deleteIngredient: (ing)=>{
        return axios.delete("/ingredients/"+ing.name);
    },
    editIngredient: (ing,oldName)=>{
        return axios.patch("/ingredients/"+oldName,ing,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    addIngredient: (newIngredient)=>{
        return axios.post("/ingredients",newIngredient,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export default PizzaService;