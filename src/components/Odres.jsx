import React from "react";
import Data from "../orderData.json";

const Odres = () => {
  console.log(Data);
  return (
    <div>
      {Data.map((el) =>
        el.status == "Pedding" ? (
          <p className='bg-orange-400 text-[#fff]'>{el.status}</p>
        ) : el.status == "Delivered" ? (
          <p className='bg-green-700 text-[#fff]'>{el.status}</p>
        ) : (
          <p className='bg-red-700 text-[#fff]'>{el.status}</p>
        )
      )}
    </div>
  );
};

export default Odres;
