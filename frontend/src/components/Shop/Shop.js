import React from "react";
import ItemForm from "../Form/ItemForm";
const Shop = () => {
  return (
    <main className="container items-center mx-auto p-4">
      <div className="flex flex-wrap overflow-hidden">
        <ItemForm />
      </div>
    </main>
  );
};

export default Shop;
