
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from '../features/bookings/BookingTableOperations'

function Bookings() {

  return (
    <>
      <Row type="hotizantal">
        <Heading as="h1"> رزرو ها</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
