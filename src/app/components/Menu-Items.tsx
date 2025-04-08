'use client';
import { HeartIcon } from 'lucide-react'
import Link from 'next/link'
import { SignIn } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import menuItemsData from '../../../public/data/menu-items.json';
import { menuItemsType } from '../../../types/menu-types';
import { IRootState } from '@/store';
import { useSelector } from 'react-redux';
import { button } from 'framer-motion/client';
import { logout } from '@/store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
const MenuItemsComponent = () => {

  const isAuthenticated =
  useSelector((state: IRootState) => state.themeConfig.isAuthenticated) || false;
const Token =   useSelector((state: IRootState) => state.themeConfig.authToken) || false;
const dispatch = useDispatch()
const route = useRouter()
    const [items, setItems] = useState<menuItemsType[]>([])

    useEffect(()=>{
        setItems(menuItemsData)
    },[])
 const hanldeLogout = () => {
    dispatch(logout());
    route.push("/Login");
   };
  return (
    <div className="absolute  flex min-w-64 flex-col md:right-36 right-3 bg-white shadow-md w-40  rounded" 
    onClick={()=>setItems([])}
    >
    <div className="flex flex-col p-2 gap-2">
        {items.length >0 && (
           items.map((items,index)=>(
            <Link
            href={items.link} className=" hover:bg-slate-800/10 rounded p-2 font-bold text-bodyText"
            key={index}
          >
            {items.title}
          </Link>
           ))
        )}
   
    </div>
    <div className="flex flex-col">
      <div className="flex justify-between heading-5 p-1 gap-x-1">
        {/* <Link
          href="/Cart"
          className="bg-p1 flex items-center  justify-center hover:bg-green-700 duration-300 rounded w-full p-1 "
        >
          {" "}
          <ShoppingCart size={32} />
          Cart
        </Link> */}
        {/* <Link
          href="/wishlist"
          className="bg-p1 flex items-center gap-x-1 hover:bg-green-700 duration-300  justify-center rounded w-full p-1"
        >
          <HeartIcon size={30} />
          WishList
        </Link> */}
      </div>
      
      {isAuthenticated ? (
              <button onClick={hanldeLogout} className='hover:bg-red-400  bg-red-500 duration-200 text-white  px-3 py-4   flex items-center justify-center rounded font-bold ' >Logout</button>
      ) : (
        <Link
        href="/Login"
        className="bg-s2 text-bodyText heading-5  flex items-center justify-center rounded"
      >
        <SignIn size={32} weight="duotone" />
        <h5 className=" text-center my-3">Sign In</h5>
      </Link>)
      }

    </div>
  </div>
  )
}

export default MenuItemsComponent;
