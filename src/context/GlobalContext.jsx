import { createContext, useContext, useState, useMemo } from "react";

const GlobalContext = createContext();

const queriesArray = [
  [
    {
      label: "Top cloud costs by services in production account.",
      disabled: false,
      response: {
        box: "Query",
        summary: "Cras leo leo, volutpat eu tortor id, lobortis consequat orci",
        query: "",
        content:
          "1. SELECT\n2. service\n3. SUM(cost) AS total_cost\n4. FROM\n5. cloud_costs\n6. WHERE    \n7. account_type = production (#24542) \n8. GROUP BY\n9. service\n10. ORDER BY\n11. total_cost DESC",
      },
    },
    {
      label: "Which application's cost are increasing the fastest?",
      disabled: true,
    },
    {
      label:
        "How much money are we losing by not moving to graviton instances?",
      disabled: true,
    },
    {
      label: "Which are the larget s3 buckets by size?",
      disabled: true,
    },
  ],
  [
    {
      label: "Which services costs are rising the fastest?",
      disabled: true,
    },
    {
      label: "How can I reduce my S3 costs?",
      disabled: true,
    },
    {
      label: "How can I reduce my RDS costs?",
      disabled: true,
    },
    {
      label: "Can you draw the chart?",
      disabled: false,
      response: {
        type: "chart",
        box: "Pie Chart",
        summary:
          "Your production account (#24542) has accumulated costs of $100,000 over the past month, here is a spread of cloud costs by services;",
        content:
          "1. SELECT2. service3. SUM(cost) AS total_cost4. FROM5. cloud_costs6. WHERE",
      },
    },
  ],
  [
    {
      label: "Which services costs are rising the fastest.",
      disabled: true,
    },
    {
      label: "How can I reduce my EC2 costs?",
      disabled: false,
      response: {
        box: "Top 2 saving areas",
        summary:
          "Cras leo leo, volutpat eu tortor id, lobortis consequat orci.",
        content:
          "Cras leo leo, volutpat eu tortor id, lobortis consequat orci. Vestibulum condimentum ornare urna sed euismod. Mauris libero ex, aliquet ut lacus a, interdum tincidunt felis. Curabitur eros justo, rutrum sit amet massa nec, egestas tristique quam. Curabitur volutpat eros ac lorem vehicula blandit. Sed molestie arcu massa. Phasellus non risus vel nulla semper ornare. ",
      },
    },
    {
      label:
        "How much money are we losing by not moving to graviton instances?",
      disabled: true,
    },
    {
      label: "Which are the larget s3 buckets by size? test test",
      disabled: true,
    },
  ],
  [
    {
      label: "Which services costs are rising the fastest.",
      disabled: true,
    },
    {
      label: "How can I reduce my EC2 costs?",
      disabled: true,
    },
    {
      label:
        "How much money are we losing by not moving to graviton instances?",
      disabled: true,
    },
    {
      label: "Which are the larget s3 buckets by size?",
      disabled: false,
      response: {
        box: "Pie Chart",
        summary:
          "Your production account (#24542) has accumulated costs of $100,000 over the past month, here is a spread of cloud costs by services;",
        content:
          "1. SELECT2. service3. SUM(cost) AS total_cost4. FROM5. cloud_costs6. WHERE",
      },
    },
  ],
];

function GlobalProvider({ children }) {
  const [conversation, setConversation] = useState([]);

  const suggestedQuery = useMemo(() => {
    if (conversation.length > queriesArray.length) {
      return queriesArray[0];
    }
    return queriesArray[conversation.length];
  }, [conversation]);

  const postQuery = (index) => {
    if (index >= suggestedQuery.length) return;
    const queryAndResponse = suggestedQuery[index];
    setConversation((prev) => [...prev, queryAndResponse]);
  };

  return (
    <GlobalContext.Provider value={{ conversation, postQuery, suggestedQuery }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalProvider;
