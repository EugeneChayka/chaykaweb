"use client";
import Button from "../components/button.js";
import Input from "../components/input.js";
import { useRouter } from 'next/navigation'

import Image from "next/image";
import { SetStateAction, useState} from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "Admin" && password === "pswrd") {
      alert("Успешная авторизация! Перенаправление на главную страницу");
      router.replace("/home");

    } else {
      alert("Неверный логин или пароль");
    }
  };

  const handleUsernameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handlePasswordBlur = (e: { target: { value: SetStateAction<string>; }; }) => {
    console.log("Password on blur:", e.target.value);
  };

  return (
      <div
          className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          {/* Логотип и заголовок "Авторизация" */}
          <div className="flex flex-col gap-4 items-center">
            <Image
                className="dark:invert"
                src="/Natk.jpg"
                alt="Логотип системы"
                width={180}
                height={38}
                priority
            />
            <h1 className="text-2xl font-bold">Авторизация</h1>
          </div>

          {/* Форма авторизации */}
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input
                onChange={handleUsernameChange}
                onBlur={null}
                bgColor="bg-white"
                textColor="text-black"
                placeholder="Логин"
                isActive={true}
                position="mx-auto"
                type="username"
            />
            <Input
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                bgColor="bg-white"
                textColor="text-black"
                placeholder="Пароль"
                isActive={true}
                position="mx-auto"
                type="password"
            />

            <Button
                onClick={handleLogin}
                bgColor="bg-blue-500"
                textColor="text-white"
                text="Войти"
                isActive={true}
                position="mx-auto"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p className="text-sm text-gray-500">
            Система авторизации
          </p>
        </footer>
      </div>
  );
}