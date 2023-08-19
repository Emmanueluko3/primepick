export const isOnline = () => {
  if (typeof window !== "undefined" && "navigator" in window) {
    return navigator.onLine;
  } else {
    return true;
  }
};
