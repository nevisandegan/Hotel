import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations"
export default function CabinTableOperations() {
    return <TableOperations>
        <Filter filterField='discount' options={[
            { value: "all", label: "همه" },
            { value: "no-discount", label: "بدون تخفیف" },
            { value: "with-discount", label: "با تخفیف" }
        ]} />
        <SortBy options={[
            {
                value: 'name-asc', label: 'بر اساس نام (صعودی)'
            },
            {
                value: 'name-desc', label: 'بر اساس نام (نزولی)'
            },
            {
                value: 'regularPrice-desc', label: 'کمترین قیمت'
            },
            {
                value: 'regularPrice-asc', label: 'بیشترین قیمت'
            },
            {
                value: 'maxCapacity-desc', label: 'کمترین ظرفیت'
            },
            {
                value: 'maxCapacity-asc', label: 'بیشترین ظرفیت'
            }
        ]} />
    </TableOperations>;
}
