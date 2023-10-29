
import Spinner from '../../ui/Spinner'
import CabinRow from "./CabinRow";

import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus"
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';


export default function CabinTable() {

  const { isLoading, cabins } = useCabins()
  const [searchParams] = useSearchParams();

  
  if (isLoading) return <Spinner />
  if (!cabins.length) return <Empty resourceName="کابین" />


  
  const filterValue = searchParams.get('discount') || "all"
  let filteredCabins;

  if (filterValue === "all") filteredCabins = cabins
  if (filterValue === "no-discount") filteredCabins = cabins.filter(cabin => cabin.discount === 0)
  if (filterValue === "with-discount") filteredCabins = cabins.filter(cabin => cabin.discount > 0)



  const sortBy = searchParams.get('sortBy') || "name-desc"
  const [field, direction] = sortBy.split("-");
  const modified = direction === 'asc' ? -1 : 1
  const sortedCabins = filteredCabins.sort((a, b) => (a[field] - b[field]) * modified)



  return <Menus>
    <Table columns='1fr 1fr 1fr 1fr 1fr 0.6fr' >
      <Table.Header>
        <div></div>
        <div>کابین</div>
        <div>ظرفیت</div>
        <div>قیمت</div>
        <div>تخفیف</div>
        <div></div>
      </Table.Header>
      <Table.Body data={sortedCabins} render={cabin => <CabinRow cabin={cabin} key={cabin.id} />} />
    </Table>
  </Menus>
}
