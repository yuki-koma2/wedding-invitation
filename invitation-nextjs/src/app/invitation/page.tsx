import React from 'react';
import {Image} from "@nextui-org/react";


const HogePage = () => {
    return (
        <main>

            <section
                className="
                h-screen min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48
                ">
                {/*animate-blurFadeOut*/}
                {/*[animation-range:0px_300px] [animation-timeline:scroll()]*/}
                {/*[animation-duration:5s] [animation-timing-function:ease-out]*/}
                <img src={`img/header.jpeg`}
                     loading="lazy" alt="Photo"
                     className="absolute inset-0 h-full w-full object-cover object-center"/>
                <div className="absolute inset-0 bg-gray-300 mix-blend-multiply"></div>
                {/*<div className="absolute inset-0 bg-black mix-blend-multiply*/}
                {/*animate-fadeOut [animation-range:0px_100px] [animation-timeline:scroll()]*/}
                {/*[animation-duration:1s] [animation-timing-function:ease-out]*/}
                {/*"></div>*/}
                <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
                    {/*   <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8*/}
                    {/*   ">THE BIG DAY</p>*/}
                    {/*   <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl*/}
                    {/*">wedding invitation </h1>*/}
                    {/*   <br/>*/}
                    {/*   <h1 className="font-homemade text-4xl text-white">*/}
                    {/*       wedding invitation*/}
                    {/*   </h1>*/}
                    {/*   <br/>*/}

                    <h1 className="font-petit text-6xl text-white">
                        Wedding<br/> Invitation
                    </h1>
                    <br/>

                    <p className="font-shadows text-3xl text-white text-center pt-3">
                        2024/12/1 <br/>
                        yuki & natsumi
                    </p>


                </div>
            </section>

            <section className="bg-orange-100 bg-cover bg-center"
                     style={{backgroundImage: 'url(img/bg-2.jpg)'}}
            >
                {/*<Image*/}
                {/*    isBlurred*/}
                {/*    // width={240}*/}
                {/*    src="https://nextui-docs-v2.vercel.app/images/album-cover.png"*/}
                {/*    alt="NextUI Album Cover"*/}
                {/*    className="m-5"*/}
                {/*/>*/}
                {/*<p className="p-8 font-shippori font-medium  text-gray-500 text-center">*/}
                {/*    皆様にはご健勝のこととお慶び申し上げます <br/>*/}
                {/*    このたび 私たちは結婚式を挙げることになりました <br/>*/}
                {/*    つきましては 親しい皆様の末永いお力添えをいただきたく <br/>*/}
                {/*    心ばかりの小宴をもうけたいと存じます <br/>*/}
                {/*    おいそがしい中と存じますが <br/>*/}
                {/*    ご列席くださいますようお願い申し上げます <br/>*/}
                {/*</p>*/}
                {/*<p className="p-8 font-shippori font-bold text-gray-500 text-center">*/}
                {/*    皆様にはご健勝のこととお慶び申し上げます <br/>*/}
                {/*    このたび 私たちは結婚式を挙げることになりました <br/>*/}
                {/*    つきましては 親しい皆様の末永いお力添えをいただきたく <br/>*/}
                {/*    心ばかりの小宴をもうけたいと存じます <br/>*/}
                {/*    おいそがしい中と存じますが <br/>*/}
                {/*    ご列席くださいますようお願い申し上げます <br/>*/}
                {/*</p>*/}
                <p className="p-8 font-klee font-bold text-gray-500 text-center">
                    皆様にはご健勝のこととお慶び申し上げます <br/>
                    このたび 私たちは結婚式を挙げることになりました <br/>
                    つきましては 親しい皆様の末永いお力添えをいただきたく <br/>
                    心ばかりの小宴をもうけたいと存じます <br/>
                    おいそがしい中と存じますが <br/>
                    ご列席くださいますようお願い申し上げます <br/>
                </p>
            </section>


            {/*<div className="fixed w-24 h-24 bg-royalblue origin-bottom ">*/}
            {/*    <Image*/}
            {/*        isBlurred*/}
            {/*        // width={240}*/}
            {/*        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"*/}
            {/*        alt="NextUI Album Cover"*/}
            {/*        className="m-5 animate-growProgress [animation-range:0px_300px] [animation-timeline:scroll()] [animation-duration:1s] [animation-timing-function:linear] [animation-fill-mode:forwards] [animation-delay:0s] [animation-iteration-count:1] [animation-direction:normal] [animation-play-state:running] [animation-name:growProgress]"*/}
            {/*    />*/}
            {/*</div>*/}

            {/*<div className="min-h-screen flex items-center justify-center bg-gray-100">*/}
            {/*    <div*/}
            {/*        className="w-96 h-96 bg-cover bg-center animate-revealImage  [animation-range:0px_300px] [animation-timeline:scroll()] [animation-duration:1s] [animation-timing-function:ease-out] [animation-fill-mode:forwards] [animation-delay:0s] [animation-iteration-count:1] [animation-direction:normal] [animation-play-state:running] [animation-name:revealImage]"*/}
            {/*        style={{backgroundImage: 'url(https://via.placeholder.com/400)'}}*/}
            {/*    >*/}
            {/*        <Image*/}
            {/*            isBlurred*/}
            {/*            // width={240}*/}
            {/*            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"*/}
            {/*            alt="NextUI Album Cover"*/}
            {/*            className="m-5"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className=" flex items-center justify-center bg-gray-100">*/}
            {/*    <div*/}
            {/*        className="w-96 h-96 bg-cover bg-center animate-revealImage  [animation-range:300px_600px] [animation-timeline:scroll()] [animation-duration:1s] [animation-timing-function:ease-out] [animation-fill-mode:forwards] [animation-delay:0s] [animation-iteration-count:1] [animation-direction:normal] [animation-play-state:running] [animation-name:revealImage]"*/}
            {/*    >*/}
            {/*        <Image*/}
            {/*            isBlurred*/}
            {/*            src={`img/header.jpeg`}*/}
            {/*            alt="header"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}


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