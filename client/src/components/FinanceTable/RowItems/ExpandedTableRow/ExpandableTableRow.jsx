import React from "react";
import { TableRow } from "@mui/material";
import { row, expandedRow } from "./tablerow.module.scss";

export const ExpandableTableRow = ({
  children,
  expandComponent,
  ...otherProps
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow
        hover={true}
        className={row}
        onClick={() => setIsExpanded(!isExpanded)}
        {...otherProps}
      >
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow className={expandedRow}>{expandComponent}</TableRow>
      )}
    </>
  );
};
