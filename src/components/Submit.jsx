import React from "react";
import Button from "@mui/material/Button";

export default function Submit({ buttonLabel, onSubmit }) {
  return (
    <Button variant="contained" color="success" onClick={onSubmit}>
      {buttonLabel}
    </Button>
  );
}
