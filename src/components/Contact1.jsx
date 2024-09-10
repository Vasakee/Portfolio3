import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiTwitter, SiGmail } from "react-icons/si";
import Basil from "../assets/Basil.png";
import Resume from '/Resume.pdf'

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="section"
      id="contact"
      py={5}
      mt={20}
      fontFamily="Poppins"
      bg={{ base: "white", dark: "#111827" }}
      px={{ base: 2, md: 10 }}
    >
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        bgGradient={{ base: "linear(to-tl, #e1e1e1, #fff)", dark: "linear(to-tl, #111827, #111827)" }}
        boxShadow={{ base: "none", md: "xl" }}
        borderRadius="2xl"
        p={7}
        mb={7}
        gap={7}
        mx={2}
      >
        <Box flex="1">
          <Heading
            as="h2"
            fontSize="xl"
            fontWeight="semibold"
            color={{ base: "#00040f", dark: "slate.300" }}
            textAlign={{ base: "center", md: "left" }}
            mb={4}
          >
            Basil Dayigil
          </Heading>
          <Text
            color={{ base: "gray.600", dark: "slate.400" }}
            fontSize="md"
            mb={5}
            textAlign={{ base: "center", md: "left" }}
          >
            Intern Bluehouse Technologies
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={7}
            justify={{ base: "center", md: "start" }}
            mb={5}
          >
            <a href="https://github.com/Vasakee">
              <SiGithub size={24} color={{ base: "#00040f", _dark: "white" }} />
            </a>
            <a href="https://www.linkedin.com/in/basil-dayigil-62659421b">
              <SiLinkedin size={24} color={{ base: "#00040f", _dark: "white" }} />
            </a>
            <a href="https://x.com/Vasco_Dayigil?s=09">
              <SiTwitter size={24} color={{ base: "#00040f", _dark: "white" }} />
            </a>
            <a href="mailto:basildayigil@gmail.com">
              <SiGmail size={24} color={{ base: "#00040f", _dark: "white" }} />
            </a>
          </Flex>
          <Flex gap={5} justify={{ base: "center", md: "start" }} mb={10}>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              bgGradient="linear(to-t, blue.600, cyan.600)"
              color="white"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ bgGradient: "linear(to-t, blue.500, cyan.500)" }}
              borderRadius="md"
            >
              Resume
            </Button>
              </a>
            {/*<Button
              bgGradient="linear(to-t, blue.600, cyan.600)"
              color="white"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ bgGradient: "linear(to-t, blue.500, cyan.500)" }}
              borderRadius="md"
            >
              <a href="https://github.com/Vasakee/Portfolio3" style={{ display: 'flex', alignItems: 'center' }}>
                <SiGithub size={20} />
                <span style={{ marginLeft: '8px' }}>Star</span>
              </a>
            </Button>*/}
          </Flex>
        </Box>

        <Box flex="1" ml={{ base: "auto", md: 0 }} display="flex" justifyContent="flex-end">
          <Image
            src={Basil}
            alt="Basil Dayigil"
            boxSize={{ base: "150px", md: "200px" }}
            borderRadius="full"
            borderWidth="4px"
            borderColor={{ base: "#00040fab", _dark: "slate.300" }}
          />
        </Box>
      </Flex>

      <Text
        color={{ base: "#00040f", _dark: "slate.300" }}
        textAlign="center"
        fontSize="sm"
        mt={5}
        px={2}
      >
        Copyright &copy; {currentYear}. Basil Dayigil.
      </Text>
    </Box>
  );
};

export default Contact;