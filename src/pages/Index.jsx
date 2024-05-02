import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, Heading, VStack, HStack, Text, useToast, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { FaUserGraduate, FaCheck, FaTimes, FaPlus } from "react-icons/fa";

const Index = () => {
  const [scholars, setScholars] = useState([]);
  const [newScholar, setNewScholar] = useState({ name: "", email: "", researchTopic: "" });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewScholar({ ...newScholar, [name]: value });
  };

  const registerScholar = () => {
    if (!newScholar.name || !newScholar.email || !newScholar.researchTopic) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setScholars([...scholars, { ...newScholar, id: scholars.length + 1 }]);
    setNewScholar({ name: "", email: "", researchTopic: "" });
    toast({
      title: "Success",
      description: "Scholar registered successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={5}>
        <Heading as="h1" size="xl">
          Ph.D. Scholar Tracking System
        </Heading>
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>
            Register Scholar
          </Heading>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" name="name" value={newScholar.name} onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" name="email" type="email" value={newScholar.email} onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="researchTopic">Research Topic</FormLabel>
              <Textarea id="researchTopic" name="researchTopic" value={newScholar.researchTopic} onChange={handleInputChange} />
            </FormControl>
            <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={registerScholar}>
              Register
            </Button>
          </VStack>
        </Box>
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>
            Scholars List
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Research Topic</Th>
                </Tr>
              </Thead>
              <Tbody>
                {scholars.map((scholar) => (
                  <Tr key={scholar.id}>
                    <Td>{scholar.id}</Td>
                    <Td>{scholar.name}</Td>
                    <Td>{scholar.email}</Td>
                    <Td>{scholar.researchTopic}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
