import React from "react";
import arrow from "../assets/toplinearroow-up-arrow-arrows-uparrow-direction-svgrepo-com (2).svg";
import dollar from "../assets/dollar-1189-svgrepo-com (2).svg";
const DashboardCard = ({data}) => {
  return (
    <>
      {data.map((el) => (
        <div className='flex flex-col rounded-2xl border-2 p-[24px] gap-[24px]'>
          <div className='flex gap-[24px] '>
            <div className='flex flex-col gap-[10px]'>
              <p>{el.title}</p>
              <h1>{el.count}</h1>
            </div>
            <div className='bg-[#635bff] w-[100px] h-[100px] flex justify-center items-center rounded-[50%]'>
              <img src={dollar} className='w-[60px]' alt='' />
            </div>
          </div>
          <div className='info'>
            <div className='profit flex items-center gap-[24px]'>
              <div className=' flex gap-[10px] items-center'>
                <img src={arrow} className='w-[17px]' alt='' />
                <p className='text-green-700'>12%</p>
              </div>

              <p className=''>Since last month</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DashboardCard;
