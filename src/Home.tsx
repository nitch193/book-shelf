import { useEffect, useState } from "react";
import { WorkerHttpvfs } from "sql.js-httpvfs";
import Logo from "./assets/books-and-people-svgrepo-com.svg";
import SearchIcon from "./assets/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

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
    <>
      <div className="banner">
        <Logo />
        <h2 className="page_name">Book-shelf</h2>
        <div className="page_actions">
          <span>
            <SearchIcon />
          </span>
          <h2>About</h2>
        </div>
      </div>
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
    </>
  );
};
export default Home;
