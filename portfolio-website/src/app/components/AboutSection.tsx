"use client"
import React, {startTransition, useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Contact",
        id: "contact",
        content: (
            <div className="font-semibold">
                <div className="pt-2 flex self-center">
                    <Image
                    src="/images/github.png"
                    alt="github"
                    width={27}
                    height={27}
                    />
                    <h5 className="pl-4 hover:text-orange-600">
                        <a href="https://github.com/jowkemm" target="_blank" rel="noopener noreferrer">
                            https://github.com/jowkemm
                        </a>
                    </h5>
                </div>
                <div className="pt-2 flex self-center">
                    <Image
                    src="/images/email.png"
                    alt="email"
                    width={27}
                    height={27}
                    />
                    <h5 className="pl-4  ">pimkote1615@gmail.com</h5>
                </div>
                <div className="pt-2 flex self-center">
                    <Image
                    src="/images/location.png"
                    alt="location"
                    width={27}
                    height={27}
                    />
                    <h5 className="pl-4 pt-1 ">Bangkok, Thailand</h5>
                </div>
            </div>
        )
    },
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="grid grid-cols-5">
                <div>
                    <h1 className="font-bold pb-2">Frontend</h1>
                    <ul className="list-disc pl-2 ">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>TailwindCSS</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold pb-2">Backend</h1>
                    <ul className="list-disc pl-2 ">
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>Restful APIs</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold pb-2">Tools</h1>
                    <ul className="list-disc pl-2 ">
                        <li>Postman</li>
                        <li>Swagger</li>
                        <li>Git</li>
                        <li>Docker</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    <span className="font-bold">2023-Present |</span><span className="ml-2 font-bold text-orange-600">@Chulalongkorn University</span><br/>
                    <span className="ml-2">Bachelor of Engineering Program in Computer Engineering and Digital Technology (CEDT)</span><br/>
                </li>
                <li className="mt-2">
                    <span className="font-bold">2020-2022 |</span><span className="ml-2 font-bold text-orange-600">@Thammasat University & Suankularb Wittayalai Rangsit School</span><br/>
                    <span className="ml-2">Science Classrooms in University-Affiliated School Project (SCiUS)</span><br/>
                </li>
                <li className="mt-2">
                    <span className="font-bold">2018-2020 |</span><span className="ml-2 font-bold text-orange-600">@Suankularb Wittayalai Rangsit School</span><br/>
                    <span className="ml-2">Gifted Education Program (GEP)</span><br/>
                </li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
            <li>
                <span className="font-bold">Summer 2024 |</span><span className="ml-2 font-bold text-orange-600">@Krungthai Bank</span><br/>
                <span className="ml-2">Backend Developer (Intern)</span><br/>
            </li>
        </ul>
        )
    }
];

export default function AboutSection() {
    const [tab, setTab] = useState("contact")
    const [startTranstion, isPending] = useTransition();
    
    const handleTabChange = (id:any) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const currentTab = TAB_DATA.find((t) => t.id === tab);

    return <section className="text-black mt-10">
        <div className="grid grid-cols-2 ">
            <div className="mr-10 justify-self-end">
                <Image
                    src="/images/profile.jpg"
                    alt="about image"
                    width={350}
                    height={300}
                />
            </div>
            <div className="mt-4 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
                <p className="text-lg text-black">
                I'm Panus Pimkote (Kem), a first-year student at CEDT Chula,<br/>
                currently interning in Backend Engineer at Krungthai Bank.<br/>
                </p>
                <div className="flex flex-row mt-4">
                    <TabButton selectTab={() => handleTabChange("contact")} active={tab==="contact"}>{" "}Contact{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab==="skills"}>{" "}Skills{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab==="education"}>{" "}Education{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab==="experience"}>{" "}Experience{" "}</TabButton>
                </div>
                <div className="pt-4 text-black">
                        {currentTab ? currentTab.content : "Content not available"}
                </div>
            </div>
        </div>
    </section>
    
};