import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, removeToCart, removeProduct } from '../features/cart/cartSlice';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveCart = (product) => {
    dispatch(removeToCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart([]));
  };

  const handleRemove = (product) => {
    dispatch(removeProduct(product));
  };

  const { side } = useSelector((state) => state.side);

  useEffect(() => {
    setSidebar(side);
  }, [side]);

  const getProducts = useSelector((state) => state.cart).products;
  return (

    <div

      className={` ${sidebar ? 'w-full ' : ' w-0'} fixed top-0 h-screen right-0  bg-[#00000038] z-30 overflow-hidden duration-500 transition-all`}>

      <div

        className={`${sidebar ? 'w-80 ' : 'w-0 '} absolute right-0 top-0 h-screen overflow-y-auto overflow-x-hidden  bg-white flex flex-col items-center justify-center duration-300 transition-all `}>
        <div
          onClick={() => {
            setSidebar(false);
          }}
          className="absolute top-5 right-5 z-10 mb-10 cursor-pointer bg-gray-900 text-white rounded-md px-4 pb-2 pt-2"
        >
          x
        </div>

        <div onClick={handleClearCart} className="absolute capitalize top-5 left-5 z-10 mb-10 cursor-pointer bg-red-600 text-white rounded-md px-4 pb-2 pt-2">clear all</div>

        <div className="h-full pt-10 px-2">
          {
            getProducts.length > 0 ?

              getProducts.map((product) => (



                <div key={product.id} className="mt-10 mb-14 flex justify-between w-full h-36 flex-wrap bg-white shadow-md p-3 ">
                  <img src={product.image} className="w-20 h-20 object-contain " />
                  <div className="w-40 h-fit flex flex-col gap-2 ">
                    <div className="w-full h-fit font-semibold rounded-sm">{product.title.slice(0, 14)}... </div>
                  <div className='flex items-center justify-between'>
                  <div className="text-gray-400  flex gap-4">
                      <div className="text-black">Rating</div>
                      {product.rating.rate} 
                    </div>
                    <svg
                    onClick={()=>{
                      handleRemove(product.id)
                    }}
                    className='w-4 h-4 cursor-pointer ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
<path d="M 49 1 C 47.34 1 46 2.34 46 4 C 46 5.66 47.34 7 49 7 L 79 7 C 80.66 7 82 5.66 82 4 C 82 2.34 80.66 1 79 1 L 49 1 z M 24 15 C 16.83 15 11 20.83 11 28 C 11 35.17 16.83 41 24 41 L 101 41 L 101 104 C 101 113.37 93.37 121 84 121 L 44 121 C 34.63 121 27 113.37 27 104 L 27 52 C 27 50.34 25.66 49 24 49 C 22.34 49 21 50.34 21 52 L 21 104 C 21 116.68 31.32 127 44 127 L 84 127 C 96.68 127 107 116.68 107 104 L 107 40.640625 C 112.72 39.280625 117 34.14 117 28 C 117 20.83 111.17 15 104 15 L 24 15 z M 24 21 L 104 21 C 107.86 21 111 24.14 111 28 C 111 31.86 107.86 35 104 35 L 24 35 C 20.14 35 17 31.86 17 28 C 17 24.14 20.14 21 24 21 z M 50 55 C 48.34 55 47 56.34 47 58 L 47 104 C 47 105.66 48.34 107 50 107 C 51.66 107 53 105.66 53 104 L 53 58 C 53 56.34 51.66 55 50 55 z M 78 55 C 76.34 55 75 56.34 75 58 L 75 104 C 75 105.66 76.34 107 78 107 C 79.66 107 81 105.66 81 104 L 81 58 C 81 56.34 79.66 55 78 55 z" fill='red'></path>
</svg>
                  </div>
                    
                  </div>
                  <div className="flex items-center justify-between w-full mt-auto">
                    <div className="text-indigo-600 h-fit"> ${product.price * product.quantity}</div>
                    <div className="flex items-center justify-between gap-4">
                      <button
                        className={`font-semibold ${product.quantity >= 10 ? 'text-gray-400' : ''}`}
                        onClick={() => {
                          handleAddCart(product);
                        }}
                        disabled={product.quantity >= 10}
                      >
                        +
                      </button>

                      <div className="bg-gray-200 px-10">{product.quantity}</div>

                      <button
                        className={`font-semibold ${product.quantity == 1 ? 'text-gray-400' : ''}`}
                        onClick={() => {
                          handleRemoveCart(product);
                        }}
                        disabled={product.quantity == 1}
                      >
                        -
                      </button>

                    </div>
                  </div>
                </div>
              ))

              :

              <div className='h-full w-full flex items-center justify-center  capitalize font-bold text-gray-900 text-xl'>no item in cart</div>


          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
