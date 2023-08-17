import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  ChakraProvider,
  Image,
} from "@chakra-ui/react";

const Vault = () => {

  return (
    <ChakraProvider>
        <Box p={5} width="1000px" borderWidth="1px" borderRadius="md"  mt={5}>
        <Flex>
        <Box flex="1" p={2}>
        <Image src="profile-image-url" alt="Profile 1" />
        <Image src="profile-image-url" alt="Profile 1" />
        </Box>
        <Box flex="1" p={2}>
        <Text>USDC</Text>
        </Box>
        <Box flex="1" p={2}>
        <Text>Fee Tier</Text>
        <Text>0.3%</Text>
        </Box>
        <Box flex="1" p={2}>
        <Text>TVL</Text>
        <Text>$58.25K</Text>
        </Box>
        <Box flex="1" p={2}>
        <Text>Fee APR</Text>
        <Text>9.36%</Text>
        </Box>
        <Box flex="1" p={2}>
        <Text>LQX Token</Text>
        <Text>6874</Text>
        </Box>
        </Flex>

        <Box border="1px solid" p={2} width="200px">
        <Flex>
        <Image src="image" alt="1" />
        <Text>0 USDC</Text>
        <Text ml={10}>$0.0</Text>
        <Text mt={10}>$0.0</Text>
        </Flex>
        <Button>Remove Liquidity</Button>
        </Box>
        <Text mt={10} color="grey">No Performance Data Available</Text>
        <Text mt={5}>Vault Address:</Text>
        <Text>My Position:</Text>
    </Box>
    </ChakraProvider>
  )
};

export default Vault;
