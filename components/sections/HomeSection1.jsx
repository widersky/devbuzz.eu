import Image from 'next/image';
import { useRef } from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import "../../helpers/i18n";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeSection1 = () => {
    const { t } = useTranslation();
    const swiperRef = useRef(null);

    const refs = [
        {
            content: t("reference1"),
            avatar: "dawid-stasiak",
            author: "Dawid Stasiak, CEO & Founder @ Acclaim",
        }
    ];

    return (
        <div className="py-32">
            <div className="container mx-auto grid grid-cols-2">
                <div className="flex flex-col justify-center items-start">
                    <h3 className="text-4xl font-bold text-brandText">
                        {t("homeHeading1")}
                    </h3>
                    <p className="text-lg text-brandTextLight mt-10 leading-relaxed">
                        {t("homeText1")}
                    </p>
                    <p className="text-lg text-brandTextLight mt-4 leading-relaxed">
                        {t("homeText2")}
                    </p>

                    <h4 className="text-2xl text-brandText mt-6">
                        {t("theySay")}
                    </h4>

                    <div className="w-full mt-4 -mx-2">
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={20}
                            slidesPerView={1}
                        >
                            {refs.map((ref) => (
                                <SwiperSlide key={uuidv4()}>
                                    <div className="p-2 cursor-grab active:cursor-grabbing">
                                        <div className="flex flex-col items-end gap-6 w-full bg-white rounded-md shadow px-8 py-7">
                                            <blockquote className="leading-relaxed text-brandTextLight">
                                                {ref.content}
                                            </blockquote>
                                            <div className="flex gap-4 items-center mt-2">
                                                <Image
                                                    src={`/author-${ref.avatar}.webp`}
                                                    className="w-8 h-8 rounded-full"
                                                    loading="lazy"
                                                    alt=""
                                                    width={32}
                                                    height={32}
                                                />
                                                <span className="opacity-70">
                                                    {ref.author}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            <div className="flex gap-4 justify-center mt-2">
                                <button onClick={() => swiperRef.current.swiper.slidePrev()} className="p-3 rounded hover:bg-white hover:bg-opacity-30"><Image src="/icon-chevron-left.svg" alt="" width={24} height={24} /></button>
                                <button onClick={() => swiperRef.current.swiper.slideNext()} className="p-3 rounded hover:bg-white hover:bg-opacity-30"><Image src="/icon-chevron-right.svg" alt="" width={24} height={24} /></button>
                            </div>
                        </Swiper>
                    </div>
                </div>

                <div className="relative flex justify-center items-center">
                    <motion.img
                        animate={{
                            y: [-25, 10, -25],
                        }}
                        transition={{
                            duration: 5,
                            times: [0, 0.5, 1],
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                        src="/icon-3d-thumb-up.webp"
                        className="w-72 h-72"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeSection1;
