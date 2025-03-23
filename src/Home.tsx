import { useEffect, useState } from "react";
import { WorkerHttpvfs } from "sql.js-httpvfs";

const Home = (db: { db: WorkerHttpvfs }) => {
  const [data, setData] = useState<unknown[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await db.db.db.query("select * from mytable");
      console.log("result", result);
      setData([result]);
    };
    fetchData();
  }, []);
  return (
    <div>
      {data.length ? (
        data.map((v, i) => {
          const h = JSON.stringify(v);
          return <h1 key={i}>{h}</h1>;
        })
      ) : (
        <>Home</>
      )}
    </div>
  );
};
export default Home;
