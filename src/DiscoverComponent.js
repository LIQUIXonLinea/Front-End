import React from 'react';
import {
  Box,
  Flex,
  Input,
  Text,
  IconButton,
  Button,
  Image,
  Heading,
  ChakraProvider,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Divider,
} from '@chakra-ui/react';
import { RiSearchLine, RiNotification2Line } from 'react-icons/ri';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const DiscoverComponent = () => {
  return (
    <ChakraProvider>
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
        
        <Heading fontSize="2xl" fontWeight="bold" mt={4}>Browse Exchanges</Heading>

        <Flex mt={4}>
          <Box flex="1" borderWidth="1px" p={4} borderRadius="md" boxShadow="md" mr={2}>
          <Flex align="center">
              <Tabs isFitted variant="unstyled" pointerEvents="none">
                  <Tab>KyberSwap</Tab>
              </Tabs>
          <Image src="image1" alt="Logo" boxSize="100px" border="1px solid black" />
          </Flex>
            <Text fontSize="md" mt={5}>Decentralized Exchange</Text>
            <Flex align="center"  mt={5}>
            <Box >
            <Text fontSize="sm">TVL</Text>
            <Text fontSize="sm">$38.47M</Text>
            </Box >
            <Divider orientation="vertical" height="60px" mx={4} />
            <Box >
            <Text fontSize="sm">Total Pairs</Text>
            <Text fontSize="sm">143</Text>
            </Box >
            </Flex>
            <Button colorScheme="teal" width="350px"  mt={5}>See Vaults</Button>
          </Box>
          
          <Box flex="1" borderWidth="1px" p={4} borderRadius="md" boxShadow="md" mr={2}>
          <Flex align="center">
            <Tabs isFitted variant="unstyled" pointerEvents="none">
                <Tab>AirSwap</Tab>
                </Tabs>
              <Image src="image1" alt="Logo" boxSize="100px" border="1px solid black" />
              </Flex>              
            <Text fontSize="sm"  mt={5}>Decentralized Exchange</Text>
            <Flex align="center"  mt={5}>
            <Box >
            <Text fontSize="sm">TVL</Text>
            <Text fontSize="sm">$33.92M</Text>
            </Box >
            <Divider orientation="vertical" height="60px" mx={4} />
            <Box >
            <Text fontSize="sm">Total Pairs</Text>
            <Text fontSize="sm">116</Text>
            </Box >
            </Flex>
            <Button colorScheme="teal" width="350px"  mt={5}>See Vaults</Button>
          </Box>
                    
          <Box flex="1" borderWidth="1px" p={4} borderRadius="md" boxShadow="md">
          <Flex align="center">
            <Tabs isFitted variant="unstyled" pointerEvents="none">
                <Tab>Izumi</Tab>
            </Tabs>
            < Image src="image1" alt="Logo" boxSize="100px" border="1px solid black" />
            </Flex>
            <Text fontSize="sm"  mt={5}>Decentralized Exchange</Text>
            <Flex align="center"  mt={5}>
            <Box >
            <Text fontSize="sm">TVL</Text>
            <Text fontSize="sm">$14.07M</Text>
            </Box>
            <Divider orientation="vertical" height="60px" mx={4} />
            <Box >
            <Text fontSize="sm">Total Pairs</Text>
            <Text fontSize="sm">115</Text>
            </Box >
            </Flex>
            <Button colorScheme="teal" width="350px"  mt={5}>See Vaults</Button>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
};

export default DiscoverComponent;
