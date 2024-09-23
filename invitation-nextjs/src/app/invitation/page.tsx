import React from 'react';
import {Image, Spacer} from "@nextui-org/react";


const HogePage = () => {
    return (
        <main
            className="bg-white bg-center bg-cover bg-fixed"
            style={{backgroundImage: 'url(img/bg-2.jpg)'}}
        >

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

            <section className=" py-8 px-2">
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
                <p className="font-klee font-bold text-gray-500 text-center ">
                    皆様にはご健勝のこととお慶び申し上げます<br/>
                    {/*<br className="block sm:hidden"/>*/}
                    <Spacer y={1} className="block sm:hidden"/>
                    このたび<br className="block sm:hidden"/> 私たちは結婚式を挙げることになりました<br/>
                    {/*<br className="block sm:hidden"/>*/}
                    <Spacer y={1} className="block sm:hidden"/>
                    つきましては <br className="block sm:hidden"/>
                    親しい皆様の末永いお力添えをいただきたく<br/>
                    心ばかりの小宴をもうけたいと存じます<br/>
                    {/*<br className="block sm:hidden"/>*/}
                    <Spacer y={1} className="block sm:hidden"/>
                    おいそがしい中と存じますが<br/>
                    ご列席くださいますようお願い申し上げます
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

            <section className="
            flex justify-center flex-col items-center font-klee font-bold text-gray-500 text-center
           ">
                <h1 className="font-petit text-3xl text-gray-500">Information</h1>
                <p>日時： 令和６年12月1日(日)</p>
                <p>受付： 13時30分</p>
                <p>挙式： 14時00分</p>
                <p>披露宴: 15時00分</p>
                <p>場所: 東京大神宮</p>
                <p>住所： 東京都千代田区富士見２丁目４の１</p>
                <p>電話番号： 03-3234-6611</p>
                <div className="flex justify-center">
                    {/*google map*/}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.651404047731!2d139.7498723152586!3d35.67954838019352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5a3c2f8d4f%3A0x2f6b8b4e3f5d1b6e!2z5p2x5Lqs44Kk44Oq44K_44Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1635736820004!5m2!1sja!2sjp"
                        width="350" height="350" style={{border: 0}} allowFullScreen loading="lazy"/>

                </div>
            </section>

            <section className=" p-4 font-klee font-bold text-gray-500 text-center">
                <p>お手数ではございますがご都合のほどを11月2日までにご一報賜りますようお願い申し上げます。</p>
            </section>

        </main>
    );
};

export default HogePage;