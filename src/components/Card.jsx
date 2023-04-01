import React, { useEffect, useState } from "react";
import brand from "../assets/brand.png";

const Card = ({ job }) => {
  return (
    <div className="flex w-full lg:w-[45%] px-[24px] py-[16px] border-[1px] border-[#DADEDF]">
      <div className="brand">
        <img src={brand} alt="Logo" />
      </div>
      <div className="details text-[#000000] font-[Poppins] ml-[8px] flex flex-col text-[16px] leading-[24px] font-[400]">
        <div className="text-[24px] leading-[32px] font-[400]">{job.job_title}</div>
        <div className="text">{job.company_name} - {job.industry}</div>
        <div className="text-[#646464]">{job.location} ({job.remote_type})</div>
        <div className="mt-[24px] mb-[4px]">Part-Time (9.00 am - 5.00 pm IST)</div>
        <div className="text my-[4px]">Experience ({job.experience} years)</div>
        <div className="text my-[4px]">INR (₹) {job.salary} / Month</div>
        <div className="text my-[4px]">{job.total_employee} employees</div>
        <div className="btns">

        <button className="button mt-[20px] px-[16px] py-[8px] bg-[#1597E4] font-[500] text-[#FFFFFF] text-[16px] border-r-[6px]">{job.apply_type}</button>
        </div>

      </div>
    </div>
  );
};

export default Card;
