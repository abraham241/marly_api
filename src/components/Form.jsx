import React from 'react';
import NavBar from './NavBar';

export default function Form(){
    return (
        <>
            <NavBar/>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className=" shadow-md rounded p-8 max-w-md w-full">
                    {/* <img src="src/assets/images/REF.png" alt="logo du copil-formulaire" className="mx-auto mb-4 w-44 h-44" /> */}

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                            Nom
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Nom"
                            type="text"
                            placeholder="Nom"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
                            Prenom
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="prenom"
                            type="text"
                            placeholder="prenom"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
                            Sexe
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="prenom"
                            type="text"
                            placeholder="prenom"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
                            Ville
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Ville"
                            type="text"
                            placeholder="Ville"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
                            classeId
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="id"
                            type="number"
                            placeholder="classeId"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
                            E-mail
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="mail"
                            type="email"
                            placeholder="E-mail"
                            />
                        </div>
                        
                        <div className="mb-6">
                            <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                            type="button"
                            >
                            Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}