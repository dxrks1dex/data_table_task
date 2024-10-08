interface CheckOperationColorProps {
  operation: "delete" | "edit";
}

export const checkOperationColor = ({
  operation,
}: CheckOperationColorProps) => {
  if (operation === "delete") {
    return "#F63F3F";
  }

  if (operation === "edit") {
    return "#14AE5C";
  }
};
