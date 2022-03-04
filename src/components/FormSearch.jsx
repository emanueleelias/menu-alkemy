import { Form, Field, ErrorMessage } from "formik";
import React from 'react';
import cooking from '../assets/cooking.png';

export const FormSearch = ({errors}) => {
  return (
    <div className="container">
      <div className="row">
          <div className="col-sm-12 col-md-6">
            <img className="img-fluid" src={cooking} alt="Imagen de cocina" />
          </div>

          <Form className='d-flex flex-column justify-content-center col-sm-12 col-md-6 container'>
          <h1 className="mb-3 fw-normal">Buscador de recetas</h1>

            <div className=" mb-3">
              <label className='text-sm-center form-label' htmlFor="inputSearch">Nombre del plato</label>
              <Field 
                className="form-control" 
                name="inputSearch" 
                type="text" 
                id="floatingInput" 
                placeholder="pizza" 
              />
              <ErrorMessage name='inputSearch' component={() => (<div className="alert alert-danger" role="alert">{errors.inputSearch}</div>) }/>
            </div>

          <button className="btn btn-primary" type="submit">Buscar</button>
        </Form>
      </div>
    </div>
  )
}

export default FormSearch;