import { FC, useEffect, useRef, useState } from "react";
import InputElement from "../atoms/InputElement";
import Button from "../atoms/Button";
import Head from "next/head";
import axios from "axios";
import { notification } from "antd";

const LoginForm: FC = () => {
  const [loginFailed, setLoginFailed] = useState<string>("");
  const usernameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);


  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      const response = await axios.post("http://localhost:8080/login", data, {
        withCredentials: true,
      });
      notification.success({
        message: "Login Berhasil!",
        description: "Selamat, Anda berhasil Login!",
      });
      // Handle successful login (e.g., redirect to a different page)
    } catch (error) {
      setLoginFailed("Invalid credentials");
      notification.error({
        message: "Login Gagal!",
        description: "Mohon maaf, Kredensial Anda tidak valid!",
      });
    }
  };

  return (
    <section>
      <Head>
        <title>SHIMPO</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg p-6 space-y-4 w-full sm:max-w-lg md:max-w-md lg:max-w-md min-w-[300px] ml-[10px] mr-[10px]">
          <h1 className="text-4xl font-bold text-white text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <InputElement
              inputClass="mb-6"
              forwhat="email"
              labelMessage="Email"
              typeInput="text"
              inputName="email"
              inputPlaceholder="example@example.com"
              ref={usernameRef}
            />
            <InputElement
              inputClass="mb-6"
              forwhat="password"
              labelMessage="Password"
              typeInput="password"
              inputName="password"
              inputPlaceholder="****"
            />
            <Button
              type="submit"
              variant="bg-blue-700 w-full hover:bg-blue-900"
              message="Login"
            />
          </form>
          
          {/* Menampilkan pesan error login jika loginFailed tidak kosong */}
          {loginFailed && (
            <p className="text-red-500 mt-4 text-center">{loginFailed}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

