import React from 'react'
import {createShop} from "../../actions/shop";
import {useState, useEffect} from 'react';
import { useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom';
const Sell = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    const [shop, setShop] = useState({
        shopName: '', userId: ''
    });

    const getShop = (e) => {
        e.preventDefault();
        if(user){
            shop.userId = user.result._id;
        }
        dispatch(createShop(shop));
    }

    

  return (
    <div className="m-[10%]">
            <div className="flex text-center justify-center text-3xl">
                <h3>Name your shop</h3>
            </div>
            <div className="text-center justify-center text-1xl">
                <h4>Choose a memorable name that reflects your style</h4>
            </div>
            <div className="mt-5 flex justify-center">
                <div className="mb-3 xl:w-96">
                    <form onSubmit={getShop} className="input-group relative items-center w-full mb-4">
                        <input value={shop.shopName} onChange={(e) => setShop({ ...shop, shopName: e.target.value})} type="text" id="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
                        <button type="submit" className="mt-5 ml-[30%]  px-6 py-2 border-2 border-orange-500 text-orange-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Create shop</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Sell