import styled from "styled-components";
import Heading from "../../ui/Heading";
import { PieChart, Legend, ResponsiveContainer, Pie, Cell, Tooltip } from "recharts";
import { useDarkMode } from '../../context/DarkModeContext'

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const startDataLight = [
  {
    duration: "۱ شب",
    value: 0,
    color: "#ef4444",
  },
  {
    duration: "۲ شب",
    value: 0,
    color: "#f97316",
  },
  {
    duration: "۳ شب",
    value: 0,
    color: "#eab308",
  },
  {
    duration: "۴-۵ شب",
    value:0,
    color: "#84cc16",
  },
  {
    duration: "۶-۷ شب",
    value: 0,
    color: "#22c55e",
  },
  {
    duration: "۸-۱۴ شب",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "۱۵-۲۱ شب",
    value: 0,
    color: "#3b82f6",
  },
  {
    duration: "+۲۱",
    value: 0,
    color: "#a855f7",
  },
];

const startDataDark = [
  {
    duration: "۱ شب",
    value: 0,
    color: "#b91c1c",
  },
  {
    duration: "۲ شب",
    value: 0,
    color: "#c2410c",
  },
  {
    duration: "۳ شب",
    value: 0,
    color: "#a16207",
  },
  {
    duration: "۴-۵ شب",
    value: 0,
    color: "#4d7c0f",
  },
  {
    duration: "۶-۷ شب",
    value: 0,
    color: "#15803d",
  },
  {
    duration: "۸-۱۴ شب",
    value: 0,
    color: "#0f766e",
  },
  {
    duration: "۱۵-۲۱ شب",
    value: 0,
    color: "#1d4ed8",
  },
  {
    duration: "+۲۱",
    value: 0,
    color: "#7e22ce",
  },
];

function prepareData(startData, stays) {
  

  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, "۱ شب");
      if (num === 2) return incArrayValue(arr, "۲ شب");
      if (num === 3) return incArrayValue(arr, "۳ شب");
      if ([4, 5].includes(num)) return incArrayValue(arr, "۴-۵ شب");
      if ([6, 7].includes(num)) return incArrayValue(arr, "۶-۷ شب");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "۸-۱۴ شب");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "۱۵-۲۱ شب");
      if (num >= 21) return incArrayValue(arr, "+۲۱");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}



function DurationChart({confirmedStays}) {

  const { isDarkMode } = useDarkMode()

  const startData = isDarkMode ? startDataDark : startDataLight;
  const data=prepareData(startData,confirmedStays)

  return <ChartBox>
    <Heading as='h2'>مدت اقامت </Heading>
    <ResponsiveContainer width='100%' height={240}>
      <PieChart>
        <Pie data={data} nameKey='duration'
          dataKey='value' innerRadius={85}
          outerRadius={110} cx="40%" cy="50%" paddingAngle={3}>
          {data.map(entry => <Cell fill={entry.color} key={entry.duration} stroke={entry.color} />)}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="middle"
          align='right' width="30%" layout="vertical"
          iconType="circle" 
          iconSize={15}
        />
      </PieChart>
    </ResponsiveContainer>
  </ChartBox>
}

export default DurationChart;
