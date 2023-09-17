import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);



    const {side} = useSelector(state => state.side)
 
    useEffect(() => {
      setSidebar(side);
    }, [side])




  return (

    <div className={` ${sidebar ? 'h-screen ' : ' h-0'} fixed top-0 right-0 w-full bg-[#00000038] z-30 overflow-hidden duration-500 transition-all`}>
   
      <div className={`${sidebar ? 'w-80 ' : 'w-0 '} absolute right-0 top-0 h-screen overflow-y-auto overflow-x-hidden  bg-white flex flex-col items-center justify-center duration-300 transition-all`}>
        <div
          onClick={() => {
            setSidebar(false);
          }}
          className="absolute top-5 right-5 z-10 mb-10 cursor-pointer bg-gray-900 text-white rounded-md px-4 pb-2 pt-2"
        >
          x
        </div>
 
        <div className="h-full pt-10 px-2">
          {useSelector((state) => state.cart).products.map((product) => (
            <div key={product.id} className="mt-10 mb-14 flex justify-between w-full h-36 flex-wrap bg-white shadow-md p-3 ">
              <img src={product.image} className="w-20 h-20 object-contain " />
              <div className="w-40 h-fit flex flex-col gap-2">
                <div className="w-full h-fit font-semibold rounded-sm">{product.title.slice(0, 14)}...</div>
                <div className="text-gray-400 flex gap-4">
                  <div className="text-black">Rating</div>
                  {product.rating.rate}
                </div>
              </div>
              <div className="flex items-center justify-between w-full mt-auto">
                <div className="text-indigo-600 h-fit">{product.price}</div>
                <div className="flex items-center justify-between gap-4">
                  <div className="font-semibold cursor-pointer">+</div>
                  <div className="bg-gray-200 px-10">0</div>
                  <div className="font-semibold cursor-pointer">-</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
