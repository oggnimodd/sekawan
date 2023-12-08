import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useDarkMode } from "hooks";
import { colors } from "tailwind";
import { FC } from "react";

interface GraphProps {
  data: number[];
}

const Graph: FC<GraphProps> = ({ data }) => {
  const { isDark } = useDarkMode();

  const options: ApexOptions = {
    colors: [colors["primary-500"]],
    chart: {
      id: "tickets-chart",
      type: "line",
      background: "transparent",
      toolbar: {
        show: false,
      },
      width: "100%",
      redrawOnWindowResize: true,
      redrawOnParentResize: true,
    },
    title: {
      text: "Tickets in 1 year",
      align: "left",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    theme: {
      mode: isDark ? "dark" : "light",
    },
  };

  const series = [
    {
      name: "Tickets",
      data,
    },
  ];

  return <Chart options={options} series={series} type="line" />;
};

export default Graph;
