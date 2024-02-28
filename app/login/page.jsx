'use client';

import { useState } from "react";
import { login, signup } from "./actions";

export default function Login(){
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [clickedSignUp, setClickedSignUp] = useState(false);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
            <form className="space-y-6">
                <div>
                <label htmlFor="email" className="sr-only">
                    Email Address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-700 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                />
                </div>
                <div>
                <label htmlFor="password" className="sr-only">
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-700 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                />
                </div>
                {
                clickedSignUp && <div>Sign up link sent! Go confirm your email.</div>
                }
                <div>
                {isSigningUp ? (
                    <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    formAction={signup}
                    onClick={() => setClickedSignUp(true)}
                    >
                    Sign up
                    </button>
                ) : (
                    <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    formAction={login}
                    >
                    Login
                    </button>
                )}
                </div>
            </form>
            {!isSigningUp ? (
                <p className="mt-4 text-center text-sm text-gray-400">
                Don't have an account?{' '}
                <button
                    className="font-medium text-white hover:text-blue-500"
                    onClick={() => setIsSigningUp(true)}
                >
                    Sign up
                </button>
                </p>
            ) : (
                <p className="mt-4 text-center text-sm text-gray-400">
                Already have an account?{' '}
                <button
                    className="font-medium text-white hover:text-blue-500"
                    onClick={() => setIsSigningUp(false)}
                >
                    Login
                </button>
                </p>
            )}
    </main>
    )
}