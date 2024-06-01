import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="black" color="white" minH="100vh">
      <Box as="nav" bg="gray.800" p={4}>
        <Heading size="lg" color="yellow.400">Stopwatch</Heading>
      </Box>
      <Container centerContent maxW="container.md" py={10}>
        <VStack spacing={4}>
          <Box
            bg="gray.900"
            borderRadius="md"
            p={6}
            textAlign="center"
            border="2px"
            borderColor="yellow.400"
          >
            <Text fontSize="6xl" color="green.400">00:00:00</Text>
          </Box>
          <Text fontSize="xl" color="yellow.400">Digital Stopwatch</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;