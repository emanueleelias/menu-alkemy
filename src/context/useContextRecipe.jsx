import { createContext, useState, useContext } from 'react';
import React from 'react';
import swal from 'sweetalert';

const RecipeContext = createContext([]);

export const useContextRecipe = () => useContext(RecipeContext);

const RecipeContextProvider = ({ children }) => {

    //Estado con la lista de recetas que se agregan al menu
    const [dishList, setDishList] = useState([]);
    const [veganCount, setVeganCount] = useState(0);
    const [notVeganCount, setNotVeganCount] = useState(0);

    //Agrega platos al menu
    function addDishMenu(dish) {
        const dishListNoDuplicates = [...dishList];
        if (dishListNoDuplicates.find((recipe) => recipe.id === dish.id) !== undefined) {
            setDishList(dishListNoDuplicates);
        } else {
            if ( dishList.length >= 4){
                swal({
                    title: "Oops!",
                    text: "Receta Eliminada del menu correctamente!",
                    icon: "error",
                    button: "Ok."
                  });
            } else {
                if(dish.vegan === true && veganCount<2) {
                    setVeganCount(veganCount+1);
                    setDishList([...dishList, { ...dish }])
                } else if(dish.vegan === false && notVeganCount<2) {
                    setNotVeganCount(notVeganCount+1);
                    setDishList([...dishList, { ...dish }]);
                    swal({
                        title: "Good job!",
                        text: "Receta Agregada correctamente!",
                        icon: "success",
                        button: "Aww yiss!"
                      });
                } else {                
                    swal({
                        title: "Oops!",
                        text: "Solo puede agregar 2 platos no veganos y 2 platos veganos",
                        icon: "error",
                        button: "Ok."
                     });
                }
            }
        }
    }

    //Promedio de precio 
    const averageHealtScore = () => {
        const suma = dishList.reduce((total, item) => total + item.healthScore, 0);
        return suma/dishList.length;
    }

    const averageReadyIn = () => {
        const suma = dishList.reduce((total, item) => total + item.readyInMinutes, 0);
        return suma/dishList.length;
    }

    //Devuelve el precio total del menu
    const priceTotal = () => (dishList.reduce((total, item) => total + item.pricePerServing, 0)).toFixed(2);

    //Remueve platos individuales
    const removeDishItem = (itemId) => {
        const dishListDeleteItem = dishList.filter((dish) => dish.id !== itemId);
        setDishList([...dishListDeleteItem]);
        swal({
            title: "Good job!",
            text: "No puedes agregar más de 4 platos",
            icon: "success",
            button: "Ok."
          });
    };

    //Borra todos los platos del menu
    const clearDishMenu = () => {
        setDishList([]);
        swal({
            title: "Good job!",
            text: "Eliminaste todos los platos",
            icon: "success",
            button: "Ok."
          });
    };


    return (
        <RecipeContext.Provider
            value={{
                dishList,
                addDishMenu,
                removeDishItem,
                clearDishMenu,
                averageReadyIn,
                priceTotal,
                averageHealtScore,
            }}
        >
            {children}
        </RecipeContext.Provider>
    )
}

export default RecipeContextProvider;