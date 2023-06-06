import { IoMdSearch } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../config/api";
import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal";
import EditModal from "./EditModal";

const Table = () => {
  const [users, setUsers] = useState([]);

  const [temptUser, setTemptUser] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [addModalShow, setAddModalShow] = useState(false);

  useEffect(() => {
    axios.get(api).then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  const handleEditWindow = (user) => {
    setTemptUser(user);
    setEditModalShow(true);
  };

  const handleDeleteWindow = (user) => {
    setTemptUser(user);
    setShowDelete(true);
  };

  const handleDetail = (user) => {
    setTemptUser(user);
    setShowInfo(true);
  };

  const handleAddModal = () => {
    setTemptUser();
    setAddModalShow(true);
  };
  return (
    <>
      <div className="bg-gray-200  flex justify-between px-6 py-4">
        <div>
          <span>{`All(56)`}</span>
          <button
            className="py-1 px-3 bg-blue-700 text-white rounded-2xl m-2 text-xs md:text-sm"
            onClick={() => handleAddModal()}
          >
            {" "}
            ADD NEW +
          </button>
        </div>
        <div className="text-xl text-gray-500">
          <button className="m-2">
            <IoMdSearch />
          </button>
          <button className="m-2">
            <FiSettings />
          </button>
          <button className="m-2">
            <CgDetailsMore />
          </button>
        </div>
      </div>

      {/* TOAST  */}
      <ToastContainer />

      {/* EDIT  */}

      {editModalShow && (
        <EditModal
          setEditModalShow={setEditModalShow}
          temptUser={temptUser}
          toast={toast}
        />
      )}

      {/* DELETE */}
      {showDelete && (
        <DeleteModal
          toast={toast}
          setShowDelete={setShowDelete}
          temptUser={temptUser}
          setUsers={setUsers}
          users={users}
        />
      )}
      {/* ADD */}
      {addModalShow && (
        <AddModal
          setAddModalShow={setAddModalShow}
          setUsers={setUsers}
          toast={toast}
          temptUser={temptUser}
          setTemptUser={setTemptUser}
        />
      )}
      {/* INFO */}
      {showInfo && (
        <div className="w-[350px] bg-gray-200 absolute top-[200px] left-24 p-8 rounded-xl">
          <div className="flex justify-between">
            {" "}
            <img
              src={temptUser.image}
              className="w-[60px] h-[60px] rounded-3xl m-4"
            />
            <button onClick={() => setShowInfo(false)}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className="m-4"> {temptUser.name} </div>
          <div className="m-4"> {temptUser.email} </div>
          <div className="m-4"> {temptUser.title} </div>
          {temptUser.status ? (
            <div className="bg-green-300 w-fit w-fit px-2 rounded-2xl m-4">
              {" "}
              Success
            </div>
          ) : (
            <div className="bg-red-600 w-fit px-2 rounded-2xl m-4">danger</div>
          )}

          <button
            className="text-red-500 m-4 text-lg"
            onClick={() => handleDeleteWindow(temptUser)}
          >
            {" "}
            <MdDelete />{" "}
          </button>
          <button
            onClick={() => handleEditWindow(temptUser)}
            className="text-green-500 m-4 text-lg"
          >
            {" "}
            <BiEditAlt />{" "}
          </button>
        </div>
      )}

      <table className="table-auto w-full">
        <thead>
          <tr className="h-[49px]">
            <th className="lg:w-[58px]">
              {" "}
              <div className="w-[20px] h-[20px] border border-gray-400 rounded-sm ml-4"></div>{" "}
            </th>
            <th className="lg:w-[50px]  text-left p-2">image</th>
            <th className="lg:w-[332px] text-left p-2">name</th>
            <th className="lg:w-[236px] text-left p-2" target="res">
              email
            </th>
            <th className="lg:w-[203px] text-left p-2" target="res">
              title
            </th>
            <th className="lg:w-[306px] text-left p-2" target="res">
              amount
            </th>
            <th className="lg:w-[200px] text-left p-2" target="res">
              status
            </th>
            <th className="lg:w-[115px] text-left p-2" target="res">
              action
            </th>
          </tr>
        </thead>
        {/* WINDOW */}

        <tbody>
          {users?.map((user) => (
            <tr
              id={user.id}
              key={user.id}
              className="hover:bg-gray-100 hover:transition duration-500 h-[49px] border-b px-2"
            >
              <td className="p-2 text-left">
                <div className="w-[20px] h-[20px] border border-gray-400 rounded-sm ml-2"></div>
              </td>
              <td className="p-2 text-left">
                <img
                  className="w-[40px] h-[40px] rounded-3xl"
                  src={user.image}
                />
              </td>
              <td className="p-2 text-left">{user.name}</td>
              <td className="p-2 text-left" target="res">
                {user.email}
              </td>
              <td className="p-2 text-left" target="res">
                {user.title}
              </td>
              <td className="p-2 text-left" target="res">
                {user.amount}
              </td>
              <td className="p-2 align-left text-white text-xs" target="res">
                {user.status ? (
                  <div className="bg-green-300 w-fit w-fit px-2 rounded-2xl">
                    {" "}
                    Success
                  </div>
                ) : (
                  <div className="bg-red-600 w-fit py-1 px-4 rounded-2xl">
                    danger
                  </div>
                )}
              </td>
              <td className="p-2 text-left" target="res">
                <button
                  className="text-gray-500 m-2"
                  onClick={() => handleDeleteWindow(user)}
                >
                  {" "}
                  <MdDelete />{" "}
                </button>
                <button
                  onClick={() => handleEditWindow(user)}
                  className="text-green-500 m-2"
                >
                  {" "}
                  <BiEditAlt />{" "}
                </button>
              </td>
              <td className="p-2 text-left md:hidden">
                {" "}
                <button onClick={() => handleDetail(user)} className="text-xs">
                  {" "}
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
