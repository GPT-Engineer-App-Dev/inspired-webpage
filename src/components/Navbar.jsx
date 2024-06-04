import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box as="nav" bg="gray.800" p={4}>
      <Flex justify="space-between" align="center">
        <Heading size="lg" color="yellow.400">Time Management</Heading>
        <Flex>
          <Link as={RouterLink} to="/" color="yellow.400" mx={2}>Stopwatch</Link>
          <Link as={RouterLink} to="/timer" color="yellow.400" mx={2}>Timer</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;