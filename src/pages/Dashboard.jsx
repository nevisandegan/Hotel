import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (<>
    <Row type="hotizantal">
      <Heading as="h1">پنل</Heading>
    <DashboardFilter/> 
    </Row>
    <DashboardLayout />
  </>

  );
}

export default Dashboard;
