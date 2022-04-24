import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import {getItem} from "../../actions/items"
import {createFav} from "../../actions/items"
import axios from 'axios'
const ItemDetails = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const item = useSelector((state) => state.items);
    const { id } = useParams();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        const token = user?.token;
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);


    useEffect(() => {
        dispatch(getItem(id));
    }, [id]);

    const createFavorites = (e) => {
        e.preventDefault();
        dispatch(createFav(item._id));
    }

    const select_item = {productId: item.id, title: item.title, price: item.price, image: item.image, user_id: user.result._id}
    async function createCart() {
        await axios.post('http://localhost:5000/cart/createCart', select_item)
        alert("Item added to your Cart")
    }

  return (
    <div className="mx-[20%] flex flex-wrap overflow-hidden">

            <div className="my-10 px-10 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                <img className="rounded-sm h-64 w-64" alt="item" src={String(item.image)} />
            </div>

            <div className="my-10 px-10 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                <p className='mt-5 text-2xl text-orange-400 font-semibold'>
                    {item.title}
                </p>
                <p className='mt-5 text-1xl'>
                    ${item.price}
                </p>
                <p className='mt-5 text-1xl'>
                    <span className="font-semibold">Category: </span>{item.category}
                </p>
                <p className='mt-5 text-1xl'>
                    {item.description}
                </p>
                {user && (
                    <div>
                        <div>
                        <button onClick={() => createFavorites()} className="mt-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Add to your Favorites
                        </button>
                        </div>
                        <div>
                        <button onClick={(e) => createCart(e)} className="mt-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Add to your Cart
                        </button>
                        </div>
                        <div>
                        {/* <Link href={String("edit/" + (item.productId))}>
                        <button className="mt-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Edit Item
                        </button>
                        </Link> */}
                        </div>
                    </div>

                )
                }
            </div>

        </div>
  )
}

export default ItemDetails