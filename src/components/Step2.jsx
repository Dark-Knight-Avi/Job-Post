import React from "react";
import "../styles/Popup.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const Step2 = ({ setIsOpen, setIsClickedNext, setGoBack, setIsSaved }) => {
  const dispatch = useDispatch();
  const { jd } = useSelector((state) => state.formReducer);
  const handleSave = () => {
    axios.post("https://642860dd161067a83b0d01be.mockapi.io/jd", {
      ...jd,
      experience: `${jd.experience.max} - ${jd.experience.min}`,
      salary: `${jd.salary.max} - ${jd.salary.min}`,
    });
    setIsSaved(true);
    setIsOpen(false);
  };
  return (
    <div className="popup-box font-[Poppins]">
      <div className="box flex flex-col justify-start items-start p-[32px] w-[577px]">
        <div className="flex justify-between w-full mb-[24px]">
          <p className="text-[#182021] text-[20px] leading-[28px] font-[400]">
            Create a job
          </p>
          <p className="text-[#182021] text-[16px] leading-[24px] font-[400]">
            Step2
          </p>
        </div>

        <div className="flex flex-col justify-start w-full mb-[24px]">
          {/* Experience */}
          <label
            htmlFor="exp"
            className="text-[#212121] mb-[4px] text-[14px] leading-[20px] font-[500]"
          >
            Experience
          </label>

          <div className="flex justify-between items-center">
            <div className="w-1/2 pr-[12px]">
              <input
                className="w-full border-[1px] px-[12px] py-[8px] border-[#E6E6E6] rounded-[5px] flex-grow-0"
                type="text"
                placeholder="Maximum"
                id="exp"
                onChange={(e) =>
                  dispatch({
                    type: "setExpMax",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className="w-1/2 pl-[12px]">
              <input
                className="w-full border-[1px] px-[12px] py-[8px] border-[#E6E6E6] rounded-[5px] flex-grow-0"
                type="text"
                placeholder="Minimum"
                id="exp"
                onChange={(e) =>
                  dispatch({
                    type: "setExpMin",
                    payload: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full mb-[24px]">
          {/* Salary */}
          <label
            htmlFor="sal"
            className="text-[#212121] mb-[4px] text-[14px] leading-[20px] font-[500]"
          >
            Salary
          </label>

          <div className="flex justify-between items-center">
            <div className="w-1/2 pr-[12px]">
              <input
                className="w-full border-[1px] px-[12px] py-[8px] border-[#E6E6E6] rounded-[5px] flex-grow-0"
                type="text"
                placeholder="Maximum"
                id="sal"
                onChange={(e) =>
                  dispatch({
                    type: "setSalaryMax",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className="w-1/2 pl-[12px]">
              <input
                className="w-full border-[1px] px-[12px] py-[8px] border-[#E6E6E6] rounded-[5px] flex-grow-0"
                type="text"
                placeholder="Minimum"
                id="sal"
                onChange={(e) =>
                  dispatch({
                    type: "setSalaryMin",
                    payload: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        {/* Total Employee */}
        <label
          htmlFor="te"
          className="text-[#212121] mb-[4px] text-[14px] leading-[20px] font-[500]"
        >
          Total employee
        </label>
        <input
          className="w-full mb-[24px] border-[1px] px-[12px] py-[8px] border-[#E6E6E6] rounded-[5px] flex-grow-0"
          type="text"
          placeholder="ex. 100"
          id="te"
          onChange={(e) =>
            dispatch({
              type: "setTe",
              payload: e.target.value,
            })
          }
        />
        <div
          htmlFor="at"
          className="text-[#212121] mb-[4px] text-[14px] leading-[20px] font-[500]"
        >
          Apply type
        </div>
        <div className="flex">
          <div className="flex">
            <input
              onClick={() => {
                dispatch({
                  type: "setAt",
                  payload: "Quick apply",
                });
              }}
              type="radio"
              id="quick"
              value={"Quick apply"}
              className="border-[2px] border-[#D8D8D8]"
            />
            <label className="ml-[4px]" htmlFor="quick">
              Quick apply
            </label>
          </div>
          <div className="flex ml-[16px]">
            <input
              onClick={() => {
                dispatch({
                  type: "setAt",
                  payload: "External apply",
                });
              }}
              type="radio"
              id="external"
              value={"External apply"}
              className="border-[2px] border-[#D8D8D8]"
            />
            <label className="ml-[4px]" htmlFor="external">
              External apply
            </label>
          </div>
        </div>
        <div className="flex w-full justify-end items-end mt-[112px]">
          <button
            onClick={() => {
              setIsOpen(false);
              setIsClickedNext(false);
              setGoBack(false);
            }}
            className="px-[16px] mr-5 py-[8px] bg-[#1597E4] font-[500] text-[#FFFFFF] text-[16px] rounded-[6px]"
          >
            Cancel
          </button>
          {/* <button
            onClick={() => {
              setGoBack(false);
              setIsClickedNext(false);
            }}
            className="px-[16px] mr-5 py-[8px] bg-[#1597E4] font-[500] text-[#FFFFFF] text-[16px] rounded-[6px]"
          >
            Back
          </button> */}
          <button
            onClick={handleSave}
            className="px-[16px] py-[8px] bg-[#1597E4] font-[500] text-[#FFFFFF] text-[16px] rounded-[6px]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
