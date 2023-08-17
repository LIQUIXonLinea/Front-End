import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  ChakraProvider,
  Tabs,
  Tab,
  Image,
  Input,
  IconButton,
  Divider,
  Link
} from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri';
import Vault from './Vault';
import { ChevronDownIcon } from '@chakra-ui/icons';

const DashboardComponent = () => {

  return (
    <ChakraProvider>
    <Box borderWidth="1px" p={2} borderRadius="md" marginBottom={4} height="150px" ml={10} mr={10} mt={10}>
    <Flex flexDirection="column" p={8}>
      <Text fontSize="xl" fontWeight="bold">Protocol Stats</Text>
      <Flex align="center">
        <Box >
        <Text fontSize="sm">Total Value Locked</Text>
        <Text fontSize="sm">$92.10M</Text>
        </Box>
        <Divider orientation="vertical" height="60px" mx={4} />
        <Box>
        <Text fontSize="sm">Total Fees Accrued</Text>
        <Text fontSize="sm">$13.09M</Text>
        </Box>
        </Flex>
        </Flex>
        </Box>
        
        <Flex ml={10} mr={10}>
        <Box p={5} borderWidth="1px" borderRadius="md">
        <Text>All Vaults</Text>
        </Box>
        <Box p={5} borderRadius="md">
        <Text>Stable</Text>
        </Box>
        <Box p={5} borderRadius="md">
        <Text>Volatile</Text>
        </Box>
        </Flex>
          
          <Flex align="center" mt={5} ml={10} mr={10}>
          <Input placeholder="Search any token" />
          <IconButton ml={4} icon={<RiSearchLine />} />
          </Flex>
          
          <Tabs isFitted variant="soft-rounded" colorScheme="teal" width="60px" mt={5} ml={10} mr={10}>
              <Tab width="150px">LIQUIX VAULTS</Tab>
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
                </Flex>
                <Link to="/vault" >
                <ChevronDownIcon/>
                </Link>
                </Box>
                <Box p={5} width="1000px" borderWidth="1px" borderRadius="md" mt={5} >
               <Flex>
                <Box flex="1" p={2}>
                 <Image src="profile-image-url" alt="Profile 1" />
                 <Image src="profile-image-url" alt="Profile 1" />
                 </Box>
                 <Box flex="1" p={2}>
                   <Text>DAI</Text>
                 </Box>
                 <Box flex="1" p={2}>
                   <Text>Fee Tier</Text>
                   <Text>0.05%</Text>
                 </Box>
                 <Box flex="1" p={2}>
                   <Text>TVL</Text>
                   <Text>$20.97K</Text>
                 </Box>
                 <Box flex="1" p={2}>
                   <Text>Fee APR</Text>
                   <Text>4.87%</Text>
                 </Box>
                 </Flex>
                 <Link to="/vault" >
                <ChevronDownIcon/>
                </Link>
                 </Box>
                 <Box p={5} width="1000px" borderWidth="1px" borderRadius="md" mt={5} mb={10}>
               <Flex>
                 <Box flex="1" p={2}>
                 <Image src="profile" alt="1" />
                 <Image src="profile" alt="1" />
                 </Box>
                 <Box flex="1" p={2}>
                   <Text>USDT</Text>
                 </Box>
                 <Box flex="1" p={2}>
                   <Text>Fee Tier</Text>
                   <Text>0.1%</Text>
                 </Box>
                 <Box flex="1" p={2}>
                   <Text>TVL</Text>
                   <Text>$7.56K</Text>
                 </Box>
                 <Box flex="1" p={2}>
                   <Text>Fee APR</Text>
                   <Text>8.55%</Text>
                 </Box>
                 </Flex>
                 <Link to="/vault" >
                <ChevronDownIcon/>
                </Link>
                 </Box>
              </Tabs>
            </ChakraProvider>
  );
};

export default DashboardComponent;
