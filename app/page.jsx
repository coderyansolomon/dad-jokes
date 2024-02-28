import JokeFetcher from "./components/JokeFetcher";
import { createClient } from "./utils/supabase/server";

export default async function Home() {

  const supabase = createClient();
  const {data} = await supabase.auth.getUser()

  return (
    <main className="bg-gray-800 min-h-screen flex items-center justify-center text-center text-white">
        <JokeFetcher user={data.user} />
    </main>
  );
}
