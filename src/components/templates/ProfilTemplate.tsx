import React, { useEffect, useState } from 'react';
import { Form, Button, message, Spin } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import InputElement from '../atoms/InputElement';
import LoadingSpinner from '../atoms/LoadingSpinner';
import { LoadingOutlined } from '@ant-design/icons'; 

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const ProfilePage = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false); // State untuk loading submit

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${baseURL}/profil/me`, { withCredentials: true });
        form.setFieldsValue({
          name: response.data.name,
          nip: response.data.nip,
          email: response.data.email,
        });
      } catch (error) {
        message.error('Gagal memuat data pengguna.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [form]);

  const onFinish = async (values: any) => {
    setSubmitLoading(true); // Mengatur loading submit ke true
    try {
      await axios.put(`${baseURL}/profil/update_me`, values, { withCredentials: true });
      message.success('Data profil berhasil diperbarui.');
    } catch (error) {
      message.error('Gagal memperbarui data profil.');
    } finally {
      setSubmitLoading(false); // Mengatur loading submit ke false
    }
  };

  if (loading) return <LoadingSpinner />;

  // Custom loading indicator untuk submit
  const loadingIndicator = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;

  return (
    <div className="flex pt-[64px] items-center justify-center">
      <div className="backdrop-blur-md bg-white/20 rounded-xl p-8 shadow-lg max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-left text-white mb-6">Profil Anda</h1>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <div className="grid grid-cols-2 gap-6">
            <Form.Item name="name" rules={[{ required: true, message: 'Harap masukkan nama!' }]}>
              <InputElement
                inputClass="mb-4"
                forwhat="name"
                labelMessage="Nama"
                typeInput="text"
                inputName="name"
                inputPlaceholder="Masukkan nama"
              />
            </Form.Item>
            <Form.Item name="nip" rules={[{ required: true, message: 'Harap masukkan NIP!' }]}>
              <InputElement
                inputClass="mb-4"
                forwhat="nip"
                labelMessage="NIP"
                typeInput="text"
                inputName="nip"
                inputPlaceholder="Masukkan NIP"
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Form.Item name="email" rules={[{ type: 'email', message: 'Harap masukkan email yang valid!' }]}>
              <InputElement
                inputClass="mb-4"
                forwhat="email"
                labelMessage="Email"
                typeInput="email"
                inputName="email"
                inputPlaceholder="Masukkan email"
              />
            </Form.Item>
            <Form.Item name="new_password" rules={[{ message: 'Harap masukkan password!' }]}>
              <InputElement
                inputClass="mb-4"
                forwhat="new_password"
                labelMessage="Password Baru"
                typeInput="password"
                inputName="new_password"
                inputPlaceholder="Masukkan password Baru"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Form.Item name="konfirmasi_password" rules={[{ required: true, message: 'Harap masukkan password!' }]}>
              <InputElement
                inputClass="mb-4"
                forwhat="konfirmasi_password"
                labelMessage="Konfirmasi Password"
                typeInput="password"
                inputName="konfirmasi_password"
                inputPlaceholder="Masukkan konfirmasi password"
              />
            </Form.Item>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg" loading={submitLoading}>
              SIMPAN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ProfilePage;
