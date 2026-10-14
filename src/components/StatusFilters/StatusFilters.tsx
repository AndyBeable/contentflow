import type { StatusFilter, FilterOption } from "../../types/articleFilters";

type StatusFiltersProps = {
  selectedStatus: StatusFilter;
  onStatusChange: (status: StatusFilter) => void;
};

const filterOptions: FilterOption[] = [
  {
    value: "all",
    label: "All",
  },
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
];

export default function StatusFilters({
  selectedStatus,
  onStatusChange,
}: StatusFiltersProps) {
  return (
    <div className="inline-flex flex-wrap gap-1 rounded-lg bg-app p-1">
      {filterOptions.map((filterOption) => {
        const isActive = selectedStatus === filterOption.value;

        return (
          <button
            key={filterOption.value}
            type="button"
            onClick={() => onStatusChange(filterOption.value)}
            aria-pressed={isActive}
            className={`cursor-pointer rounded-md px-3 py-2 text-sm transition-colors ${
              isActive
                ? "bg-surface font-medium text-heading shadow-sm"
                : "text-muted hover:bg-surface/70 hover:text-heading"
            }`}
          >
            {filterOption.label}
          </button>
        );
      })}
    </div>
  );
}
