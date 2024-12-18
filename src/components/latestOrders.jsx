import React from "react";
import LastesOredertem from "./lastesOredertem";
import data from "../productData.json";
const LatestOrders = () => {
  return (
    <div className=' w-full border-2 rounded-2xl  '>
      <div className='w-full px-[24px] pt-[36px] pb-[16px]'>
        <h1 className='w-full '>Latest products</h1>
      </div>
      {data.map((el) => (
        <LastesOredertem data={el} />
      ))}
    </div>
  );
};

export default LatestOrders;
