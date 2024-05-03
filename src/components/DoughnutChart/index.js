import { Box } from "@chakra-ui/react";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["others", "EC2", "RDS", "S3", "Opensearch", "Elasticache"],
        datasets: [
          {
            backgroundColor: [
              "rgb(255, 0, 0)",
              "rgb(255, 165, 0)",
              "rgb(255, 192, 203)",
              "rgb(128, 0, 128)",
              "rgb(0, 255, 255)",
              "rgb(255, 255, 0)",
            ],
            data: [10000, 30000, 20000, 20000, 10000, 10000],
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <Box sx={{ width: "300px", height: "300px" }}>
      <canvas ref={chartRef} />
    </Box>
  );
};

export default DoughnutChart;
