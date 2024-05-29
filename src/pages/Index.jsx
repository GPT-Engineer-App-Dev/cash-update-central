import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="#f3f2ee" p={10} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Main Headline: Market Trends in 2023
        </Heading>
        <Text fontSize="lg">
          An in-depth analysis of the market trends and what to expect in the coming year.
        </Text>
      </Box>

      <Flex direction={{ base: "column", md: "row" }} p={10} gap={6}>
        {/* Featured Articles */}
        <VStack flex="3" spacing={6}>
          <Box bg="#f3f2ee" p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading as="h3" size="lg" mb={2}>Article 1</Heading>
            <Text>Summary of the first featured article...</Text>
          </Box>
          <Box bg="#f3f2ee" p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading as="h3" size="lg" mb={2}>Article 2</Heading>
            <Text>Summary of the second featured article...</Text>
          </Box>
          <Box bg="#f3f2ee" p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading as="h3" size="lg" mb={2}>Article 3</Heading>
            <Text>Summary of the third featured article...</Text>
          </Box>
        </VStack>

        {/* Sidebar */}
        <VStack flex="1" spacing={6}>
          <Box bg="#f3f2ee" p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading as="h3" size="lg" mb={2}>Advertisement</Heading>
            <Text>Ad content goes here...</Text>
          </Box>
          <Box bg="#f3f2ee" p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading as="h3" size="lg" mb={2}>Additional Links</Heading>
            <Text>Link 1</Text>
            <Text>Link 2</Text>
            <Text>Link 3</Text>
          </Box>
        </VStack>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" p={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact us: contact@financialtimes.com</Text>
          <HStack spacing={4}>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaLinkedin /></Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;