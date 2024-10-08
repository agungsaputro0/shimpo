import LoginForm from "@/components/molecules/LoginForm";
import LoginTemplate from "@/components/templates/LoginTemplate";
import AppShell from "@/components/shell/Appshell";

const LoginPage = () => {
    return (
        <AppShell>
            <LoginTemplate>
                <LoginForm />
            </LoginTemplate>
        </AppShell>
    )
}

export default LoginPage;