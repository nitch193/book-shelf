import { useEffect, useState } from "react";
import { WorkerHttpvfs } from "sql.js-httpvfs";

const Home = (db: { db: WorkerHttpvfs }) => {
  const [data, setData] = useState<unknown[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await db.db.db.query("select * from books limit 100");
      console.log("result", result);
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div className="books-grid">
      {data.length ? (
        data.map((v: any) => {
          return (
            <div key={v.id} className="card">
              <img alt={v.title} src={v.image_url} />
              <h3>{v.title}</h3>
              <h5>{v.authors}</h5>
            </div>
          );
        })
      ) : (
        <>Home</>
      )}
    </div>
  );
};
export default Home;
