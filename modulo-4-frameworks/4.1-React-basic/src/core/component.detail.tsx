import { Box } from "@mui/material";
import React from "react";

export const DetailComponentGeneral = ({children}) => {
  return (
    <Box height="auto" width="auto" display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2}>{children}</Box>);
};
