import { useEffect, useState } from "react";
import "./App.css";
import myInitObject, { initializeGlobalVariable } from "./startup";
import Home from "./Home";
import { WorkerHttpvfs } from "sql.js-httpvfs";

function App() {
  const [globalData, setGlobalData] = useState<WorkerHttpvfs>();

  useEffect(() => {
    initializeGlobalVariable().then((data: WorkerHttpvfs) => {
      setGlobalData(data);
      myInitObject.db = { ...data };
      Object.freeze(myInitObject);
    });
  }, []);

  return <>{globalData ? <Home /> : <div>Loading...</div>}</>;
}

export default App;
