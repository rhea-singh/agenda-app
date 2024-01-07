export const formatDate = (dateString: string): string => {
  const dateObject = new Date(dateString);

  const timeString = dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return timeString;
};

export const transformAgenda = (dateString: string): string => {
  const dateObject = new Date(dateString);

  const timeString = dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return timeString;
};