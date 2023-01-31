import React, { useState } from "react";
import Header from "../../header/Header";
import {
  Card,
  Flex,
  Grid,
  GridItem,
  Text,
  Avatar,
  HStack,
  Link,
  Portal,
  Code,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import Dragger from "antd/es/upload/Dragger";
import { UploadProps } from "antd";
import { FaInbox } from "react-icons/fa";

const Inventory = () => {
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        console.log(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <React.Fragment>
      <Header />
      <Flex mx="10" my="6" direction={"column"}>
        <Flex justifyContent={"space-between"} >
          <Text fontSize={"xl"} fontWeight="bold">
            Add Inventory
          </Text>
          <Button colorScheme={"orange"}> Add Product</Button>
        </Flex>

        <Grid
          mt="4"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(7, 1fr)"
          gap={4}
        >
          <GridItem colSpan={4} rowSpan={2}>
            <Flex
              bg="white"
              p="6"
              borderRadius={"md"}
              w="100%"
              direction={"column"}
            >
              <Code
                bg="gray.50"
                children="Genaral Information"
                p="2"
                width={"99%"}
                mx="1"
                my="4"
              />
              <form>
                <FormControl mt="4">
                  <FormLabel fontSize={"xs"}>Product Name</FormLabel>
                  <Input type="Enter product name" />
                </FormControl>
                <FormControl mt="4">
                  <FormLabel fontSize={"xs"}>Reference</FormLabel>
                  <Input type="Enter refernce" />
                </FormControl>
                <FormControl mt="4">
                  <FormLabel fontSize={"xs"}>Description</FormLabel>
                  <Textarea placeholder="Here is a sample placeholder" />
                </FormControl>
                <FormControl mt="4">
                  <FormLabel fontSize={"xs"}>Country</FormLabel>
                  <Select placeholder="Select country">
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                  </Select>
                </FormControl>
                <FormControl mt="4">
                  <FormLabel fontSize={"xs"}>Amount</FormLabel>
                  <Input type="Enter Amount" />
                </FormControl>
              </form>
            </Flex>
          </GridItem>
          <GridItem colSpan={3} rowSpan={1} bg="white" borderRadius={"md"}>
            <Flex p="4" direction={"column"} alignItems="center">
              <Code
                bg="gray.50"
                children="PRODUCT IMAGES"
                p="2"
                width={"99%"}
                mx="4"
                my="4"
              />
              <Dragger {...props} style={{ width: "100%" }}>
                <Flex alignItems={"center"} direction="column" py="4" px="8">
                  <p className="ant-upload-drag-icon">
                    <FaInbox width={40} height={40} />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                  </p>
                </Flex>
              </Dragger>
            </Flex>
          </GridItem>
          <GridItem colSpan={3} rowSpan={1} bg="white" borderRadius={"md"}>
            <Flex p="4" direction={"column"} alignItems="center">
              <Code
                bg="gray.50"
                children="PRODUCT META INFO"
                p="2"
                width={"99%"}
                mx="4"
                my="4"
              />

              <Flex direction="column" p="4" width={"100%"}>
                <FormControl mt="4">
                  <FormLabel fontSize={"xs"}>Product Name</FormLabel>
                  <Input type="Enter product name" />
                </FormControl>
                <FormControl mt="4">
                  <FormLabel fontSize={"xs"}>Reference</FormLabel>
                  <Input type="Enter refernce" />
                </FormControl>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </React.Fragment>
  );
};

export default Inventory;
