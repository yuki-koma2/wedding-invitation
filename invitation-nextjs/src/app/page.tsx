import {Link} from "@nextui-org/link";
import {Snippet} from "@nextui-org/snippet";
import {Code} from "@nextui-org/code";
import {button as buttonStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import MessageSection from "@/components/Message";
import InformationSection from "@/components/Information";
import GallerySection from "@/components/Gallery";
import GuestForm from "@/components/GuestForm";
import React from "react";

export default function Home() {
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
            <InformationSection />
            <GallerySection/>
            <section
                className="p-4 font-klee font-bold text-gray-500 text-center rounded-lg ">
                <p className="my-10">お手数ではございますがご都合のほどを<br/><span
                    className="font-bold">11月2日(土)</span>までにご一報賜りますようお願い申し上げます</p>
                <GuestForm/>
            </section>
            <hr />
            <footer className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-pink-50">
                <div className="flex gap-3">
                    <Link
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                        }) + "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"}
                        href={siteConfig.navigation.invitation.path}
                    >
                        友人向け
                    </Link>
                    <Link
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                        }) + "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"}
                        href={siteConfig.navigation.familyInvitation.path}
                    >
                        親族向け
                    </Link>
                    <Link
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                        }) + "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"}
                        href={siteConfig.navigation.thanks.path}
                    >
                        thanks
                    </Link>

                </div>
            </footer>
        </main>
    );
}
