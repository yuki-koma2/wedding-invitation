import React from 'react';

const ThanksPage = () => {
    return (
        <main
            className="bg-white bg-center bg-cover bg-fixed h-screen "
            style={{backgroundImage: 'url(img/bg-2.jpg)'}}
        >

            <h1 className="font-petit text-6xl p-3">Thanks </h1>

            <img src={`img/header.jpeg`}
                 loading="lazy" alt="Photo"
                 className="w-full object-cover object-center"/>
        </main>
    )
}

export default ThanksPage;