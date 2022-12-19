import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./menuCard";
import Navbar from "./navbar";

const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})), "All",];
console.log(uniqueList);

const Restaurant = () => {
  // const myStyle = {color: "red"};
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
//   console.log(menuData);

    const filterItem = (category) => {
        if(category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })
        setMenuData(updatedList);
    }

    return (
        <div>
            <Navbar filterItem={filterItem} menuList={uniqueList}/>
            <MenuCard menuData={menuData} />
        </div>
    );
};

export default Restaurant;
