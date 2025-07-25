// eslint-disable-next-line @typescript-eslint/no-explicit-any
const calculateExpirationTime = (expirationTime: any) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingTime = adjExpirationTime - currentTime;

  return remainingTime;
};

// retrieves the stored token and re-calculates the expiration time..
export const retrieveStoredToken = () => {
  if (typeof window !== "undefined") {
    const storedToken = localStorage.getItem("userToken");
    const storedExpirationTime = localStorage.getItem("expirationTime");

    const remainingTime = calculateExpirationTime(storedExpirationTime);

    if (remainingTime <= 6000) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("expirationTime");
      localStorage.removeItem("investorDetails");
      localStorage.removeItem("investments");
      return null;
    }

    return {
      token: storedToken,
      duration: remainingTime,
    };
  }
};

export default calculateExpirationTime;
