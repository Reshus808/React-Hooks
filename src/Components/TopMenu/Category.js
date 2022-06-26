import React from 'react';
import Menu from "./Menu";

const Category = ({filterItem,catItems}) => {
  return (
      <>
        <div className="menu-tabs container">
          <div className="menu-tab d-flex justify-content-around">
            {
              catItems.map((cat, index) =>{
                return (
                <button key={index} className="btn btn-warning" onClick={() => filterItem(cat)}>{cat.charAt(0).toUpperCase()+cat.slice(1)}</button>
                )
              })
            }
            {/*<button className="btn btn-warning" onClick={() => filterItem('breakfast')}>Breakfast</button>*/}
            {/*<button className="btn btn-warning" onClick={() => filterItem('lunch')}>Lunch</button>*/}
            {/*<button className="btn btn-warning" onClick={() => filterItem('evening')}>Evening</button>*/}
            {/*<button className="btn btn-warning" onClick={() => filterItem('dinner')}>Dinner</button>*/}
            {/*<button className="btn btn-warning" onClick={() => filterItem('dinner')}>Dinner</button>*/}
            {/*<button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>*/}
          </div>
        </div>
      </>
  );
};

export default Category;