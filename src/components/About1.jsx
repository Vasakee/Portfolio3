import { Box, Button, Heading, Text, Stack } from "@chakra-ui/react";
import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";
import Resume from '/Resume.pdf'

const About = () => {
  return (
    <Box
      as="section"
      id="about"
      px={{ base: 2, md: 20 }}
      py={5}
      mb={10}
      fontFamily="Poppins"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={5}
        align="center"
        mt={12}
      >
        <Box mb={10}>
          <Heading
            as="h3"
            fontSize={{ base: "50px", md: "70px" }}
            lineHeight={{ base: "70px", md: "80px" }}
            fontWeight="semibold"
            color="gray.900"
            _dark={{ color: "white" }}
          >
            Hello! <br />I am
          </Heading>
          <Text
            bgClip="text"
            bgGradient="linear(to-r, blue.600, cyan.600)"
            _dark={{ bgGradient: "linear(to-r, teal.300, cyan.400)" }}
            fontSize={{ base: "50px", md: "70px" }}
            lineHeight={{ base: "70px", md: "80px" }}
            fontWeight="bold"
          >
            Basil Dayigil
          </Text>

          <Text
            h="150px"
            fontSize={{ base: "15px", md: "xl" }}
            bgClip="text"
            bgGradient="linear(to-r, gray.900, slate.500)"
            _dark={{ bgGradient: "linear(to-r, teal.300, cyan.400)" }}
            maxW="470px"
            mt={5}
            mb={10}

            pl={1}
          >
           A Fullstack Software Engineer with experience in designing, developing and implementing
           software applications using multiple frameworks of both frontend and backend engineering
          </Text>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              bgGradient="linear(to-t, blue.600, cyan.600)"
              color="white"
              size='lg'
              fontWeight="bold"
              width="10px"  
              height="5px" 
              _hover={{ bgGradient: "linear(to-t, blue.500, cyan.500)" }}
            >
              Resume
            </Button>
              </a>
        </Box>

        <Box
          maxW="650px"
          boxShadow="xl"
          borderRadius="xl"
          border="1px solid"
          borderColor="gray.900"
          _dark={{ borderColor: "white" }}
        >
          <Lottie animationData={computer} loop={true} />
        </Box>
      </Stack>
    </Box>
  );
};

export default About;