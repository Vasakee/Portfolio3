import { Box, Heading, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaJs, FaReact, FaNodeJs,  } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiNestjs, SiTypescript, SiNextdotjs, SiChakraui, SiExpress } from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const bgColor = useColorModeValue("#00040f", "slategray"); // Dark and light mode compatibility for text

  return (
    <Box
      className="EXPERIENCE"
      as="section" id="skills"
      p={5}
      mx={{ base: 5, md: 20 }}
      mb={10}
      fontFamily="Poppins"
    >
      <Heading
        as="h1"
        fontWeight="extrabold"
        fontSize={{ base: "4xl", md: "5xl" }}
        textAlign="center"
        color={bgColor}
        mb={10}
      >
        SKILLS
      </Heading>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        placeContent="center"
        data-aos="zoom-out-up"
      >
        <SkillBox icon={FaHtml5} name="HTML" />
        <SkillBox icon={FaCss3Alt} name="CSS" />
        <SkillBox icon={FaJs} name="JavaScript" />
        <SkillBox icon={FaReact} name="React" />
        <SkillBox icon={SiChakraui} name="ChakraUI" />
        <SkillBox icon={SiTypescript} name="TypeScript" />
        <SkillBox icon={FaNodeJs} name="Nodejs" />
        <SkillBox icon={SiExpress} name="ExpressJs" />
        <SkillBox icon={SiNestjs} name="NestJs" />
        <SkillBox icon={SiMongodb} name="MongoDB" />
        <SkillBox icon={SiFirebase} name="Firebase" />
        <SkillBox icon={FaGithub} name="GitHub" />
      </Grid>
    </Box>
  );
};

const SkillBox = ({ icon: Icon, name }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
      transition="0.3s ease"
    >
      <Icon size="3em" />
      <Text mt={3} fontWeight="bold" fontSize="lg">
        {name}
      </Text>
    </Box>
  );
};

export default Skills;