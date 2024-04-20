import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { logo } from '../assets/index';
import { allItems } from '../constants';
import HeaderBottom from './HeaderBottom';
import Bottom from './HeaderBottom';

const Header = () => {
    const [showAll, setShowAll]=useState(false);
    const allItems=[
        {
        _id:"110", title:"All Departments"
    },
    {
        _id:"111", title:"Alexa Skills"
    },
    {
        _id:"112", title:"Amazon Devices"
    },
    {
        _id:"113", title:"Amazon Fashion"
    },
    {
        _id:"114", title:"Amazon Fresh"
    },
    {
        _id:"115", title:"Amazon Fresh Meat"
    },
    {
        _id:"116", title:"Amazon Pharmacy"
    },
    {
        _id:"117", title:"Appliances"
    },
    {
        _id:"118", title:"Apps & Games"
    },
    {
        _id:"119", title:"Audible Audiobooks"
    },
    {
        _id:"120", title:"Baby"
    },
    {
        _id:"121", title:"Beauty"
    },
    {
        _id:"122", title:"Books"
    },
    {
        _id:"123", title:"Car & Motorbike"
    },
    {
        _id:"124", title:"Clothing & Accessories"
    },
    {
        _id:"125", title:"Collectibles"
    },
    {
        _id:"126", title:"Computers & Accessories"
    },
    {
        _id:"127", title:"Deals"
    },
    {
        _id:"128", title:"Electronics"
    },
    {
        _id:"129", title:"Furniture"
    },



];

  return (
    
    <div>
        <div className="w-full bg-black text-white px-4 py-3 flex item-center gap-4">
           {/*image*/}
            <div className='headerHover'>
                <img className="w-24 mt-3" src={logo} alt="logo"/>
            </div>
            {/*deliver*/}
            <div className='headerHover'>
            <LocationOnIcon />
                <p className='text-sm text-lightText font-light flex flex-col'> 
                    Deliver to {" "}
                    <span className='text-sm font-semibold -mt-1 text-whiteText'>
                    India
                    </span>
                </p>
            </div>
            <div className='h-10 rounded-md flex flex-grow relative' >
                <span onClick={()=>setShowAll(!showAll)} className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-point duration-300 text-sm text-black font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
                    All <span></span>
                    <ArrowDropDownIcon />
                    </span>
                    {
                        showAll && (
                            <div>
                                <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-black text-black p-2 flex-col gap-1 z-50'>
                                    {
                                        allItems.map((item)=>(
                                            <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer duration-200' key={item.id}>{item.title}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                <input className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2" type="text" />
                <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-black cursor-pointer rounded-tr-md rounded-br-md'>
                    <SearchIcon />
                </span>
            </div>
            {/*Sign in*/}
            <div className="flex flex-col items-start justify-center headerHover">
                <p className="text-xs text-lightText font-light">Hello, sign in</p>
                <p className="text-sm font-semibold -mt-1 text-whiteText">
                    Accounts & Lists {" "}
                    <span>
                        <ArrowDropDownIcon/>
                    </span>
                </p>
            </div>
            {/**Orders*/}
                    <div className='flex flex-col items-start justify-center headerHover'> 
                        <p className="text-xs text-lightText font-light">Returns</p>
                        <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
                    </div>
                    {/*Cart*/}
                    <div className="flex items-start justify-center headerHover relative">
                        <ShoppingCartIcon />
                        <p className="text-xs font-semibold mt-3 text-whiteText">
                            Cart 
                            <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-black rounded-full flex justify-center items-center'>0</span></p>
                    </div>
                    
            </div>
            
    </div>
    )
}

export default Header
