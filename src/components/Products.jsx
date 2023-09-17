import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductLoading from './ProductLoading';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './../features/cart/cartSlice';


const Products = () => {

const dispatch = useDispatch()

const handleCart = (product) => {

  dispatch(addToCart(product))
}

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getProudcts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products')
      const data = res.data
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProudcts()
  }, [])


  const cateBtn = [...new Set(products.map(cate => cate.category)), 'all'].sort()

  const [selItem, setSelItem] = useState('all')

  const filterValue = products.filter((product) => {
    return (
      (selItem === 'all' || product.category === selItem)

    )
  })

  return (
    <>

      <div className="btns flex flex-wrap items-center justify-center gap-3 my-10">

        {
          cateBtn.map((btn, index) => {
            return (
              <button className={`text-black hover:underline capitalize ${btn === selItem ? 'font-bold' : ''}`} onClick={() => setSelItem(btn)} key={index}>{btn}</button>

            )
          })
        }

      </div>


      {

        isLoading ? <ProductLoading /> :




          <section >
            <div className=" productsWarrper flex flex-wrap gap-4 justify-center pb-12 ">




              {filterValue.map((product) => {


                const productSlug = product.title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
                return (


                  <div to={`/product/${productSlug}`} className="border product group hover:shadow-md flex duration-300 flex-col hover:shadow-blue-400 hover:translate-y-[-8px] transition-all h-[22rem] rounded-2xl w-60  py-3 px-1 bg-white overflow-hidden relative" key={product.id}>
                    <div 
                    onClick={() => {
                      handleCart(product)
                    }}
                    className='cursor-pointer flex items-center justify-center rounded-md absolute top-5 -right-10 group-hover:right-5 bg-gray-900 text-white px-4 h-10 w-10 z-10 text-2xl duration-300'>
                      +
                      </div>
                    <figure className="w-full h-52 overflow-hidden ">
                      <img
                        src={product.image}
                        className="h-full w-full object-contain group-hover:scale-105 transition-all duration-300"
                        alt={product.image}
                      />
                    </figure>
                    <div className="content h-[40%]  pt-4 px-3  ">
                      <p className="title text-xs font-bold mb-2 group-hover:text-cyan-700 transition-all duration-300">
                        {product.title.slice(0, 30)}...
                      </p>
                      <ul className="flex items-center justify-between">
                        <div className="text-xs mb-2">
                          <Link to={`/product/${productSlug}`}>
                            <div data-tooltip={`$${product.price}`} className="button">
                              <div className="button-wrapper">
                                <div className="text">Buy Now</div>
                                <span className="icon">
                                  <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                  </svg>
                                </span>
                              </div>
                            </div>


                          </Link>
                        </div>
                        <p className="text-xs mb-2">
                          <span>Rating </span>
                          <span className="font-bold group-hover:text-yellow-500 transition-all duration-300">
                            {product.rating.rate}
                          </span>
                        </p>
                      </ul>
                      <Link to={`/product/${productSlug}`} className="font title text-xs hover:underline group-hover:text-cyan-700 transition-all duration-300">
                        {product.description.slice(0, 55)}...
                      </Link>
                    </div>
                  </div>


                )

              })}


            </div>
          </section>

      }
    </>
  )
}

export default Products
