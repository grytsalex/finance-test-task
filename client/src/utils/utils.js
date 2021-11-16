import { format } from "date-fns";

export const changeTimeView = (timeStr) => {
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(timeStr)) {
    return "Invalid date format";
  }
  return format(new Date(timeStr), "yyyy-MM-dd hh:mm:ss");
};
