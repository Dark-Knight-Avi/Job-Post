import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://642860dd161067a83b0d01be.mockapi.io/jd")
      .then((data) => setData(data.data));
  }, []);
  if (!data) {
    return <Loading />;
  }
  return (
    <div className="flex justify-start items-center flex-col mx-20">
      <button className="">Create a Job</button>
      {data &&
        data.map((job) => {
          return <Card key={job.id} job={job} />;
        })}
    </div>
  );
};

export default Home;
