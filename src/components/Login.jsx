import React from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import { useEffect, useState } from 'react';
import login from '../assets/login.png';
import { useAuth } from '../context/useContextAuth';

const Login = () => {

    const { handleLogin } = useAuth();
    

    const [formSubmit, setFormSubmit] = useState(false);

    const [token, setToken] = useState(() => {
        const saved = localStorage.getItem("token");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });


    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(token));
    }, [token])

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

            onSubmit={(values) => {
                //Aqui la llamada a la API.
                // axios.post("http://challenge-react.alkemy.org/", values)
                // .then( (resp) => {
                //     setToken(resp.data.token);
                //     setFormSubmit(true);
                //     setTimeout(() => setFormSubmit(false), 2000);
                //     return navigate("/");
                // });
                handleLogin(values);
                
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

                    <button className="mt-5 w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    {formSubmit && <p className='exitoInput'>Spinner</p>}
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </Form>
            </main>
        )}
        </Formik> 
    )
}

export default Login;