import axios from 'axios';
import React, { useState } from 'react';
import { Formik } from 'formik';
import DishItem from './DishItem';
import FormSearch from './FormSearch';
import Spinner from '../../commons/Spinner';
import swal from 'sweetalert';

const SearchRecipes = () => {

  const [recetas, setRecetas] = useState([])
  const [search, setSearch] = useState(false);
  const keyApi = "917f4d91107f4f17ba39cb595415a3a8";
  const urlApi = "https://api.spoonacular.com/recipes/";
  
  return (
    <>
      <Formik 
            initialValues={{
                inputSearch: '',
            }}

            validate={(value) => {
                let errors = {};
                //Validación de la busqueda
                if(!value.inputSearch) {
                  errors.inputSearch = 'Por favor ingrese una receta'
                }else if(value.inputSearch.length < 3) {
                  errors.inputSearch = 'El nombre del plato debe tener más de dos letras'
                }
                return errors;
            }}

            onSubmit={(value, {resetForm}) => {
              setSearch(true);
              setRecetas([]);
              //Aqui la llamada a la API.
              axios.get(`${urlApi}complexSearch?apiKey=${keyApi}&query=${value.inputSearch}&addRecipeInformation=true`)
                .then(function (response) {
                  response.data.results.length === 0 
                  ? 
                  setTimeout(() => {
                    swal("Oops!", "No se encontraron platos con ese nombre", "error");
                    resetForm();
                  },2201)
                  :
                    setRecetas(response.data.results);
                    resetForm();
                })
                .catch((error) => {
                  console.log(error)
                })
                .finally(setTimeout(() => {
                  setSearch(false);
                }, 2200));
            }}
        >
          {( { errors }) => (   
            <FormSearch errors={errors} />
          )}
      </Formik> 

        <section className='container mt-5'>
          <>
            {search 
              ?
                <Spinner />
              :
                <div id='aqui' className='grid'>
                  {recetas.map((receta) => {
                    return <DishItem 
                            key={receta.id}
                            receta={receta}
                          />
                  })}
                </div>
            }
          </>
        </section>
    </>
  )
}

export default SearchRecipes;


