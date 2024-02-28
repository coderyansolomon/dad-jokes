import DeleteJokeButton from "../components/DeleteJokeButton";
import { createClient } from "../utils/supabase/server"

export default async function SavedJokes(){
    const supabase = createClient();
    const {data: userData} = await supabase.auth.getUser();
    let jokes = [];
    if (userData.user){
        const {data: jokesData, error} = await supabase.from('joke').select('*');
        if (error){
            console.error('Error fetching jokes:', error);
        }
        jokes = jokesData;
    }

    let header = 'Saved Jokes';

    if (!jokes.length){
        header = 'Save some jokes to see your jokes'
    }

    if (!userData.user){
        header = 'Login to save your favorite jokes'
    }


    return (
        <main className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-2xl font-bold mb-4">{header}</h1>
            <ul>
            {jokes.map((joke) => (
                <div key={joke.id} className="flex items-center justify-center space-x-2">
                <li className="list-none">{joke.joke_text}</li>
                <DeleteJokeButton jokeId={joke.id} />
                </div>
            ))}
            </ul>
    </main>
    )
}