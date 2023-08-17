import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  ChakraProvider,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Image,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { RiSearchLine, RiNotification2Line } from 'react-icons/ri';
import image from './GOLD-6487-CareerGuide-Batch04-Images-GraphCharts-04-Histogram.png'

const MainPage2 = () => {
  
    return (
      <ChakraProvider>
        <Box flex="1" p={4}>
          <Box borderWidth="1px" p={4} borderRadius="md" marginBottom={4}>
            <Flex>
              <Tabs isFitted variant="unstyled" pointerEvents="none">
                <TabList textAlign="left">
                  <Tab>Announcement</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Text fontSize="sm">Live liquidity auction going on for a week</Text>
                    <Text fontSize="sm">Supply liquidity and earn +4% APR</Text>
                    <Text fontSize="sm">Time left: --/--/--</Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <Box p={4}>
                <Image src={image} alt="image" width="700px" height="150px"/>
              </Box>
            </Flex>
          </Box>
          
          <Flex align="center" mt={5}>
            <Input placeholder="Search any token" />
            <IconButton ml={4} icon={<RiSearchLine />} />
            <IconButton ml={4} icon={<RiNotification2Line />} />
          </Flex>
          
          <Tabs variant="soft-rounded" colorScheme="teal" width="250px" mt={10}>
            <TabList width="250px">
              <Tab width="200px">Live Auctions</Tab>
              <Tab width="200px">My Liquidity</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box p={5} width="1000px" borderWidth="1px" borderRadius="md">
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
                   <Text>Time Left</Text>
                   <Text>--/--/--</Text>
                 </Box>
                 <Box flex="1" p={2}>
                   <Text>Amount to supply</Text>
                   <Text>--</Text>
                 </Box>
                 <Button>Supply liquidity</Button>                  
                </Flex>
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
                 <Box flex="1" p={2}>
                   <Text>Time Left</Text>
                   <Text>--/--/--</Text>
                 </Box>
                 <Box flex="1" p={2}>
                   <Text>Amount to supply</Text>
                   <Text>--</Text>
                 </Box>
                 <Button>Supply liquidity</Button>
                 </Flex>
                 </Box>
                 <Box p={5} width="1000px" borderWidth="1px" borderRadius="md" mt={5} >
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
                 <Box flex="1" p={2}>
                   <Text>Time Left</Text>
                   <Text>--/--/--</Text>
                 </Box>
                 <Box flex="1" p={2}>
                   <Text>Amount to supply</Text>
                   <Text>--</Text>
                 </Box>
                 <Button>Supply liquidity</Button>
                 </Flex>
                 </Box>
              </TabPanel>
              <TabPanel>
                <Box p={8}>
                  <Box borderWidth="1px" p={4} borderRadius="md" boxShadow="lg" width="700px">
                    <Text fontSize="xl">You have no liquidity now.</Text>
                    <Text fontSize="sm">You can find suitable Vaults on the tab Vaults.</Text>
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        </ChakraProvider>
  );
};

export default MainPage2;