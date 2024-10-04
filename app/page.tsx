"use client"

import Link from "next/link";
import {Tab} from "@headlessui/react";
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import classNames from 'classnames'


const tabs = [
    {
        key: "all photos",
        display: "All Photos",
    },
    {
        key: "painting with light",
        display: "Painting with Light"
    },
    {
        key: "forests",
        display: "Forests"
    }
]

export default function Home() {
    return (
        <div className="h-full bg-[url('/backgroundpics3.webp')] bg-right bg-cover overflow-auto">
{/*
            <p className="bg-gradient-to-r from-[black] to-[#1c1c1c] -[0px] flex justify-center items-center ">Photography Portfolio</p>
*/}

            <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-12">
                <span className="uppercase text-lg font-medium">
                    Stefan's Photography Portfolio
                </span>
                <Link href="#"
                      className="rotate-3xl bg-white px-4 py-2 text-black font-medium rounded-md hover:bg-gray-500 transition duration-300"
                >
                    Get in touch
                </Link>
            </header>

            <main className="pt-[110px]">
                <div className="flex flex-col items-center h-full">
                    <Tab.Group >
                        <Tab.List className="flex items-center gap-20 uppercase">
                            {tabs.map(tab => (
                                <Tab key={tab.key} className="p-2" >
                                    {({selected}) => (
                                        <span
                                            className={classNames(
                                                "uppercase text-lg",
                                                selected ? "text-white" : "text-stone-600"
                                            )}
                                        >
                                             {tab.display}
                                        </span>
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
                            <Tab.Panel className="overflow-auto">
                                <Masonry
                                    breakpointCols={2}
                                    className="flex gap-4"
                                    columnClassName=""
                                >
                                    <img src="/pwl-1.webp" alt="pwl-1" className="my-4"/>
                                    <img src="/pwl-2.webp" alt="pwl-2" className="my-4"/>
                                    <img src="/pwl-3.webp" alt="pwl-3" className="my-4"/>
                                    <img src="/pwl-4.webp" alt="pwl-4" className="my-4"/>
                                </Masonry>
                            </Tab.Panel>
                            <Tab.Panel>Painting with Light</Tab.Panel>
                            <Tab.Panel>Forests</Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

            </main>

            <footer className="bg-[black] -[10px] flex justify-center items-center uppercase text-lg font-medium">
                <p> Stefan's Photography Portfolio </p>
            </footer>
        </div>
    );
}
