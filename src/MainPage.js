import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
import MainPage2 from "./MainPage2";
import DiscoverComponent from "./DiscoverComponent";
import DashboardComponent from './DashboardComponent';

const MainPage = () => {
  const [showHome, setShowHome] = useState(false);
  const [showDiscover, setShowDiscover] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleButtonClick = (buttonName) => {
    setShowHome(buttonName === "Home");
    setShowDiscover(buttonName === "Discover");
    setShowDashboard(buttonName === "Dashboard");
  };

  return (
    <ChakraProvider>
    <header>
        <Flex align="center" justify="space-between" p={4} bg="primary.500" color="black">
        <Button colorScheme="secondary" mr={2} color="black">
        Linea
        </Button>
        <Button colorScheme="secondary" mr={2} color="black">
        Connect Wallet
        </Button>
        </Flex>
        </header>
      <Flex>
        <Box bg="blue.500" w="250px" p={4} color="white">
        <Box>
           <Flex direction="column" mt={55} h="100vh">
           <Button
               colorScheme="blue"
               size="lg"
               mb={2}
               onClick={() => handleButtonClick("Home")}
               _hover={{ bg: "blue.600" }}
             >
               Home
             </Button>
             <Button
               colorScheme="blue"
               size="lg"
               mb={2}
               onClick={() => handleButtonClick("Discover")}
               _hover={{ bg: "blue.600" }}
             >
               Discover
             </Button>
             <Button
               colorScheme="blue"
               size="lg"
               mb={2}
               onClick={() => handleButtonClick("Dashboard")}
               _hover={{ bg: "blue.600" }}
             >
               Dashboard
             </Button>
           </Flex>
         </Box>
         </Box>

        {/* {showDiscover || showDashboard ? (
          <Flex flex="1">
            <Box flex="1" p={4}>
              {showDiscover && <DiscoverComponent />}
              {showDashboard && <DashboardComponent />}
            </Box>
          </Flex>
        ) : (
          <MainPage2 />
        )} */}

        <Box flex="1" p={4}>
           {showHome && <MainPage2 />}
           {showDiscover && <DiscoverComponent />}
           {showDashboard && <DashboardComponent />}
      </Box>
      </Flex>
      
      
    </ChakraProvider>
  );
};

export default MainPage;
