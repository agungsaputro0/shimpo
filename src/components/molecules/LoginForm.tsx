import { FC, useEffect, useRef, useState } from "react";
import InputElement from "../atoms/InputElement";
import Button from "../atoms/Button";
import Head from "next/head";
import axios from "axios";
import { notification, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons'; 
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux'; // Import useDispatch
import { loginStart, loginSuccess, loginFailure } from '@/store/authSlice'; // Import actions

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const LoginForm: FC = () => {
  const [loginFailed, setLoginFailed] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const dispatch = useDispatch(); // Inisialisasi dispatch

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginStart()); // Dispatch loginStart
    setLoading(true);

    const data = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      const response = await axios.post(`${baseURL}/login`, data, {
        withCredentials: true,
      });
      
      // Dispatch action untuk menyimpan nama pengguna
      dispatch(loginSuccess(response.data.name)); // Pastikan nama pengguna ada dalam response

      notification.success({
        message: "Login Berhasil!",
        description: "Selamat, Anda berhasil Login!",
      });
      router.push("/Home");
    } catch (error) {
      setLoginFailed("Invalid credentials");
      dispatch(loginFailure()); // Dispatch loginFailure ketika terjadi kesalahan
      notification.error({
        message: "Login Gagal!",
        description: "Mohon maaf, Kredensial Anda tidak valid!",
      });
    } finally {
      setLoading(false);
    }
  };

  const loadingIndicator = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;

  return (
    <section>
      <Head>
        <title>SIMPHO</title>
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
              disabled={loading}
            />
          </form>
          
          {loading && (
            <div className="flex justify-center items-center mt-4">
              <Spin indicator={loadingIndicator} />
            </div>
          )}
          
          {loginFailed && (
            <p className="text-red-500 mt-4 text-center">{loginFailed}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
