import React, { useEffect, useState } from "react";

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOffline = () => {
    console.log("handleOffline");
    setIsOnline(false);
  };

  const handleOnline = () => {
    setIsOnline(true);
  };

  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    console.log("mounted");
    return () => {
      console.log("unmount");
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (isOnline) {
    return <p>Všechno v pořádku</p>;
  }

  return <p>Jste offline!</p>;
};

export default Offline;
