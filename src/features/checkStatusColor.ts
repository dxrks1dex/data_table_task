export const checkStatusColor = (status: string) => {
  if (status === "Free") {
    return "#0064FF";
  }
  if (status === "Busy") {
    return "#F63F3F";
  }
  if (status === "Workin") {
    return "#404D61";
  }
  if (status === "On Vacation") {
    return "#F9A348";
  }
};
