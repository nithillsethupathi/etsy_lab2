const Item = ({ item }) => {
  return (
    <div key={item.id} className="w-full overflow-hidden">

      <img alt="item" className="rounded-sm h-64 w-64" src={String(item.image)} />
      <a href="" className='text-2xl text-orange-400'>
        {item.title}
      </a>
      <p>
      </p>
      <p>
        ${item.price}
      </p>
    </div>
  )
}

export default Item;