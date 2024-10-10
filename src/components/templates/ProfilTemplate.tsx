// ProfilTemplate.tsx
import { FC, useEffect, useState } from "react";
import axios from "axios";
import InputElement from "../atoms/InputElement";
import Button from "../atoms/Button";
import { notification } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const ProfilTemplate: FC = () => {
  const [dataUser, setDataUser] = useState<any>({});
  const userName = useSelector((state: RootState) => state.auth.userName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/user`, { withCredentials: true });
        setDataUser(response.data);
      } catch (error) {
        notification.error({
          message: "Gagal Memuat Data",
          description: "Terjadi kesalahan saat memuat data pengguna.",
        });
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Mendapatkan elemen input dari form
    const target = event.currentTarget as HTMLFormElement;
    const updatedData = {
      name: (target.elements.namedItem("name") as HTMLInputElement).value,
      nip: (target.elements.namedItem("nip") as HTMLInputElement).value,
      email: (target.elements.namedItem("email") as HTMLInputElement).value,
      password: (target.elements.namedItem("password") as HTMLInputElement).value,
    };

    try {
      await axios.put(`${baseURL}/user`, updatedData, { withCredentials: true });
      notification.success({
        message: "Update Berhasil",
        description: "Data profil Anda berhasil diperbarui.",
      });
    } catch (error) {
      notification.error({
        message: "Gagal Memperbarui Data",
        description: "Terjadi kesalahan saat memperbarui data profil.",
      });
    }
  };

  return (
    <section>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg p-6 space-y-4 w-full sm:max-w-lg md:max-w-md lg:max-w-md min-w-[300px] ml-[10px] mr-[10px]">
          <h1 className="text-4xl font-bold text-white text-center">Profil</h1>
          <form onSubmit={handleUpdate}>
            <InputElement
              inputClass="mb-6"
              forwhat="name"
              labelMessage="Nama"
              typeInput="text"
              inputName="name"
              inputPlaceholder="Nama Anda"
              defaultValue={dataUser.name || ""}
            />
            <InputElement
              inputClass="mb-6"
              forwhat="nip"
              labelMessage="NIP"
              typeInput="text"
              inputName="nip"
              inputPlaceholder="NIP Anda"
              defaultValue={dataUser.nip || ""}
            />
            <InputElement
              inputClass="mb-6"
              forwhat="email"
              labelMessage="Email"
              typeInput="email"
              inputName="email"
              inputPlaceholder="example@example.com"
              defaultValue={dataUser.email || ""}
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
              message="Update"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilTemplate;
