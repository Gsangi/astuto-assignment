import { useGlobalContext } from "@/src/context/GlobalContext";
import { Box } from "@chakra-ui/react";

const SuggestedResponses = () => {
  const { suggestedQuery, postQuery } = useGlobalContext();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        placeItems: "stretch",
        gap: "1rem",
      }}
    >
      {suggestedQuery ? (
        suggestedQuery.map((item, index) => (
          <Box
            as="label"
            key={item.label}
            sx={{
              display: "inline-flex",
              padding: "1rem",
              borderRadius: "0.75rem",
              border: "1px solid rgb(0 0 0/0.2)",
              cursor: "pointer",
              userSelect: "none",

              "&:has(input:disabled)": {
                opacity: 0.3,
                cursor: "not-allowed",
              },
            }}
            onClick={() => postQuery(index)}
          >
            <span>{item.label}</span>
            <input
              disabled={item.disabled}
              hidden
              type="button"
              value={item?.value}
            />
          </Box>
        ))
      ) : (
        <></>
      )}
    </Box>
  );
};

export default SuggestedResponses;
