import React, { useEffect, useState } from 'react';
//import GoogleIcon from '@mui/icons-material/Google';
//import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import GroupIcon from '@mui/icons-material/Group';
import Header from './componentes/header/Header';
import Footer from './footer/Footer';
import Cookies from 'universal-cookie' //https://www.npmjs.com/package/universal-cookie import Swal from 'sweetalert2';
//import GitHubOAuth from './githubOauth/GithHubOauth';
import FireBaseAuth from './FireBase/FireBaseAuth';
import GoogleOAuth from './googleOAuth/GoogleOAuth';


const Login = () => {

    const cookies = new Cookies()
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    //const [userName, setUserName] = useState("")
    const [showPassword, setShowPassword] = useState(true)

    const [values, setValues] = useState({
        rol: "",
        email: "",
        password: "",
    })

    //Guarda en la variable newValues los valores ingresados en el formulario de Inicio de sesión
    const handleChange = (e) => {
        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }


    const handleClickPassword = (e) => {
        setErrorPassword(false)
    }


    const handleClickEmail = (e) => {
        setErrorEmail(false)
    }
}
const handleShowPassword = (e) => {
    setShowPassword(!showPassword)
}

const iniciarSesion = (e) => {
    e.preventDefault()
    let select = document.getElementById("exampleFormControlSelect1"); //capturamos el valor seleccionado en el select values.rol = select.value //Guardamos en el arreglo "values" el rol seleccionado por medio del select.
    if (values.password.length === 0 && values.email.length === 0) {
        setErrorEmail(true)
        setErrorPassword(true)
        return
    }
    if (values.password.length === 0) {
        setErrorPassword(true)
        return
    }
    if (values.email.length === 0) {
        setErrorEmail(true)
        return
    }

    fetch("http://localhost:3001/login", {
        method: 'POST',
        headers: { "Content-Type": "Application/json", "Acept": "application/json" },
        body: JSON.stringify(values)
    })



        .then(response => {
            if (response.status === 200 && values.rol ===
                "Usuario") {
                cookies.set('email', values.email, {
                    secure: true,
                    sameSite: 'None',
                    path: '/'
                })
                window.location.hash = '/sesion' //Vista para los usuarios logueados con el rol de "usuario"
            }

            else if (response.status === 200 && values.rol === "Administrador") {
                cookies.set('email', values.email, {
                    secure: true,
                    sameSite: 'None',
                    path: '/'
                })
                window.location.hash = '/usuarios-registrados' //vista con los usuarios registrados
            }

            else {
                console.log("sdfd", response.status)
                Swal.fire({
                    title: "Las credenciales ingresadas no son correctas",
                    icon: "error"
                })
                window.location.hash = '/login'
            }
        })

        .catch(() => Swal.fire({
            title: "No se puede iniciar sesión por un problema en el servidor",
            icon: "error"
        }),
            window.location.hash = '/login'
        )
}

//Si ya se inició sesión y escriben en la barra de direcciones '/login' entonces lo redirige al componente InicioSesionIniciada. 
useEffect(() => {
    if (cookies.get('email')) {
        window.location.hash = '/sesion'
    }
})

/*
useEffect(()=>{
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const codeParam = urlParams.get("code")
console.log("Esto es codeParam ", codeParam)
}, [])*/

function LoginUser() {
    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" >
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                            <label className="form-label" >Email</label>
                                        </div>

                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                            <label className="form-label" >Password</label>
                                        </div>

                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                        </div>

                                    </div>

                                    <div>
                                        <p className="mb-0">Dont have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginUser