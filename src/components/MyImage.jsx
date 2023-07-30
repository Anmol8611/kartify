import React, { useState } from "react";

const MyImage = ({ imgs }) => {
  const [mainImage, setMainImage] = useState(imgs && imgs[0]);

  return (
    <div className='flex items-center gap-20 max-w-fit'>
      <div className='flex flex-col gap-5 items-center'>
        {imgs?.map((elm) => (
          <img 
          onClick={()=>setMainImage(elm)}
          key={elm?.id} 
          src={`${elm?.url}`} 
          className='h-24 w-32 object-cover rounded-lg cursor-pointer hover:scale-[1.02] hover:opacity-70 active:opacity-100 opacity-50 active:scale-105 transition-all' 
          alt={elm?.filename} />
        ))}
      </div>
      <div>
        <img 
        src={mainImage?.url} 
        alt={mainImage?.filename} 
        className="h-[350px] w-[450px] object-cover rounded-xl shadow-black shadow transition-all"/>
      </div>
    </div>
  );
};

export default MyImage;
