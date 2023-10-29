import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2"

import Stat from './Stat.jsx'
import { convertEnNumberToPersian } from "../../utils/helpers";
const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {

    const numBookings = bookings.length;

    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)

    const checkins = confirmedStays.length

    const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount)

    return (
        <>
            <Stat title='رزرو' color='blue' icon={<HiOutlineBriefcase />} value={convertEnNumberToPersian(numBookings)} />
            <Stat title='فروش' color='green' icon={<HiOutlineBanknotes />} value={<Sale sales={sales} />} />
            <Stat title='پذیرش ها' color='indigo' icon={<HiOutlineCalendarDays />} value={convertEnNumberToPersian(checkins)} />
            <Stat title='ضریب فروش' color='yellow' icon={<HiOutlineChartBar />} value={convertEnNumberToPersian(Math.round(occupation * 100)) + "%"} />

        </>
    );
}

export default Stats;





function Sale({ sales }) {
    return (
        <div>
            {convertEnNumberToPersian(sales)}<span style={{ fontSize: '1.4rem' }}>هزار تومان</span>
        </div>
    )
}