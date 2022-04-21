import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import {createItem} from '../../actions/items';

const ItemForm = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);


    const [itemData, setItemData] = useState({
        title: '', image: '', category: '', price: '', quantity: 1, undefined, description: '', user_id: '', quantity: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user){
            itemData.user_id = user.result._id; 
        }
        dispatch(createItem(itemData));
    }

    return (
        <div className="mx-[20%] flex flex-wrap overflow-hidden">
            <div className="w-full overflow-hidden">
                <p className="text-2xl">Create an Item here!</p>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-[2%] mb-[5%]">
                    <div className="flex mb-6">
                        <label className="flex flex-wrap text-gray-700 mr-3 text-lg font-bold mb-2">
                            title
                        </label>
                        <input value={itemData.title} onChange={(e) => setItemData({ ...itemData, title: e.target.value})} id="title" type="text" className="flex flex-wrap shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                    <div className="flex mb-6">
                        <label className="flex flex-wrap text-gray-700 mr-3 text-lg font-bold mb-2">
                            price
                        </label>
                        <input value={itemData.price} onChange={(e) => setItemData({ ...itemData, price: e.target.value})} type="number" id="price" className="flex flex-wrap shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                    <div className="flex mb-6">
                        <label className="flex flex-wrap text-gray-700 mr-3 text-lg font-bold mb-2">
                            description
                        </label>
                        <input value={itemData.description} onChange={(e) => setItemData({ ...itemData, description: e.target.value})} type="text" id="description" className="flex flex-wrap shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                    <div className="flex mb-6">
                        <label className="flex flex-wrap text-gray-700 mr-3 text-lg font-bold mb-2">
                            category
                        </label>
                        <input value={itemData.category} onChange={(e) => setItemData({ ...itemData, category: e.target.value})} type="text" id="category" className="flex flex-wrap shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                    <div className="flex mb-6">
                        <label className="flex flex-wrap text-gray-700 mr-3 text-lg font-bold mb-2">
                            quantity
                        </label>
                        <input value={itemData.quantity} onChange={(e) => setItemData({ ...itemData, quantity: e.target.value})} type="number" id="quantity" className="flex flex-wrap shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                    <div className="flex mb-6">
                        <label className="flex flex-wrap text-gray-700 mr-3 text-lg font-bold mb-2">
                            image
                        </label>
                        <input value={itemData.image} onChange={(e) => setItemData({ ...itemData, image: e.target.value})} type="text" id="image" className="flex flex-wrap shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                    <div className="items-center text-center justify-center">
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Create a new Item
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default ItemForm;