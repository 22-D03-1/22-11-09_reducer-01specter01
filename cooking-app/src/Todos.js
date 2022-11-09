import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useReducer } from "react";
import recipes from "./components/recipes";

const initState = {
    checkedBoxTrue: "",
    checkedBoxFalse: "",
    alert: null,
};

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
    const [todos, dispatch] = useReducer(reducer, initState);

    const handleCompleate = (todo) => {
        dispatch({ type: "COMPLEATE", id: todo.id });
    };
    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.compleate}
                            onChange={() => handleCompleate(todo)}
                            value={todos.checkedBoxTrue}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    );
}

export default Todos;
