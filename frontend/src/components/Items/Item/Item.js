import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {

  const navigate = useNavigate();
  const openItem = () => {
    navigate(`/items/${item._id}`);
  }

  return (
    <div key={item.id} className="w-full overflow-hidden">

      <img alt="item" className="rounded-sm h-64 w-64" src={String(item.image)} />
      <button onClick={openItem} className='text-2xl text-orange-400'>
        {item.title}
      </button>
      <p>
      </p>
      <p>
        ${item.price}
      </p>
    </div>
  )
}

export default Item;