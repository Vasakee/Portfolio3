import { Box, Flex, Heading, Image, Text, Link, useColorModeValue, Tooltip, IconButton } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

/* eslint-disable react/prop-types */
const ProjectProp = ({ title, para, img, link, github_link, tech = [], Role }) => {
  const borderColor = useColorModeValue("#00040f", "white");
  const bgColor = useColorModeValue("#e1e1e1", "transparent");
  const hoverBgGradient = useColorModeValue(
    "linear(to-tl, #ccc, #e1e1e1)",
    "linear(to-tl, #00040F, #0B274C)"
  );

  return (
    <Box
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="xl"
      shadow="xl"
      bg={bgColor}
      h={{ base: "450px", sm: "370px" }}
      p={{ base: 3, sm: 7 }}
      _hover={{ bgGradient: hoverBgGradient }}
    >
      <Flex gap={{ base: 0, sm: 7 }} alignItems="center">
        <Box p={3}>
          <Image
            src={img}
            alt={title}
            borderRadius="full"
            borderWidth="1px"
            borderColor={borderColor}
            maxW="100px"
          />
        </Box>
        <Box p={3}>
          <Heading
            fontSize="xl"
            fontWeight="semibold"
            bgClip="text"
            bgGradient="linear(to-r, blue.600, cyan.600)"
            mb={2}
          >
            {title}
          </Heading>
          {Role && <Text color={borderColor} fontWeight="bold">Role: {Role}</Text>}
          <Text color={borderColor} mt={2}>Tech Stack:</Text>
          <Flex gap={1} mt={1}>
            {tech.map((techItem, index) => (
              <Tooltip key={index} label={techItem.label} aria-label={techItem.label}>
                <IconButton
                size='md'
                  icon={<techItem.icon />}
                  variant="ghost"
                  colorScheme={useColorModeValue("blackAlpha", "whiteAlpha")}
                />
              </Tooltip>
            ))}
          </Flex>
        </Box>
      </Flex>
      <Text color="gray.500" mt={5} fontSize="lg" px={5}>
        {para}
      </Text>
      <Flex gap={2} color={borderColor} mt={5} px={5} fontSize="3xl">
        <Link href={github_link} isExternal>
          <SiGithub />
        </Link>
        <Link href={link} isExternal>
          <SlLink />
        </Link>
      </Flex>
    </Box>
  );
};

export default ProjectProp;