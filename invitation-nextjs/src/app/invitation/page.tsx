import React from 'react';
import GuestForm from "@/components/GuestForm";
import GallerySection from "@/components/Gallery";
import MessageSection from "@/components/Message";
import InformationSection from "@/components/Information";


const InvitationPage = () => {
    return (
        <main
            className={`bg-[#fffcf9]`}
        >

            <section
                className="
                h-screen min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48
                ">
                <img src={`/img/header.jpeg`}
                     loading="lazy"
                     alt="結婚指輪と花束"
                     className="absolute inset-0 h-full w-full object-cover object-center"/>
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


                </div>
            </section>
            <MessageSection/>
            <InformationSection/>
            <GallerySection/>
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