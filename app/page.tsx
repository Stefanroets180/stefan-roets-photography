"use client"

import Link from "next/link";
import {Tab} from "@headlessui/react";

const tabs = [
    {
        key: "all",
        display: "All",
    },
    {
        key: "oceans",
        display: "Oceans"
    },
    {
        key: "forests",
        display: "Forests"
    }
]

export default function Home() {
    return (
        <div className="flex flex-col h-full bg-[url('/backgroundpics3.webp')] bg-right	bg-cover">
{/*
            <p className="bg-gradient-to-r from-[black] to-[#1c1c1c] -[0px] flex justify-center items-center ">Photography Portfolio</p>
*/}

            <header className="flex justify-between items-center h-[90px] px-6">
                <div></div>
                <Link href="#"
                      className="rotate-3xl bg-white px-4 py-2 text-black font-medium rounded-md hover:bg-gray-500 transition duration-300"
                >
                    Get in touch
                </Link>
            </header>

            <main className="grow">
                <div className="flex flex-col items-center h-full">
                    <Tab.Group >
                        <Tab.List className="flex items-center gap-20">

                            {tabs.map(tab => (
                                <Tab key={tab.key} className="p-2" >
                                    {({selected}) => (
                                        <span
                                            className={selected ? "text-white" : "text-stone-600"}
                                        >
                                             {tab.display }
                                        </span>
                                    )}
                                </Tab>

                            ))}
                        </Tab.List>
                        <Tab.Panels className="h-full bg-stone-900 bg-opacity-55 max-w-[900px] w-full p-2 sm:p-4 my-6">
                            <Tab.Panel className="">All Photos</Tab.Panel>
                            <Tab.Panel>Oceans</Tab.Panel>
                            <Tab.Panel>Forests</Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

            </main>

            <footer className="bg-[black] -[10px] flex justify-center items-center ">
                <p> Stefan Photography Portfolio </p>
            </footer>
        </div>
    );
}
