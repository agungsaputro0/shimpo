import AppShell from "@/components/shell/Appshell";
import LandingLayouts from "@/components/templates/Landing";
import Head from "next/head";
const appName = process.env.NEXT_PUBLIC_APP_NAME;
const Welcome = () => {
    return (
        <AppShell>
            
            <div className="h-screen">
            <Head>
                <title>{appName}</title>
            </Head>
            <LandingLayouts layoutTitle="Selamat Datang!" layoutMessage="KPKNL Pekanbaru">
            </LandingLayouts>
            </div>
        </AppShell>
    )
}

export default Welcome;