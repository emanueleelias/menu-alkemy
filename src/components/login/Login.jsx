import React from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import { useState } from 'react';
import login from '../../assets/login.png';
import { useAuth } from '../../context/useContextAuth';

const Login = () => {

    const { handleLogin } = useAuth();
    

    const [formSubmit, setFormSubmit] = useState(false);

    return (
        <Formik 
            initialValues={{
                email: '',
                password: '',
            }}

            validate={(values) => {
                let errors = {};
                const regularExpresionMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

                //Validación del correo
                if(!values.email) {
                    errors.email = 'Por favor ingrese un nombre';
                } else if (!regularExpresionMail.test(values.email)) {
                    errors.email = 'El correo no es correcto.'
                }

                //Validación de la contraseña
                if(!values.password) {
                    errors.password = 'Por favor ingrese una contraseña'
                }

                return errors;
            }}

            onSubmit={(values, {resetForm}) => {
                handleLogin(values);
                setFormSubmit(true);
                
                setTimeout(() => {
                    setFormSubmit(false);
                    resetForm();
                }, 2000);
            }}
        >
        {( { errors }) => (   
            <main className="container form-signin w-25 mt-5 bg-light">
                <Form className='text-center m-auto'>
                    <img className="mb-3 mt-3 img-fluid" src={login} alt="Imagen de login" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <Field 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            id="floatingInput" 
                            placeholder="challenge@alkemy.org" 
                        />
                        <label htmlFor="floatingInput">Email address</label>
                        <ErrorMessage name='email' component={() => (<div className="alert alert-danger" role="alert">{errors.email}</div>) }/>
                    </div>

                    <div className="form-floating">
                        <Field 
                            type="password" 
                            className="form-control" 
                            name="password" 
                            id="floatingPassword" 
                            placeholder="react" 
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        <ErrorMessage name='password' component={() => (<div className="alert alert-danger" role="alert">{errors.password}</div>) }/>
                    </div>

                    <button className={`mt-5 w-100 btn btn-lg btn-primary ${formSubmit && 'disabled'}`} type="submit" >Sign in {formSubmit && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>} </button>
                </Form>
            </main>
        )}
        </Formik> 
    )
}

export default Login;