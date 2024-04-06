import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calender,
  BriefCase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Amirhosein mirtalemi",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+9394701837",
  },
  {
    icon: <MailIcon size={20} />,
    text: "amirhoseinmirtalemi@gmail.com",
  },
  {
    icon: <Calender size={20} />,
    text: "Born on 2 Apr, 2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Comouter engineering student",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Rasht, Guilan",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Azad, Rasht",
        qualification: "Comouter engineering student",
        years: "1399 - 1403",
      },
      {
        university: "Another, Rasht",
        qualification: "Comouter engineering student",
        years: "1399 - 1403",
      },
      {
        university: "Another, Rasht",
        qualification: "Comouter engineering student",
        years: "1399 - 1403",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc, Rasht",
        qualification: "Frontend Developer",
        years: "1399 - 1403",
      },
      {
        company: "Another, Rasht",
        qualification: "Software Engineer",
        years: "1399 - 1403",
      },
      {
        company: "Another, Rasht",
        qualification: "Junior Developer",
        years: "1399 - 1403",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Html, CSS, BootStrap",
      },
      {
        name: "Javascript",
      },
      {
        name: "React Js",
      },
      {
        name: "Next Js",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
      </div>
    </section>
  );
};

export default About;
