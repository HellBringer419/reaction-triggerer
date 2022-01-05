import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import UserReactionItem from "./UserReactionItem";

const SummaryTabs = () => {
  return (
    <Tabs h="100%" w="100%" variant="unstyled">
      <TabList
        borderBottomStyle="solid"
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
        minW="fit-content"
        color="#161616"
      >
        <Tab
          marginX="1px"
          borderBottomStyle="solid"
          borderBottomWidth="1px"
          borderBottomColor="#E0E0E0"
          fontSize="14px"
          _selected={{ fontWeight: "600", borderBottomColor: "#0F62FE" }}
        >
          All
        </Tab>
        <Tab
          marginX="1px"
          borderBottomStyle="solid"
          borderBottomWidth="1px"
          borderBottomColor="#E0E0E0"
          fontSize="14px"
          _selected={{ fontWeight: "600", borderBottomColor: "#0F62FE" }}
        >
          👍️ · 5
        </Tab>
        <Tab
          marginX="1px"
          borderBottomStyle="solid"
          borderBottomWidth="1px"
          borderBottomColor="#E0E0E0"
          fontSize="14px"
          _selected={{ fontWeight: "600", borderBottomColor: "#0F62FE" }}
        >
          ❤️ · 15
        </Tab>
        <Tab
          marginX="1px"
          borderBottomStyle="solid"
          borderBottomWidth="1px"
          borderBottomColor="#E0E0E0"
          fontSize="14px"
          _selected={{ fontWeight: "600", borderBottomColor: "blue.400" }}
        >
          👏 · 10
        </Tab>
      </TabList>
      <TabPanels h="100%" color="#393939">
        <TabPanel h="100%">
          <UserReactionItem />
          <UserReactionItem />
        </TabPanel>
        <TabPanel h="100%">
          <UserReactionItem />
        </TabPanel>
        <TabPanel h="100%">cool</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SummaryTabs;
