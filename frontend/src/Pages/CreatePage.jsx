import { useState } from "react";
import {
  Container,
  VStack,
  Heading,
  Box,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("White", "gray.800")}
          padding={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input placeholder="Product name" />
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CreatePage;
