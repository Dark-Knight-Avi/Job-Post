import brand from "../assets/brand.png";
import del from "../assets/delete.png";
import axios from "axios";

const Card = ({ job, setIsDeleted }) => {
  const onDelete = () => {
    axios.delete(`https://642860dd161067a83b0d01be.mockapi.io/jd/${job.id}`);
    setIsDeleted(true);
  };
  return (
    <div className="flex w-full lg:w-[45%] px-[24px] py-[16px] rounded-[10px] mx-2 md:mx-[44px] lg:mx-0 mt-[30px] mb-[49px] border-[1px] border-[#DADEDF] bg-[#FFFFFF]">
      <div className="brand">
        <img src={brand} alt="Logo" />
      </div>
      <div className="details flex-1 text-[#000000] font-[Poppins] ml-[8px] flex flex-col text-[16px] leading-[24px] font-[400]">
        <div className="text-[24px] leading-[32px] font-[400] flex w-full justify-between items-center">
          <p>{job.job_title}</p>
          <button
            onClick={onDelete}
            className="bg-none border-none outline-none w-[20px]"
          >
            <img src={del} alt="Delete" />
          </button>
        </div>
        <div className="text">
          {job.company_name} - {job.industry}
        </div>
        <div className="text-[#646464]">
          {job.location} ({job.remote_type})
        </div>
        <div className="mt-[24px] mb-[4px]">
          Part-Time (9.00 am - 5.00 pm IST)
        </div>
        <div className="text my-[4px]">Experience ({job.experience} years)</div>
        <div className="text my-[4px]">INR (₹) {job.salary} / Month</div>
        <div className="text my-[4px]">{job.total_employee} employees</div>
        <div className="btns">
          <button className="mt-[28px] px-[16px] py-[8px] bg-[#1597E4] font-[500] text-[#FFFFFF] text-[16px] rounded-[6px]">
            {job.apply_type}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
