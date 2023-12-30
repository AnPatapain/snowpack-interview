import React, {useEffect, useState} from "react";
import useForm from "../hooks/useForm";
import {useNavigate} from "react-router-dom";
import AuthService from "../services/Auth.service";
import {JWT_TOKEN} from "../services/api/api.constant";

interface AuthModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    isSignup: boolean,
    setIsSignup: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthModal:React.FC<AuthModalProps> = ({setShowModal, isSignup, setIsSignup}:AuthModalProps) => {
    const navigate = useNavigate();
    const {values, handleChange, resetForm} = useForm({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    })
    const [error, setError] = useState<string>('')

    useEffect(() => {
        (isSignup && values.password !== values.confirmPassword) ? setError("Password do not match") : setError("")
    }, [values])

    const handleClickCloseIcon = () => {
        setShowModal(false)
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(isSignup) {
            AuthService.signUp(values.email, values.password).then((response) => {
                setIsSignup(false);
            }).catch(error => {
                alert(error.response.data.message);
            })
        }else {
            AuthService.signIn(values.email, values.password).then((response) => {
                localStorage.setItem(JWT_TOKEN, response.data.token);
                navigate("/dashboard");
            }).catch(error => {
                alert(error.response.data.message);
            })
        }
    }

    return (
        <div className="max-w-md p-4 bg-slate-400 border-solid rounded-lg">
            <div className="cursor-pointer float-right" onClick={handleClickCloseIcon}>
                &#10006;
            </div>

            <h2 className="text-3xl font-bold text-center">{isSignup ? 'Create Account' : 'Login'}</h2>
            <form className="max-w-sm flex flex-col mx-auto my-2" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    required={true}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)}
                    className="my-1 rounded-md h-8 px-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    required={true}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('password', e.target.value)}
                    className="my-1 rounded-md h-8 px-2"
                />
                {isSignup && (<input
                    type="password"
                    placeholder="Confirm password"
                    required={true}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('confirmPassword', e.target.value)}
                    className="my-1 rounded-md h-8 px-2"
                />)}

                <button className="btn btn-success text-xl my-8" disabled={error?true:false}>{isSignup ? 'Continue' : 'Login'}</button>
                { (isSignup && error) && (<p className="text-xl font-bold text-rose-700">🚨 {error}</p>)}
            </form>
        </div>
    )
}
export default AuthModal;