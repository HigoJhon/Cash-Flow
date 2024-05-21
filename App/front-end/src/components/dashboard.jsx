import { useEffect, useState } from "react";
import Loading from "./loading";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simula uma chamada de API
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;