import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import Card from "../components/Card";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";

const Home = () => {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [goBack, setGoBack] = useState(false);
  const [isClickedNext, setIsClickedNext] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    axios
      .get("https://642860dd161067a83b0d01be.mockapi.io/jd")
      .then((data) => setData(data.data));
    isSaved ? setIsSaved(false) : "";
    isDeleted ? setIsDeleted(false) : "";
  }, [isSaved, isDeleted]);
  if (!data) {
    return <Loading />;
  }
  return (
    <div className="flex justify-start items-center flex-col px-2 md:px-20">
      <div className="create w-full">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="my-10 text-xl text-white px-3 py-2 rounded-md hover:opacity-[0.9] hover:cursor-pointer bg-[#1597E4]"
        >
          Create a Job →
        </button>
      </div>
      {isOpen && !goBack && !isClickedNext && (
        <Step1
          setGoBack={setGoBack}
          setIsOpen={setIsOpen}
          setIsClickedNext={setIsClickedNext}
        />
      )}
      {isOpen && isClickedNext && goBack && (
        <Step2
          setData={setData}
          setGoBack={setGoBack}
          setIsOpen={setIsOpen}
          setIsClickedNext={setIsClickedNext}
          setIsSaved={setIsSaved}
        />
      )}
      <div className="jobs w-full flex justify-around items-center flex-wrap bg-[#D8D8D8]">
        {data &&
          data.map((job) => {
            return <Card key={job.id} setIsDeleted={setIsDeleted} job={job} />;
          })}
      </div>
    </div>
  );
};

export default Home;
