import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useReducer } from "react";
import recipes from "./components/recipes";

const initState = {
    checkedBox: [],
    alert: null,
};
// array von checkedbox i hinzufügen

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLEATED":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, compleate: !todo.compleate };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

function Todos() {
    const [state, dispatch] = useReducer(reducer, initState);

    const handleCompleate = (i) => {
        dispatch({ type: "COMPLEATE", index: i });
    };
    return (
        <>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    {recipe.zubereitung.map((schritt, i) => (
                        <label>
                            <input
                                type="checkbox"
                                checked={false}
                                onChange={() => handleCompleate(i)}
                            />
                            {schritt}
                        </label>
                    ))}
                </div>
            ))}
        </>
    );
}

export default Todos;
