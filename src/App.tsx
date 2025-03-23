import { useEffect, useState } from "react";
import "./App.css";
import { initializeGlobalVariable } from "./startup";
import Home from "./Home";
import { WorkerHttpvfs } from "sql.js-httpvfs";

function App() {
  const [globalData, setGlobalData] = useState<WorkerHttpvfs>();

  useEffect(() => {
    initializeGlobalVariable().then((data: any) => {
      setGlobalData(data);
    });
  }, []);

  return <>{globalData ? <Home db={globalData} /> : <div>Loading...</div>}</>;
}

export default App;
