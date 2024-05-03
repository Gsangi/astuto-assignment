import { useGlobalContext } from "@/src/context/GlobalContext";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  Avatar,
  Text,
} from "@chakra-ui/react";
import DoughnutChart from "../DoughnutChart";

const BotResponses = () => {
  const { conversation } = useGlobalContext();
  return (
    <div>
      {conversation.map((item, index) => {
        return (
          <>
            <Box
              display="flex"
              alignItems="center"
              gap="18px"
              borderRadius="8px"
              py="16px"
              px="8px"
              border="1px solid transparent"
              backgroundColor="rgb(0 0 0/0.15)"
              marginY="16px"
            >
              <Avatar size="sm" src="" />
              <Text>{item.label}</Text>
            </Box>
            <Accordion
              allowToggle
              mb={8}
              borderRadius="12px"
              border="1px solid rgb(0 0 0/0.2)"
            >
              <h2 style={{ padding: "12px" }}>{item.response.summary}</h2>
              <AccordionItem sx={{ borderWidth: "0px !important" }}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {item.response.box}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {item.response.type === "chart" ? (
                    <DoughnutChart />
                  ) : (
                    item.response.content
                  )}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </>
        );
      })}
    </div>
  );
};

export default BotResponses;
