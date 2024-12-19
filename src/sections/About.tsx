import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactICon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: <JavascriptIcon />,
  },
  {
    title: "HTML5",
    icon: <HTMLIcon />,
  },
  {
    title: "CSS",
    icon: <CssIcon />,
  },
  {
    title: "React",
    icon: <ReactICon />,
  },
  {
    title: "Chrome",
    icon: <ChromeIcon />,
  },
  {
    title: "Github",
    icon: <GithubIcon />,
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse into My World"
        description="Learn more about who I am, what i do, and what inspires me."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3> My Reads</h3>
            <p> Explore the books shaping my perspective</p>
          </div>
          <Image src={bookImage} alt="Book cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3> My Toolbox</h3>
            <p>
              {" "}
              Explore the technologies and tools I use to craft exceptional
              digital experiences.
            </p>
          </div>
          <div></div>
        </Card>
      </div>
    </div>
  );
};
