import React, { useState } from 'react';
import NavBar from './NavBar';
import { data } from 'autoprefixer';

export default function Form(){

    const[data, setData] = useState({
        Nom: "",
        Prenom: "",
        Sexe: "",
        Ville: "",
        Classe: "",
        Mail: "",
    })

    const handelChange = (event) =>{
        const {name, value} =event.target
        setData({...data,[name]:value });
    }

    const handelSubmit= (event) =>{
        event.preventDefault();
        console.log(data)
    }
    return (
        <>
            <NavBar/>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className=" shadow-md rounded p-8 max-w-md w-full">
                    {/* <img src="src/assets/images/REF.png" alt="logo du copil-formulaire" className="mx-auto mb-4 w-44 h-44" /> */}

                    <form onSubmit={handelSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                            Nom
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Nom"
                            name='Nom'
                            value={data.Nom}
                            onChange={handelChange}
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
                            id="Prenom"
                            name='Prenom'
                            value={data.Prenom}
                            onChange={handelChange}
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
                            id="Sexe"
                            name='Sexe'
                            value={data.Sexe}
                            onChange={handelChange}
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
                            name='Ville'
                            type="text"
                            placeholder="Ville"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
                            classe
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Classe"
                            type="text"
                            placeholder="classe"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
                            E-mail
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Mail"
                            name='Mail'
                            value={data.firstName}
                            onChange={handelChange}
                            type="email"
                            placeholder="E-mail"
                            />
                        </div>
                        
                        <div className="mb-6">
                            <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                            type="submit"
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