import { format } from "date-fns";

export const changeTimeView = (timeStr) => {
  return format(new Date(timeStr), "yyyy-MM-dd hh:mm:ss");
};
