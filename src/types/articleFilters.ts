import type { Status } from "./article";

export type StatusFilter = Status | "all";

export type FilterOption = {
  value: StatusFilter;
  label: string;
};
