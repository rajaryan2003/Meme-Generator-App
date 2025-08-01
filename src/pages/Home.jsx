import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((meme) => setData(meme.data.memes));
  }, []);

  return (
    <div className="row">
      {data.map((el) => (
        <MemeCard img={el.url} title={el.name} />
      ))}
    </div>
  );
};

export default HomePage;
