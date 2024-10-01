import React from 'react';
import { Spacer } from "@nextui-org/react";
import GuestForm from "@/components/GuestForm";


const InvitationPage = () => {
    return (
        <main
            className={`bg-white bg-center bg-cover bg-fixed
                        sm:bg-contain md:bg-cover 
                        bg-[url('/img/bg-2.jpg')]`}
            aria-label="結婚式の招待状の背景画像"
        >

            <section
                className="
                h-screen min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48
                ">
                <img src={`/img/header.jpeg`}
                     loading="lazy"
                     alt="結婚指輪と花束"
                     className="absolute inset-0 h-full w-full object-cover object-center"/>
                {/*<Image*/}
                {/*    src={`/img/header.jpeg`}*/}
                {/*    // loading="lazy"*/}
                {/*    // className="absolute inset-0 h-full w-full object-cover object-center"*/}
                {/*    // width={1200}*/}
                {/*    // height={630}*/}
                {/*    loading="lazy"*/}
                {/*    alt="結婚指輪と花束"*/}
                {/*    className="absolute inset-0 h-full w-full object-cover object-center"*/}
                {/*    // className="absolute w-full object-cover object-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"*/}
                {/*/>*/}
                <div className="absolute inset-0 bg-gray-300 mix-blend-multiply"/>

                <div className="relative flex flex-col items-center p-4 sm:max-w-xl">

                    <h1 className="font-petit text-6xl text-white">
                        Wedding<br/> Invitation
                    </h1>
                    <br/>

                    <p className="font-shadows text-3xl text-white text-center pt-3">
                        2024/12/1 <br/>
                        yuki & natsumi
                    </p>

                    <p className="font-shadows text-3xl text-white text-center pt-3">
                        親族向けページ
                    </p>

                </div>
            </section>

            <section className=" py-8 px-2">
                <p className="font-klee font-bold text-gray-500 text-center ">
                    皆様にはご健勝のこととお慶び申し上げます<br/>
                    <Spacer y={1} className="block sm:hidden"/>
                    このたび<br className="block sm:hidden"/> 私たちは結婚式を挙げることになりました<br/>
                    <Spacer y={1} className="block sm:hidden"/>
                    つきましては <br className="block sm:hidden"/>
                    親しい皆様の末永いお力添えをいただきたく<br/>
                    心ばかりの小宴をもうけたいと存じます<br/>
                    <Spacer y={1} className="block sm:hidden"/>
                    おいそがしい中と存じますが<br/>
                    ご列席くださいますようお願い申し上げます
                </p>
            </section>

            <section className="
            flex justify-center flex-col items-center font-klee font-bold text-gray-500 text-center p-4
           ">
                {/*<h1 className="font-petit text-3xl text-gray-500 py-4">Information</h1>*/}
                {/*<p>日時： 令和６年12月1日(日)</p>*/}
                {/*<p>受付： 13時00分</p>*/}
                {/*<p className="text-red-700">受付後親族顔合わせを行いますので<br/><span*/}
                {/*    className="font-bold">13時20分</span>までにはお越しください</p>*/}
                {/*<p>挙式： 14時00分</p>*/}
                {/*<p>披露宴: 15時00分</p>*/}
                {/*<p>場所: 東京大神宮</p>*/}
                {/*<p>住所： 東京都千代田区富士見２丁目４の１</p>*/}
                {/*<p>電話番号： 03-3234-6611</p>*/}

                <h1 className="font-petit text-3xl text-gray-500 py-4">💐Information💐</h1>
                <div className="space-y-2">
                    <p className="flex">
                        <span className="w-24 text-right pr-4">日時：</span>
                        <span>令和６年12月1日(日)</span>
                    </p>
                    <p className="flex">
                        <span className="w-24 text-right pr-4">受付：</span>
                        <span>13時00分</span>
                    </p>
                    <p className="text-red-700">
                        受付後親族顔合わせを行いますので<br/>
                        <span className="font-bold">13時20分</span>までにはお越しください
                    </p>
                    <p className="flex">
                        <span className="w-24 text-right pr-4">挙式：</span>
                        <span>14時00分</span>
                    </p>
                    <p className="flex">
                        <span className="w-24 text-right pr-4">披露宴：</span>
                        <span>15時00分</span>
                    </p>
                    <p className="flex">
                        <span className="w-24 text-right pr-4">場所：</span>
                        <span>東京大神宮</span>
                    </p>
                    <p className="flex">
                        <span className="w-24 text-right pr-4">住所：</span>
                        <span>東京都千代田区富士見2-4-1</span>
                    </p>
                    <p className="flex">
                        <span className="w-24 text-right pr-4">電話番号：</span>
                        <span className="whitespace-nowrap">03-3234-6611</span>
                    </p>
                </div>
                <div className="flex justify-center my-5">
                    <div className="max-w-xl aspect-square">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473.41026327893337!2d139.74629157674818!3d35.69991383101956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c43dd962eaf%3A0x1ae70a1958f36ceb!2z5p2x5Lqs5aSn56We5a6u44Oe44OE44Ok44K144Ot44Oz!5e0!3m2!1sja!2sjp!4v1727743923642!5m2!1sja!2sjp"
                            className="min-w-full h-96"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="東京大神宮の地図"
                        />
                    </div>
                </div>
                <p className="text-red-700 font-bold">お願い</p>
                <p>東京大神宮マツヤサロンには駐車場がございません<br/>
                    お車でお越しの際は近隣の駐車場をご利用ください<br/>
                    また お酒の入るご祝宴でございますので <br/>
                    ご来館には公共交通機関をご利用ください</p>
            </section>

            <section
                className="p-4 font-klee font-bold text-gray-500 text-center rounded-lg ">
                <p className="my-10">お手数ではございますがご都合のほどを<br/><span
                    className="font-bold">11月2日(土)</span>までにご一報賜りますようお願い申し上げます</p>
                <GuestForm/>
            </section>
        </main>
    );
};

export default InvitationPage;