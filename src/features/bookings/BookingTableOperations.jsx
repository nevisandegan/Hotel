import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "همه" },
          { value: "checked-out", label: "خروج" },
          { value: "checked-in", label: "پذیرش" },
          { value: "unconfirmed", label: "تایید نشده" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "مرتب سازی بر اساس تاریخ (اولین تاریخ)" },
          { value: "startDate-asc", label: "مرتب سازی بر اساس تاریخ (آخرین تاریخ)" },
          {
            value: "totalPrice-desc",
            label: "مرتب سازی بر اساس قیمت ( زیاد)",
          },
          { value: "totalPrice-asc", label: "مرتب سازی بر اساس قیمت ( کم)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
