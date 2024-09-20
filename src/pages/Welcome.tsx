import AppShell from "./Appshell";
import LandingLayouts from "@/components/templates/Landing";
import Head from "next/head";
const Welcome = () => {
    return (
        <AppShell>
            
            <div className="h-screen">
            <Head>
                <title>SHIMPO</title>
            </Head>
            <LandingLayouts layoutTitle="Selamat Datang!" layoutMessage="KPKNL Pekanbaru">
            </LandingLayouts>
            </div>
        </AppShell>
    )
}

export default Welcome;