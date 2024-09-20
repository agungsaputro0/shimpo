import Homeshell from "./HomeShell";
import LandingLayouts from "@/components/templates/Landing";
import Head from "next/head";
const Home = () => {
    return (
        <Homeshell>s
            <div className="h-screen">
            <Head>
                <title>SHIMPO</title>
            </Head>
            <LandingLayouts layoutTitle="Selamat Datang!" layoutMessage="KPKNL Pekanbaru">
            </LandingLayouts>
            </div>
        </Homeshell>
    )
}

export default Home;