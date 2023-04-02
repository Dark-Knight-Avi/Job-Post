import React, { useEffect, useState } from "react";
import "../styles/Popup.css";
import { useDispatch, useSelector } from "react-redux";
const Step1 = ({ setIsOpen, setIsClickedNext, setGoBack }) => {
  const dispatch = useDispatch();
  const { jd } = useSelector((state) => state.formReducer);
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    if (jd.job_title !== "" && jd.company_name !== "" && jd.industry !== "") {
      setDisable(false);
    }
  }, [jd]);

  return (
    <div className="popup-box font-[Poppins]">
      <div className="box flex flex-col justify-start items-start p-[32px] w-[577px]">
        <div className="flex justify-between w-full mb-[24px]">
          <p className="text-[#182021] text-[20px] leading-[28px] font-[400]">
            Create a job
          </p>
          <p className="text-[#182021] text-[16px] leading-[24px] font-[400]">
            Step1
          </p>
        </div>
        {/* Job Title */}
        <label
          htmlFor="jt"
          className="text-[#212121] mb-[4px] text-[14px] leading-[20px] font-[500]"
        >
          Job title<span className="text-[#D86161]">*</span>
        </label>
        <input
          className="w-full mb-[24px] border-[1px] px-[12px] py-[8px] border-[#E6E6E6] rounded-[5px] flex-grow-0"
          type="text"
          placeholder="ex. UX UI Designer"
          id="jt"
          onChange={(e) =>
            dispatch({
              type: "setJt",
              payload: e.target.value,
            })
          }
        />
        {/* Company Name */}
        <label
          htmlFor="cn"
          className="text-[#212121] mb-[4px] text-[14px] leading-[20px] font-[500]"
        >
          Company name<span className="text-[#D86161]">*</span>
        </label>
        <input
          className="w-full mb-[24px] border-[1px] px-[12px] py-[8px] border-[#E6E6E6] rounded-[5px] flex-grow-0"
          type="text"
          placeholder="ex. Google"
          id="cn"
          onChange={(e) =>
            dispatch({
              type: "setCn",
              payload: e.target.value,
            })
          }
        />
        {/* Industry */}
        <label
          htmlFor="ind"
          className="text-[#212121] mb-[4px] text-[14px] leading-[20px] font-[500]"
        >
          Industry<span className="text-[#D86161]">*</span>
        </label>
        <input
          className="w-full mb-[24px] border-[1px] px-[12px] py-[8px] border-[#E6E6E6] rounded-[5px] flex-grow-0"
          type="text"
          placeholder="ex. Information Technology"
          id="ind"
          onChange={(e) =>
            dispatch({
              type: "setInd",
              payload: e.target.value,
            })
          }
        />
        <div className="flex justify-between w-full mb-[96px]">
          <div className="w-1/2 pr-[12px]">
            {/* Location */}
            <label
              htmlFor="loc"
              className="text-[#212121] mb-[4px] text-[14px] leading-[20px] font-[500]"
            >
              Location
            </label>
            <input
              className="w-full mb-[24px] border-[1px] px-[12px] py-[8px] border-[#E6E6E6] rounded-[5px] flex-grow-0"
              type="text"
              placeholder="ex. Chennai"
              id="loc"
              onChange={(e) =>
                dispatch({
                  type: "setLoc",
                  payload: e.target.value,
                })
              }
            />
          </div>
          <div className="w-1/2 pl-[12px]">
            {/* Remote type */}
            <label
              htmlFor="rt"
              className="text-[#212121] mb-[4px] text-[14px] leading-[20px] font-[500]"
            >
              Remote type
            </label>
            <input
              className="w-full mb-[24px] border-[1px] px-[12px] py-[8px] border-[#E6E6E6] rounded-[5px] flex-grow-0"
              type="text"
              placeholder="ex. In-office"
              id="rt"
              onChange={(e) =>
                dispatch({
                  type: "setRt",
                  payload: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex w-full justify-end items-end">
          <button
            onClick={() => setIsOpen(false)}
            className="px-[16px] mr-5 py-[8px] bg-[#1597E4] font-[500] text-[#FFFFFF] text-[16px] rounded-[6px]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              !disable && setIsClickedNext(true);
              !disable && setGoBack(true);
            }}
            className={`px-[16px] py-[8px] ${
              disable && "opacity-[0.7]"
            } bg-[#1597E4] font-[500] text-[#FFFFFF] text-[16px] rounded-[6px]`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
