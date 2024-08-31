import ProjectProp from "./Project_prop1";
import { GPT4, Portfolio, Rocket, WellBeing, Game } from "../constants/Constant";
import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiReact,
  SiChakraui,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiNestjs,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const textColor = useColorModeValue("#00040f", "slate.300");

  const featuredProjects = [
    {
      title: "MUZEEK!",
      para: "A music streaming platform that allows listeners to make payments in cryptocurrencies",
      img: Portfolio,
      link: "https://muzeek.vercel.app/",
      github_link: "https://github.com/Vasakee/Muzeek",
      Role: 'Frontend Developer',
      tech: [
        { icon: SiReact, label: "React" },
        { icon: SiChakraui, label: "ChakraUi" },
        { icon: SiFirebase, label: "Firebase" },
      ],
    },
    {
      title: "Infinity Gem",
      para: "The official Website for Bluehouse Technologies.",
      img: Rocket,
      link: " ",
      github_link: " ",
      Role: 'Member Backend development Team',
      tech: [
        { icon: SiNestjs, label: "Nestjs" },
        {icon: SiTypescript, label: "TypeScript"}
      ],
    },
    {
        title: "MarbStores",
        para: "An Ecommerce website.",
        img: Rocket,
        link: " ",
        github_link: " ",
        Role: 'Member Backend development Team',
        tech: [
          { icon: SiNestjs, label: "Nestjs" },
          {icon: SiTypescript, label: "TypeScript"}
        ],
      },
  ];

  const personalProjects = [
    {
      title: "VOTEAZY",
      para: "An Online Voting site that allows only registered citizens of the country who are 18+ to vote",
      img: WellBeing,
      link: " ",
      github_link: " ",
      Role: 'FullStack Developer',
      tech: [
        { icon: SiReact, label: "JavaScript" },
        { icon: SiChakraui, label: "ChakraUi" },
        { icon: SiNodedotjs, label: "NodeJs" },
        { icon: SiExpress, label: "Express" },
      ],
    },
    {
      title: "Regis!",
      para: "An Online Registration form that allows citizens to register in other for them to be able to vote",
      img: GPT4,
      link: "https://registration-9784.onrender.com/",
      github_link: "https://github.com/Vasakee/Regis",
      Role: 'FullStack Developer',
      tech: [
        { icon: SiReact, label: "JavaScript" },
        { icon: SiChakraui, label: "ChakraUi" },
        { icon: SiNodedotjs, label: "NodeJs" },
        { icon: SiExpress, label: "Express" },
      ],
    },
    {
      title: "Stone-Paper-Scissors Game",
      para: "A Stone Paper Scissors game to reminisce childhood memories.",
      img: Game,
      link: "",
      github_link: " ",
      tech: [
        { icon: SiHtml5, label: "HTML5" },
        { icon: SiJavascript, label: "JavaScript" },
        { icon: SiCss3, label: "CSS3" },
      ],
    },
  ];

  return (
    <Box as="section" id="projects" px={5} mx={{ base: 5, md: 20 }} minH="100vh" fontFamily="Poppins">
      {/* Featured Projects */}
      <Box mt={10} data-aos="fade-down">
        <Heading as="h1" textAlign="center" color={textColor} fontWeight="extrabold" fontSize={{ base: "4xl", md: "5xl" }} mb={5}>
          Featured Projects
        </Heading>
        <Flex mt={16} gap={10} flexWrap="wrap" justifyContent="space-between" data-aos="zoom-out-down">
          {featuredProjects.map((project, index) => (
            <ProjectProp
              key={index}
              title={project.title}
              para={project.para}
              img={project.img}
              link={project.link}
              github_link={project.github_link}
              Role={project.Role}
              tech={project.tech}
            />
          ))}
        </Flex>
      </Box>

      {/* Personal Projects */}
      <Box mt={16} data-aos="fade-down">
        <Heading as="h2" textAlign="center" color={textColor} fontWeight="extrabold" fontSize={{ base: "4xl", md: "5xl" }} mb={5}>
          Personal Projects
        </Heading>
        <Flex mt={16} gap={10} flexWrap="wrap" justifyContent="space-between" data-aos="zoom-out-down">
          {personalProjects.map((project, index) => (
            <ProjectProp
              key={index}
              title={project.title}
              para={project.para}
              img={project.img}
              link={project.link}
              github_link={project.github_link}
              tech={project.tech}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;