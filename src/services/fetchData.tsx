export const fetchData = () => {
  return fetch("https://expenses-backend-mu.vercel.app/expenses", {
    headers: {
      "Content-Type": "application/json",
      Username: "ekta.rathi", // entering firstname, lastname
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      if (typeof error === "string") {
        throw new Error(error);
      } else console.error(error);
    });
};
