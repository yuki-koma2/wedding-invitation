import Image from 'next/image';

const ThanksPage = () => {
    return (
        <main
            className={`
                bg-white bg-center bg-cover bg-fixed h-screen
                bg-[url('/img/bg-2.jpg')]
                `}
            aria-label="結婚式の招待状の背景画像"
        >

            <h1 className="font-petit text-6xl p-3">ご出席ありがとうございました</h1>


            <Image src={`/img/header.jpeg`}
                 loading="lazy" alt="結婚指輪と花束"
                   width={1920}
                   height={1080}
                 className="w-full object-cover object-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
        </main>
    )
}

export default ThanksPage;