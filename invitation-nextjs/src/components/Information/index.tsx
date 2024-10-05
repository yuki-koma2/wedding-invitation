import Icon from "@/components/icon";
import React from "react";


type InformationSectionProps = {
    isFamily?: boolean;
}

const InformationSection: React.FC<InformationSectionProps> = ({isFamily}) => {
    return (
        <section className="
            flex justify-center flex-col items-center font-klee font-bold text-gray-500 text-center p-4
           ">
            <h1 className="font-petit text-3xl text-gray-500 py-4"><Icon color={"green"}/>Information<Icon color={"green"}/></h1>
            <div className="space-y-2">
                <p className="flex">
                    <span className="w-24 text-right pr-4">日時：</span>
                    <span>令和６年12月1日(日)</span>
                </p>
                <p className="flex">
                    <span className="w-24 text-right pr-4">受付：</span>
                    <span>13時00分</span>
                </p>
                {isFamily && (
                <p className="text-red-700">
                    受付後 親族紹介を行いますので<br/>
                    <span className="font-bold">13時20分</span>までにはお越しください
                </p>
                )}
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
                    <span>東京大神宮マツヤサロン</span>
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
    );
}

export default InformationSection;