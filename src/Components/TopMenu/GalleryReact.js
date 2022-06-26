import React, {useState} from 'react';
import "../../tab.css"
// import samosha from './images/samosa.jpg'
import Menu from './Menu';
import MenuItem from "./MenuItem";
import Category from "./Category";



//rest and spred operator
const category = [...new Set(Menu.map((cate)=> cate.category)), "all"];
console.log(category);


const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(category);


  const filterItem = (categItem) => {
    if(categItem === "all"){
      setItems(Menu);
      return;
    }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  }

  return (
      <>
  <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
  <hr />
     <Category filterItem = {filterItem}  catItems ={catItems}/>
      <MenuItem items={items}/>
      </>
  );
};

export default GalleryReact;