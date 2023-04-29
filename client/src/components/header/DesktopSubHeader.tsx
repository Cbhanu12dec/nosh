import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Link as Clink,
  Stack,
  useColorModeValue,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { NavItem } from "../common/utils";
import { Link } from "react-router-dom";
const DesktopSubHeader = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link to={href as string}>
      <Clink
        // href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("orange.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "orange.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"} _groupHover={{ color: "gray.700" }}>
              {subLabel}
            </Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"orange.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Clink>
    </Link>
  );
};

export default DesktopSubHeader;
