import { useEffect, useState } from "react";
import myInitObject from "./startup";

const BooksGrid = () => {
  const [data, setData] = useState<unknown[] | undefined>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await myInitObject.db?.db.query(
        "select * from books limit 100"
      );
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div className="books-grid">
      {data
        ? data.map((v: any) => {
            return (
              <div key={v.id} className="card">
                <img alt={v.title} src={v.image_url} />
                <h3>{v.title}</h3>
                <h5>{v.authors}</h5>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default BooksGrid;
