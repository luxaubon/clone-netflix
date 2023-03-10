import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import useAuth from '@/hooks/useAuth'



function Header() {
    const {logout} = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        const handleSrolly =  () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else setIsScrolled(false);
        };

        window.addEventListener("scroll", handleSrolly);

        return () => {
            window.removeEventListener("scroll", handleSrolly);
        };
    },[])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
    <div className="flex items-center space-x-2 md:space-x-10">
      <img
        src="https://rb.gy/ulxxee"
        width={100}
        height={100}
        className="cursor-pointer object-contain"
      />
      
      <ul className="hidden space-x-4 md:flex">
            <li className="headerLink cursor-default font-semibold text-white hover:text-white">
                Home
            </li>
            <li className="headerLink">Tv Show</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Pupula</li>
            <li className="headerLink">My List</li>
        </ul>
    </div>
    <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        {/* <Link href="/account"> */}
          <img
          onClick={logout}
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        {/* </Link> */}
      </div>
  </header>
  )
}

export default Header