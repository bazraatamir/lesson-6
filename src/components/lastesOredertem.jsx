import React from "react";
import moreInfo from "../assets/more-vertical-svgrepo-com.svg";
import productImg from "../assets/product-5.png";

const LastesOredertem = ({data}) => {
  // console.log(props);
  return (
    <div className=' flex    justify-between items-center px-[24px] border-t-2 py-[24px]'>
      <div className='h- flex gap-[10px] '>
        <img
          className='w-[48px] h-[48px] rounded-2xl'
          src={data.imgUrl}
          alt='product'
        />
        <div>
          <h3 className='font-bold'>Soja & Co. Eucalyptus</h3>
          <p>Updated Mar 8, 2024</p>
        </div>
      </div>
      <div>
        <img className='w-[36px]' src={moreInfo} alt='' />
      </div>
    </div>
  );
};

export default LastesOredertem;
