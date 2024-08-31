import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Box, Flex, Button, Link, Text, IconButton, useColorMode } from "@chakra-ui/react";
import Menu from "./Menu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [nav, setNav] = useState(false);

  return (
    <Box px={[5, 20]} py={5} fontFamily="'Poppins'" maxW="100vw">
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Link href="#" fontSize={["2xl", "3xl"]} bgGradient="linear(to-r, blue.600, cyan.600)" bgClip="text" textTransform="capitalize">
          {"<Basil />"}
        </Link>

        {/* Nav Links */}
        <Flex
          display={{ base: "none", sm: "flex" }}
          gap={12}
          fontSize="20px"
          color={colorMode === "dark" ? "gray.200" : "blackAlpha.900"}
        >
          {["Home", "Skills", "Education", "Projects", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              _hover={{ color: "cyan.500" }}
              textTransform="capitalize"
            >
              {item}
            </Link>
          ))}
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "dark" ? <HiMoon /> : <HiSun />}
            aria-label="Toggle theme"
            variant="ghost"
            fontSize="2xl"
          />
        </Flex>

        {/* Mobile Menu Icon */}
        <IconButton
          onClick={() => setNav(!nav)}
          icon={<CgMenuRightAlt />}
          aria-label="Open menu"
          display={{ base: "block", sm: "none" }}
          fontSize="32px"
          color={colorMode === "dark" ? "gray.200" : "blackAlpha.900"}
          variant="ghost"
        />
      </Flex>

      {/* Mobile Menu */}
      {nav && <Menu />}
    </Box>
  );
};

export default Navbar;