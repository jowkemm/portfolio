"use client"
import React from "react";
import Image from "next/image";

export default function IntroSection() {
    const handleDownload = (filename:string) => {
        const anchor = document.createElement("a");
        anchor.href = `/${filename}.pdf`;
        anchor.download = `${filename}.pdf`;
        anchor.click();
    };

    return (
        <section>
            <div className="flex justify-center">
                <div className="mr-8 content-center">
                    <h1 className="text-black mb-4 text-4xl font-extrabold">Hi, I&apos;m JowKem</h1>
                    <p className="text-black text-lg" style={{ whiteSpace: 'pre-line' }}>
                        I&apos;m a first-year student at CEDT, Chulalongkorn University.<br/>
                        I love learning new things and passionate in Backend Development.
                    </p>
                    <div>
                        <button 
                            className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-300 text-white hover:scale-105 transition-transform duration-300 ease-in-out"
                            onClick={() => handleDownload("resume")}>
                            Resume
                        </button>
                        <button 
                            className="px-1 py-1 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-300 mt-5 hover:scale-105 transition-transform duration-300 ease-in-out"
                            onClick={() => handleDownload("transcript")}>
                            <span className="block bg-white rounded-full px-5 py-2 text-orange-600">Transcript</span>
                        </button>
                    </div>
                </div>
                
                <div className="content-center">
                    <div className="rounded-full">
                        <Image
                            src="/images/icon.png"
                            alt="icon image"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
