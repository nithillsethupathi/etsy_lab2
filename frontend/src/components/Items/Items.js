import Item from "./Item/Item"
import { useSelector } from "react-redux";
const Items = () => {
    const items = useSelector((state) => state.items);
    console.log(items);
    return(
        <div className="flex flex-wrap mx-8 overflow-hidden">
            {
                items.map(item => (
                    <div key={item.id} className="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <Item item={item} />
                    </div>
                ))

            }
        </div>
    )
}

export default Items;