import Homeshell from "./HomeShell";
import Head from "next/head";
import ProfilePage from "@/components/templates/ProfilTemplate";

const appName = process.env.NEXT_PUBLIC_APP_NAME;
const Home = () => {
    return (
        <Homeshell>
            <div className="h-screen">
            <Head>
                <title>{appName}</title>
            </Head>
            <ProfilePage />
            </div>
        </Homeshell>
    )
}

export default Home;