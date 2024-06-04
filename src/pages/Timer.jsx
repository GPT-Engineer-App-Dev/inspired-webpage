import { useState, useEffect } from "react";
import { Box, Button, Container, Flex, Heading, Input, Text, VStack } from "@chakra-ui/react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputTime, setInputTime] = useState("");

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStart = () => {
    setTime(parseInt(inputTime, 10));
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setInputTime("");
  };

  return (
    <Box bg="black" color="white" minH="100vh">
      <Box as="nav" bg="gray.800" p={4}>
        <Heading size="lg" color="yellow.400">Timer</Heading>
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
            <Text fontSize="6xl" color="green.400">{new Date(time * 1000).toISOString().substr(11, 8)}</Text>
          </Box>
          <Input
            placeholder="Enter time in seconds"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
            color="yellow.400"
            bg="gray.700"
            borderColor="yellow.400"
          />
          <Flex>
            <Button onClick={handleStart} colorScheme="green" mr={2}>Start</Button>
            <Button onClick={handleStop} colorScheme="red" mr={2}>Stop</Button>
            <Button onClick={handleReset} colorScheme="yellow">Reset</Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Timer;