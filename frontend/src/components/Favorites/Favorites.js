import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Favorite from "./Favorite/Favorite"

const Favorites = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
      

    const favorites = user.result.favorites;
    console.log(favorites)
    const items = useSelector((state) => state.items);
    console.log(items);
    return(
        <div className="flex flex-wrap mx-8 overflow-hidden">
            {
                items.map(item => (
                    <div key={item.id} className="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <Favorite item={item} />
                    </div>
                ))

            }
        </div>
    )
}

export default Favorites;