import React from "react";
import { TableCell, TableRow } from "@mui/material";

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
        onClick={() => setIsExpanded(!isExpanded)}
        {...otherProps}
      >
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow
          hover={true}
          sx={{
            backgroundColor: "#fafafa",
          }}
        >
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};
