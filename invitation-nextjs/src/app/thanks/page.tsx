import Image from 'next/image';
import React from "react";

const ThanksPage = () => {
    return (
        <main className={`bg-[#fffcf9]`}>
            <section
                className="
                h-screen min-h-96 relative flex flex-1 shrink-0 items-start justify-center overflow-hidden bg-gray-100 py-16  md:py-20 xl:py-48
                ">
                <img src={`/img/342479DF-thanks.jpeg`}
                     loading="lazy"
                     alt="thanks"
                     className="absolute inset-0 h-full w-full object-cover object-center"/>

                <div className="absolute inset-0 bg-gray-300 mix-blend-multiply"/>

                <div className="relative flex flex-col p-4 sm:max-w-xl mt-20">
                    <h1 className="font-petit text-6xl text-white">
                        Thank you
                    </h1>

                    <p className="font-klee text-xl text-white text-center pt-3">
                        当日は皆様にお会いできることを<br/>楽しみにしています
                    </p>
                </div>
            </section>
        </main>
    )
}

export default ThanksPage;