import { Box, Heading, Flex, Text, Image, useColorModeValue } from "@chakra-ui/react";
import Lottie from "lottie-react";
import educationAnimation from "../assets/lottie/Education.json"; // Adjust the path accordingly
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const bgGradient = useColorModeValue(
    "linear(to-r, amber.500, orange.600, yellow.500)",
    "linear(to-r, #ff6600, slate.100)"
  );
  const textColor = useColorModeValue("#00040f", "slategray");

  return (
    <Box id="education" p={5} mx={{ base: 5, md: 20 }} mb={10} minH="100vh" fontFamily="Poppins">
      <Heading
        as="h1"
        fontWeight="extrabold"
        fontSize={{ base: "4xl", md: "5xl" }}
        textAlign="center"
        color={textColor}
        mb={5}
      >
        Education
      </Heading>

      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        gap={7}
        justifyContent="space-between"
        data-aos="fade-right"
      >
        <Box maxW="520px" mt="52px" p={7}>
          <Flex gap={5}>
            <Image
              src="https://your-valid-image-url.com/IIIT_Kota.png" // Replace with a valid image URL
              alt="FUTMX"
              w="90px"
              h="90px"
            />
            <Heading
              bgGradient={bgGradient}
              bgClip="text"
              fontSize={{ base: "17px", md: "2xl" }}
              fontWeight="semibold"
              w="300px"
              h="100px"
              lineHeight="shorter"
              textAlign="left"
            >
              Federal University Of Technology Minna.
            </Heading>
          </Flex>

          <Box mt={7} pl={4}>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={textColor}
              mb={2}
              fontWeight="bold"
            >
              Bachelor of Technology
            </Text>
            <Text fontStyle="italic" color="gray.500" fontSize={{ base: "lg", md: "xl" }}>
              October 2019 - July 2025
            </Text>
            <Text mt={2} color="gray.500" fontSize={{ base: "lg", md: "xl" }}>
              Computer Science
            </Text>
          </Box>
        </Box>

        <Lottie
          animationData={educationAnimation} // Use the correct Lottie animation
          loop={true}
          style={{ maxWidth: "500px" }}
          className="shadow-xl rounded-xl border"
        />
      </Flex>
    </Box>
  );
};

export default Education;