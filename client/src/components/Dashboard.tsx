import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Image,
  Divider,
  Button,
  CardFooter,
  ButtonGroup,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import welcome from "../assets/welcome-4.jpg";
import section2 from "../assets/section-2.jpg";
import section3 from "../assets/section-3.jpg";
import "./dashboard.css";
import Cart from "./customer/cart/Cart";
import Loader from "./common/Loader";
import { CSSProperties, useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Flex direction={"column"}>
      {!isLoading && <Loader/>}
      <Flex style={{ background: "rgba(0, 0, 0, 0.5)" }} position="relative">
        <Box filter="auto" brightness="35%" overflow={"hidden"}>
          <img
            src={welcome}
            alt="welcome screen"
            style={{
              minWidth: "100%",
              animation: "zoom-in-zoom-out 12s ease infinite",
              overflow: "hidden",
            }}
          />
        </Box>
        <Box position="absolute" top={{base:"20%", sm:"5%"}} left={{base:"20%", sm:"5%"}}>
          <Text
            fontSize={{base:"2xl", md:"3xl", lg:"5xl"}}
            color="white"
            zIndex={1000}
            fontWeight="semibold"
            textShadow="0 2px px black"
            fontFamily="'Permanent Marker', cursive"
          >
            {" "}
            Welcome to our
          </Text>
          <Text
            fontSize={{base:"4xl", md:"4xl", lg:"9xl"}}
            textColor="red.500"
            fontWeight={"bold"}
            textShadow="0 2px 10px black"
            fontFamily="'Permanent Marker', cursive"
          >
            Nosh{" "}
          </Text>
        </Box>
      </Flex>
      <Flex px="6" py="4" bg="white" alignItems="center" direction={"column"}>
        <Text
          fontFamily={"'Nunito', sans-serif"}
          fontSize={{base:"2xl", md:"3xl", lg:"4xl"}}
          fontWeight={"semibold"}
        >
          International Cuisines
        </Text>
        <Text fontFamily={"'Nunito', sans-serif"} fontSize={{base:"sm",lg:"lg"}}>
          Incredibly Tasty International Dish
        </Text>
        <Grid
          mt={{base:"0",lg:"4"}}
          templateRows= {{base:"repeat(5, 1fr)",lg: "repeat(1, 1fr)"}}
          templateColumns={{base:"repeat(2, 1fr)",lg: "repeat(5, 1fr)"}}
          gap={4}
        >
          <GridItem
            colSpan={2}
            rowSpan={{base:2, lg:1}}
            display="flex"
            alignItems={"center"}
            justifyContent={{base:"center",lg:"end"}}
          >
            <Flex
              direction={"column"}
              alignItems="end"
              justifyContent={"center"}
            >
              <Box maxW={{base:"full",lg:"md"}}>
                <Text
                  textColor={"orange.600"}
                  fontSize="xl"
                  fontWeight={"semibold"}
                >
                  African Cuisines
                </Text>
                <Text fontSize={"md"}>
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetelis in mei. Meianpe icula euripidis,partem.
                </Text>
              </Box>
              <Box maxW={"md"} mt="5">
                <Text
                  textColor={"orange.600"}
                  fontSize="xl"
                  fontWeight={"semibold"}
                >
                  African Cuisines
                </Text>
                <Text fontSize={"md"}>
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetelis in mei. Meianpe icula euripidis,partem.
                </Text>
              </Box>
              <Box maxW={"md"} mt="5">
                <Text
                  textColor={"orange.600"}
                  fontSize="xl"
                  fontWeight={"semibold"}
                >
                  African Cuisines
                </Text>
                <Text fontSize={"md"}>
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetelis in mei. Meianpe icula euripidis,partem.
                </Text>
              </Box>
              <Box maxW={"md"} mt="5">
                <Text
                  textColor={"orange.600"}
                  fontSize="xl"
                  fontWeight={"semibold"}
                >
                  African Cuisines
                </Text>
                <Text fontSize={"md"}>
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetelis in mei. Meianpe icula euripidis,partem.
                </Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={1} rowSpan={{base:1, lg:1}}>
            <Box minW={{base:'full'}}>
              <Image src={section2} />
            </Box>
          </GridItem>
          <GridItem colSpan={2} rowSpan={{base:2,lg:1}} display="flex" alignItems={"center"}>
            <Flex
              direction={"column"}
              alignItems="start"
              justifyContent={"center"}
            >
              <Box maxW={"md"}>
                <Text
                  textColor={"orange.600"}
                  fontSize={"xl"}
                  fontWeight={"semibold"}
                >
                  African Cuisines
                </Text>
                <Text fontSize={"md"}>
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetelis in mei. Meianpe icula euripidis,partem.
                </Text>
              </Box>
              <Box maxW={"md"} mt="5">
                <Text
                  textColor={"orange.600"}
                  fontSize="xl"
                  fontWeight={"semibold"}
                >
                  African Cuisines
                </Text>
                <Text fontSize={"md"}>
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetelis in mei. Meianpe icula euripidis,partem.
                </Text>
              </Box>
              <Box maxW={"md"} mt="5">
                <Text
                  textColor={"orange.600"}
                  fontSize="xl"
                  fontWeight={"semibold"}
                >
                  African Cuisines
                </Text>
                <Text fontSize={"md"}>
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetelis in mei. Meianpe icula euripidis,partem.
                </Text>
              </Box>
              <Box maxW={"md"} mt="5">
                <Text
                  textColor={"orange.600"}
                  fontSize="xl"
                  fontWeight={"semibold"}
                >
                  African Cuisines
                </Text>
                <Text fontSize={"md"}>
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetelis in mei. Meianpe icula euripidis,partem.
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
      <Flex direction={"column"} position="relative">
        <Flex direction={"column"} position="absolute" top={{base:"20%",lg:"40%"}} left="10%" zIndex={1000}>
          <Text fontSize={{sm:"md",lg:"xl"}} textShadow="0 1px 2px black">Enjoy Great Recipe</Text>
          <Text fontSize={{sm:"lg",lg:"4xl"}} fontWeight="semibold" textColor={"orange.500"} textShadow="0 2px 2px black">Simple And Delicious Food</Text>
        </Flex>
        <Box filter="auto" brightness="70%">
          <img
            src={section3}
            alt="welcome screen"
            style={{ minWidth: "100%" }}
          />
        </Box>
      </Flex>

      {/* <Flex
        px="6"
        py="8"
        direction={"column"}
        bg="orange.500"
        textColor={"white"}
        mx="24"
        my="6"
        rounded={"2xl"}
      >
        <Text fontSize={"2xl"} fontWeight="semibold" my="2" minW={"8xl"}>
          Welcome to Eatland
        </Text>
        <Text fontSize={"lg"}>Feel the taste of authentic foods</Text>
      </Flex>

      <HStack gap={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <Flex
              bg="white"
              direction={"column"}
              px="8"
              py="10"
              rounded={"full"}
              alignItems="center"
              shadow={"xl"}
              style={{
                boxShadow:
                  "0 1.8px 1.2px rgba(0, 0, 0, 0.014), 0 0.7px 1.3px rgba(0, 0, 0, 0.018), 0 5.5px 3px rgba(0, 0, 0, 0.06),0 8.3px 7.9px rgba(0, 0, 0, 0.072), 0 11.8px 3.4px rgba(0, 0, 0, 0.026),0 20px 10px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Avatar size="lg" src="https://bit.ly/broken-link" />
              <Text my={"3"} fontWeight="semibold" color={"orange.600"}>
                Item - {index}
              </Text>
            </Flex>
          );
        })}
      </HStack> */}

      {/* <Flex
        bg="white"
        p="6"
        my="6"
        rounded={"md"}
        shadow="sm"
        direction={"column"}
      >
        <Text fontSize={"3xl"} fontWeight="semibold" my="4">
          Recent Item:{" "}
        </Text>
        <HStack>
          {[1, 2, 3, 4].map((item) => {
            return (
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}{" "}
        </HStack>
      </Flex> */}
    </Flex>
  );
};
export default Dashboard;
