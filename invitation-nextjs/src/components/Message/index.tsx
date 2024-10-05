import { Spacer } from "@nextui-org/react";
import React from "react";
import Icon from "@/components/icon";

const MessageSection = () => {
    return (
        <section
            className=" py-8 px-2 flex justify-center flex-col items-center font-klee font-bold text-gray-500 text-center p-4">
            <h1 className="font-petit text-3xl text-gray-500 py-4">
                <Icon />
                Message
               <Icon />
            </h1>
            <p>謹啓 清秋の候</p>
            <br/>
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
            <br/>
            <p>敬具</p>
            <br/>
            <p>令和6年10月吉日</p>
            <Spacer y={1}/>
            <p>小松 優基</p>
            <p>澤木 菜摘</p>
        </section>
    )

}

export default MessageSection;