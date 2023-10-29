import Filter from '../../ui/Filter';

function DashboardFilter() {
  return (
    <Filter
      filterField='last'
      options={[
        { value: '7', label: '۷ روز پیش' },
        { value: '30', label: '۳۰ روز پیش' },
        { value: '90', label: '۹۰ روز پیش' },
      ]}
    />
  );
}

export default DashboardFilter;
