import React from 'react';
import {Image} from "@nextui-org/react";


const HogePage = () => {
    return (
        <main>

            <div className="fixed w-24 h-24 bg-royalblue origin-bottom ">
                <Image
                    isBlurred
                    // width={240}
                    src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                    alt="NextUI Album Cover"
                    className="m-5 animate-growProgress [animation-range:0px_300px] [animation-timeline:scroll()] [animation-duration:1s] [animation-timing-function:linear] [animation-fill-mode:forwards] [animation-delay:0s] [animation-iteration-count:1] [animation-direction:normal] [animation-play-state:running] [animation-name:growProgress]"
                />
            </div>

            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div
                    className="w-96 h-96 bg-cover bg-center animate-revealImage  [animation-range:0px_300px] [animation-timeline:scroll()] [animation-duration:1s] [animation-timing-function:ease-out] [animation-fill-mode:forwards] [animation-delay:0s] [animation-iteration-count:1] [animation-direction:normal] [animation-play-state:running] [animation-name:revealImage]"
                    style={{backgroundImage: 'url(https://via.placeholder.com/400)'}}
                >
                    <Image
                        isBlurred
                        // width={240}
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        alt="NextUI Album Cover"
                        className="m-5"
                    />
                </div>
            </div>

            <section
                className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
                <img src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                     loading="lazy" alt="Photo"
                     className="absolute inset-0 h-full w-full object-cover object-center"/>
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
                <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
                    <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to
                        introduce</p>
                    <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Revolutionary
                        way to build the web</h1>
                </div>
            </section>


            <h1>Hello from Hoge Page!</h1>
            <p>This is a sample page using Next.js App Router.</p>
            <Image
                isBlurred
                width={240}
                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                alt="NextUI Album Cover"
                className="m-5"
            />
        </main>
    );
};

export default HogePage;