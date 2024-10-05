import React from "react";

//  red-flower.png
// green-flower.png
// yellow-flower.png

type IconProps = {
    color?: 'red' | 'green' | 'yellow';
}

const Icon:React.FC<IconProps> = ({color}) => {
    const getImageSrc = () => {
        switch (color) {
            case "red":
                return "/img/red-flower.png";
            case "green":
                return "/img/green-flower.png";
            case "yellow":
                return "/img/yellow-flower.png";
            default:
                return "/img/yellow-flower.png";  // デフォルトは黄色の花
        }
    };
    return (
        <img
            src={getImageSrc()}
            loading="lazy"
            alt="花束"
            className="w-10 inline mx-2"
        />
    )

}

export default Icon;