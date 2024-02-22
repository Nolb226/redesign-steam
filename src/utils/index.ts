const formatDate = (value: Date | string) => {
  let date = value;
  if (typeof date === "string") date = new Date(value);

  const format = new Intl.DateTimeFormat("vi-VN", {
    month: "2-digit",
    year: "2-digit",
    day: "2-digit",
  });

  return format.format(date);
};

export const util = {
  formatDate,
};
