import React from "react";
import { TableRow } from "@mui/material";

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
        sx={{ cursor: "pointer" }}
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
