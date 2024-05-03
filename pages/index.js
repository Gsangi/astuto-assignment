import { Inter } from "next/font/google";
import { Box, Input, Text } from "@chakra-ui/react";
import SuggestedResponses from "@/src/components/SuggestedResponses";
import BotResponses from "@/src/components/BotResponses";
import { useGlobalContext } from "@/src/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { conversation } = useGlobalContext();

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        display: "grid",
        gridTemplateRows: "auto min-content",
      }}
    >
      {conversation.length > 0 && (
        <Box sx={{ alignSelf: "stretch", overflow: "auto" }}>
          <BotResponses />
          <Text mb={4}>You might also wanted to know.</Text>
          <SuggestedResponses />
        </Box>
      )}
      {conversation.length === 0 && (
        <Box sx={{ alignSelf: "end", marginBottom: "1rem" }}>
          <SuggestedResponses />
        </Box>
      )}
      <Input
        placeholder="Style typing your query here..."
        variant="outline"
        size="lg"
        sx={{
          borderRadius: "0.75rem",
          boxShadow: "0 0 8px 1px rgb(0 0 0/0.1)",
          marginBottom: "1.5rem",
          border: "1px solid rgb(0 0 0/0.2)",
        }}
        disabled={true}
      />
    </Box>
  );
}
