import React, {useState} from 'react';
import {menus} from "../../constants/index.js";
import {getBgColor} from "../../utils/index.js";
import {GrRadialSelected} from "react-icons/gr";

function MenuContainer() {

    const [selected, setSelected] = useState(menus[0]);

    return (
        <>
            <div className='grid grid-cols-4 px-10 py-4 gap-4 w-[100%]'>
                {
                    menus.map((menu) => {
                        return (
                            <div key={menu.id} className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
                            style={{backgroundColor: menu.bgColor}}
                                 onClick={() => setSelected(menu)}
                            >
                                {/*<h1 className="text-[#f5f5f5] text-xl font-semibold">{menu.name}</h1>*/}
                                <div className="flex items-center justify-between w-full">
                                    <h1 className="text-[#f5f5f5] text-lg font-semibold">{menu.icon} {menu.name}</h1>
                                    {selected.id === menu.id && <GrRadialSelected className="text-white size={20}" /> }
                                </div>
                                <p className="text-[#ababab] text-sm font-semibold">{menu.items.length} Items</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr className="border-[#333] border-t-2 mt-4" />
            <div className='grid grid-cols-4 px-10 py-4 gap-4 w-[100%]'>
                {
                    selected.items.map((menu) => {
                        return (
                            <div key={menu.id} className="flex flex-col items-start justify-between p-4 rounded-lg h-[120px] cursor-pointer bg-[#1a1a1a] hover:bg-[#2c2c2c]"
                            >
                                {/*<h1 className="text-[#f5f5f5] text-xl font-semibold">{menu.name}</h1>*/}
                                <div className="flex items-center justify-between w-full">
                                    <h1 className="text-[#f5f5f5] text-lg font-semibold">{menu.name}</h1>
                                </div>
                                <p className="text-[#ababab] text-lg font-bold">{menu.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default MenuContainer;