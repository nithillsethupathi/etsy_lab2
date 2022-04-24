import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom'
import CreateOrder from "../../actions/order.js";

export default function Cart() {
  const [data, setData] = useState([])
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  useEffect(() => {
      setLoading(true)
      axios.get('http://localhost:5000/api/cart/getCart')
          .then((res) => res.json())
          .then((data) => {
              setData(data)
              setLoading(false)
          })
  }, [])

  async function deleteAll(){
    const response = await axios.post('http://localhost:5000/api/cart/deleteAll', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: user.result._id
        })
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
}

  const deleteCart = async e => {
      e.preventDefault()
      const val = e.target.getAttribute('id')
      const response = await axios.post('http://localhost:5000/api/cart/deleteCart', {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              id: val
          })
      });
      if (!response.ok) {
          throw new Error(response.statusText);
      }
  }

  async function createOrder(data){


      await data.map((item) => {
          console.log(item.id)
          fetch(`/api/orders/createOrder`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
                },
              body: JSON.stringify({
                  productId: String(item.id),
                  title: String(item.title),
                  image: String(item.image),
                  price: Number(item.price),
                  user: user.result._id
              })
          });
      })
      await deleteAll()
      navigate('/');
  }  
  
  return (
      <div className="mx-[20%]">
          <p className="text-3xl font-semibold mt-5 mb-5">Cart</p>
          {data?.map(item => (
              <div className="flex flex-wrap overflow-hidden mt-8 mb-8">
                  
                      <div className="w-1/4 overflow-hidden">
                      <button id={item.id} onClick={(e) => deleteCart(e)} className=" mt-[15%] bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Remove
                      </button>
                  </div>
                  <div className="w-1/4 overflow-hidden">
                      <img className="rounded-sm h-36 w-36" src={String(item.image)} />
                  </div>

                  <div className="w-1/4 overflow-hidden">
                          <p className='text-center justify-center text-2xl text-orange-400'>
                              {item.title}
                          </p>
                  </div>

                  <div className="w-1/4 overflow-hidden">
                  <p className="mt-[15%] text-2xl font-medium">
                          ${item.price}
                      </p>
                  </div>
              </div>
          ))
          }
          <input onClick={() => createOrder(data)} type="submit" className="mb-8 mt-8 ml-[40%]  px-6 py-2 border-2 border-orange-500 text-orange-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" value="Complete Purchase"/>
      </div>
  )

}