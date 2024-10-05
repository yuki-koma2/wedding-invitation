'use client';
import React, { useState, useEffect } from "react";
import Icon from "@/components/icon";

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<string|null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        if (selectedImage) {
            setIsModalVisible(true); // モーダルが選択された時に表示
        }
    }, [selectedImage]);

    const closeModal = () => {
        setIsModalVisible(false); // モーダルを非表示にする
        setTimeout(() => setSelectedImage(null), 300); // アニメーション終了後に画像を消す
    };

    const images = [
        "/img/08919E5E.jpeg",
        "/img/EA08CFB6.jpeg",
        "/img/036E777D.jpeg",
        "/img/097E7564.jpeg",
        "/img/flower.jpeg",
        "/img/A844B0C2.jpeg",
        "/img/6167D44E.jpeg",
        "/img/BC37C54A.jpeg",
        "/img/7A430B05.jpeg",
    ];

    return (
        <section className="flex justify-center flex-col items-center font-klee font-bold text-gray-500 text-center p-4">
            <h1 className="font-petit text-3xl text-gray-500 py-4"><Icon/>Photo Gallery<Icon/></h1>
            <div className="grid grid-cols-3 gap-2">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="aspect-square overflow-hidden"
                    >
                        <img
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="cursor-pointer object-cover w-full h-full"
                            onClick={() => setSelectedImage(src)}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-300 ${
                        isModalVisible ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={closeModal}
                >
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-3xl max-h-screen"
                    />
                </div>
            )}
        </section>
    );
};

export default GallerySection;