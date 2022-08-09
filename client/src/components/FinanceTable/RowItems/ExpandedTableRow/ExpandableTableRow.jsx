import React from "react";
import { TableRow } from "@mui/material";
import styles from "./tablerow.module.scss";

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
        className={styles.row}
        onClick={() => setIsExpanded(!isExpanded)}
        {...otherProps}
      >
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow className={styles.expandedRow}>{expandComponent}</TableRow>
      )}
    </>
  );
};
