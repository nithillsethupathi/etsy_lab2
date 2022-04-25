import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom'

export default function Orders() {
  const [data, dataSet] = useState(null)
  console.log(data)
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get('http://localhost:5000/order/getOrder')
      dataSet(response)
    }
    fetchMyAPI()
  }, [])

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div className="mx-[20%]">
        <p className="text-3xl font-semibold mt-5 mb-5">Orders</p>
        
        {data?.data.map(item => (
            <div className="flex flex-wrap overflow-hidden mt-8 mb-8">

                <div className="w-1/2 overflow-hidden">
                <p className="mt-[15%] text-2xl font-medium">
                        OrderNumber: #{item.orderNo}
                    </p>
                </div>
                <div className="w-1/2 overflow-hidden">
                <p className="mt-[15%] text-2xl font-medium">
                    OrderTotal: ${item.orderTotal}
                </p>
                </div>
            </div>
        ))
        }
    </div>
)

}