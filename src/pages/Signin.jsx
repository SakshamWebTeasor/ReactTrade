import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";

const CustomButton = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${className}`}
        >
            {children}
        </button>
    );
};


const Signin = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="authentication-inner">
            <div className="flex flex-wrap items-center justify-between">
                {/* Left side with cars & bg-shape images */}
                <div className="hidden lg:block w-full lg:w-1/2">
                    <div className="auth-cover-bg auth-cover-bg-color flex justify-center items-center h-screen">
                        <img
                            src="/assets/img/cars/4.png"
                            alt="auth-login-cover"
                            className="img-fluid my-5 auth-illustration"
                            data-app-light-img="cars/g63.png"
                            data-app-dark-img="cars/g63.png"
                        />
                        <img
                            src="/assets/img/illustrations/bg-shape-image-light.png"
                            alt="auth-login-cover"
                            className="platform-bg hidden lg:block absolute top-0 left-0 h-full w-full"
                            data-app-light-img="illustrations/bg-shape-image-light.png"
                            data-app-dark-img="illustrations/bg-shape-image-dark.png"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-8">
                    <div className="flex items-center justify-between mb-4">
                        <Link to="/" className="app-brand-link gap-2">
                            <span className="app-brand-logo demo">
                                <img src="/assets/img/favicon/T.svg" width="15%" alt="logo" />
                            </span>
                        </Link>
                    </div>
                    <h3 className="mb-1">Bienvenu Chez Turismo!</h3>
                    <form
                        id="scFormLogin"
                        className="mb-3"
                        method="get"
                        action="/dashboard"
                        noValidate=""
                    >
                        <div className="mb-3">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="email"
                                    name="user_email"
                                    placeholder="Entre ton Email"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    autoFocus=""
                                />
                            </div>
                        </div>
                        <div className="mb-3 form-password-toggle">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                    Mot de passe
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    id="password"
                                    name="password"
                                    placeholder="**********"
                                    aria-describedby="password"
                                />
                                <span
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={rememberMe}
                                    onChange={handleRememberMeChange}
                                    className="form-checkbox h-4 w-4 text-blue-500"
                                />
                                <span className="ml-2 text-gray-600">Se Souvenir de Moi?</span>
                            </label>
                        </div>
                        <CustomButton className="btn btn-primary w-full" type="submit">
                            Se Connecter
                        </CustomButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;
