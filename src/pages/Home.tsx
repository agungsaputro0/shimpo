import ProtectedRoute from "@/components/hooks/ProtectedRoute";
import Homeshell from "@/components/shell/HomeShell";
import LandingLayouts from "@/components/templates/Landing";
import Head from "next/head";
const appName = process.env.NEXT_PUBLIC_APP_NAME;
const Home = () => {
    return (
        <ProtectedRoute>
            <Homeshell>
                <div className="h-screen">
                <Head>
                    <title>{appName}</title>
                </Head>
                <LandingLayouts layoutTitle="Selamat Datang!" layoutMessage="KPKNL Pekanbaru">
                </LandingLayouts>
                </div>
            </Homeshell>
        </ProtectedRoute>
    )
}

export default Home;