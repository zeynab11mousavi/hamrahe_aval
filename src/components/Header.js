import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { api } from "../config/api";

const Header = () => {
  
      const [user, setUser] = useState([]);
      useEffect(() => {
        axios
          .get(`${api}`)
          .then((res) => {
            setUser(res.data);
          });
      }, []);
      
  return (
    <nav className="flex justify-between p-2 md:p-6 md:h-[70px] shadow-md items-center">
      <h5 className="text-xs md:text-normal lg:text-xl">Users List</h5>
      <div className="searchBar relative">
        <button className="absolute top-1 md:top-3 left-3 text-gray-400">
          <IoMdSearch />
        </button>
        <input className="bg-gray-50 px-8 w-[150px] md:w-[400px] md:h-[36px] rounded-3xl" type="text" placeholder="search..." />
      </div>
      <img src={user[0]?.image} alt="avatar" className="w-[50px] h-[50px] rounded-3xl" />
    </nav>
  );
};

export default Header;
