import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from '../../ui/Heading'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { eachDayOfInterval, isSameDay, subDays } from "date-fns";
import { formatDay } from "../../utils/helpers";
const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;


const isDarkMode = true;
const colors = isDarkMode
  ? {
    totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
    extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
    text: "#e5e7eb",
    background: "#18212f",
  }
  : {
    totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
    extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
    text: "#374151",
    background: "#fff",
  };



const SalesChart = ({ bookings, numDays }) => {

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date()
  })

  const data = allDates.map(date => {
    return {
      label: formatDay(date),
      totalSales: bookings.filter(booking => isSameDay(date, new Date(booking.created_at))).reduce((acc, cur) => acc + cur.totalPrice, 0)
      , extraSales: bookings.filter(booking => isSameDay(date, new Date(booking.created_at))).reduce((acc, cur) => acc + cur.extrasPrice, 0)

    }
  })


  return (
    <StyledSalesChart>
      <Heading as="h2">نمودار فروش از  {formatDay(allDates.at(0))}&mdash;{formatDay(allDates.at(-1))}</Heading>
      <ResponsiveContainer height={300} width='100%'>
        <AreaChart data={data} >
          <XAxis dataKey='label' tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
          <YAxis tickMargin={40} tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
          <CartesianGrid strokeDasharray='4' />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area strokeWidth={2} unit="هزارتومان" name="مجموع فروش" dataKey='totalSales' type='monotone' stroke={colors.totalSales.stroke} fill={colors.totalSales.fill} />
          <Area strokeWidth={2} unit="هزارتومان" name="فروش اضافه" dataKey='extraSales' type='monotone' stroke={colors.extrasSales.stroke} fill={colors.extrasSales.fill} />

        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
