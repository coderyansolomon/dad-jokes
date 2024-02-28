'use client';

import { deleteJoke } from "../data/joke/actions";

export default function DeleteJokeButton({jokeId}){
    return (
        <button
        className="text-red-500 p-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        onClick={() => deleteJoke(jokeId)}
        >
            X
        </button>
    )
}