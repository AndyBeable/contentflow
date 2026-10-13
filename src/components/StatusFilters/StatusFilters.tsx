import type { StatusFilter, FilterOption } from "../../types/articleFilters";

type StatusFiltersProps = {
  selectedStatus: StatusFilter;
  onStatusChange: (status: StatusFilter) => void;
};

const filterOptions: FilterOption[] = [
  {
    value: "published",
    label: "Published",
  },
  {
    value: "draft",
    label: "Draft",
  },
  {
    value: "archived",
    label: "Archived",
  },
  {
    value: "all",
    label: "All",
  },
];

export default function StatusFilters({
  selectedStatus,
  onStatusChange,
}: StatusFiltersProps) {
  return (
    <div className="flex gap-4">
      {filterOptions.map((filterOption) => (
        <button
          onClick={() => onStatusChange(filterOption.value)}
          key={filterOption.value}
          aria-pressed={selectedStatus === filterOption.value}
        >
          {filterOption.label}
        </button>
      ))}
    </div>
  );
}
