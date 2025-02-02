"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { redirect } from 'next/navigation';
import Switch from "@/app/components/Switch";


export default function Page() {
    const [isDarkMode, setIsDarkMode] = useState(false); // Состояние для темы

    const handleLogout = () => {
        redirect('/authorization');
    };

    const handleSwitchChange = (isChecked: boolean) => {
        setIsDarkMode(isChecked); // Обновляем состояние темы
        console.log('Switch is toggled:', isChecked);
    };

    return (
        <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            {/* Header */}
            <header className={`p-4 flex items-center ${isDarkMode ? 'bg-gray-800' : 'bg-blue-600'} `}>
                <Image
                    className="dark:invert"
                    src="/Natk.jpg"
                    alt="Логотип системы"
                    width={40}
                    height={30}
                    priority
                />
                <h1 className="text-xl font-bold ml-2 text-white">НАТК</h1>
                <Switch
                    text="Темная тема сайта"
                    onChange={handleSwitchChange}
                    bgColor={isDarkMode ? 'bg-gray-700' : 'bg-blue-500'}
                    textColor={isDarkMode ? 'text-gray-300' : 'text-white'}
                    position="ml-4"
                />
                <div className="flex-grow" />
                <button onClick={handleLogout} className={`${isDarkMode ? 'text-gray-300' : 'text-white'} hover:underline`}>
                    Выйти
                </button>
            </header>
            <main className="flex-grow p-4">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Последние новости</h2>
                    <div className="mt-4">
                        <div className="mb-2">
                            <span className="font-semibold">23/01:</span>
                            <a
                                href="https://natk.ru/news/3379-god-zashchitnika-otechestva"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Год защитника Отечества
                            </a>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">27/01:</span>
                            <a
                                href="https://natk.ru/news/3381-ko-dnyu-rossijskogo-studenchestva"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ко Дню российского студента
                            </a>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">24/01:</span>
                            <a
                                href="https://natk.ru/news/3380-lektsii-po-kiberbezopasnosti-ot-sotrudnikov-sberbanka"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Лекции по Кибербезопасности от сотрудников Сбербанка
                            </a>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">28/12:</span>
                            <a
                                href="https://natk.ru/news/3377-fonbet-nedelya-zvezd-khokkeya"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Фонбет Неделя Звезд Хоккея
                            </a>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">27/12:</span>
                            <a
                                href="https://natk.ru/news/3376-gorodskie-sorevnovaniya-metkij-strelok-2024"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Городские соревнования «Меткий стрелок-2024»
                            </a>
                        </div>
                    </div>
                </section>

                {/* Photo Gallery */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Фотографии колледжа</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <img src="/Photo1.jpg" alt="Фото 1" className="w-full h-auto rounded shadow" />
                        <img src="/Photo2.jpg" alt="Фото 2" className="w-full h-auto rounded shadow" />
                        <img src="/photo3.jpg" alt="Фото 3" className="w-full h-auto rounded shadow" />
                        <img src="/Photo4.jpg" alt="Фото 4" className="w-full h-auto rounded shadow" />
                        <img src="/Photo5.jpg" alt="Фото 5" className="w-full h-auto rounded shadow" />
                        <img src="/Photo6.jpg" alt="Фото 6" className="w-full h-auto rounded shadow" />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className={`p-4 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-blue-600'}`}>
                <p className={isDarkMode ? 'text-gray-300' : 'text-white'}>
                    © ГБПОУ НСО «Новосибирский авиационный технический колледж имени Б.С. Галущака», 2015-2025.
                </p>
            </footer>
        </div>
    );
}