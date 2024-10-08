"use client"

import Link from "next/link";
import {Tab} from "@headlessui/react";
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import classNames from 'classnames';

import type {LightGallery} from "lightgallery/lightgallery";
import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import bgImage from '../public/backgroundpics3.webp';

import pwl1 from '../public/pwl-1.webp';
import pwl2 from '../public/pwl-2.webp';
import pwl3 from '../public/pwl-3.webp';
import pwl4 from '../public/pwl-4.webp';
import {useRef} from "react";


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
];

const images = [pwl1, pwl2, pwl3, pwl4];

export default function Home(){
    const lightboxRef = useRef<LightGallery | null>(null)

    return (
        <div className="h-full overflow-auto">
{/*
            <p className="bg-gradient-to-r from-[black] to-[#1c1c1c] -[0px] flex justify-center items-center ">Photography Portfolio</p>*/}
            <Image
                className="fixed left-0 top-0 z-0"
                src={bgImage}
                alt="background-image"
                placeholder="blur"
            />

            <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-800 bg-gradient-to-t"></div>

            <header className="fixed top-0 w-full z-20 flex justify-between items-center h-[90px] px-6">
                <div></div>
                <Link href="#"
                      className="rotate-3xl bg-white px-4 py-2 text-black font-medium rounded-md hover:bg-gray-500 transition duration-300"
                >
                    Get in touch
                </Link>
            </header>

            <main className="relative pt-[110px] z-20">
                <div className="flex flex-col items-center h-full">
                    <Tab.Group >
                        <Tab.List className="flex items-center gap-20 uppercase">
                            {tabs.map(tab => (
                                <Tab key={tab.key} className="p-2" >
                                    {({selected}) => (
                                        <span
                                            className={classNames(
                                                "uppercase text-l",
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
                                    className="flex gap-2"
                                    columnClassName=""
                                >
                                    {images.map((image, idx) => (
                                        <Image
                                            key={image.src}
                                            src={image}
                                            alt="placeholder"
                                            className="my-2 hover:opacity-75 cursor-pointer"
                                            placeholder="blur"
                                            onClick={() => {
                                                lightboxRef.current?.openGallery(idx);
                                            }}
                                        />
                                    ))}
                                </Masonry>

                                <LightGalleryComponent
                                    onInit={(ref) => {
                                       if (ref) {
                                            lightboxRef.current = ref.instance

                                       }
                                    }}
                                    speed={500}
                                    plugins={[lgThumbnail, lgZoom]}
                                    dynamic
                                    dynamicEl={images.map(image => ({
                                        src: image.src,
                                        thumb: image.src,
                                    }))}
                                />
                            </Tab.Panel>
                            <Tab.Panel>Painting with Light</Tab.Panel>
                            <Tab.Panel>Forests</Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

            </main>

            <footer className="relative bg-[black] -[10px] flex justify-center items-center z-20">
                <p> Stefan Photography Portfolio </p>
            </footer>
        </div>
    );
}
