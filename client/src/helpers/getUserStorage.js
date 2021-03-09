export const getUserStorage = () => ({
  agent: localStorage.getItem("agent") || null,
  desktop: localStorage.getItem("desktop") || null,
});
