import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
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
    icon: <Calendar size={20} />,
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
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs>
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intvitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experience.
                    </p>
                    {/* icons */}
                    <div>
                      {infoData.map((item, index) => {
                        return (
                          <div key={index}>
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  qualification info
                </TabsContent>
                <TabsContent value="skills">skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
