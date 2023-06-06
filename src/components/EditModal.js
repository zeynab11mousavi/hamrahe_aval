import axios from "axios";
import { useState } from "react";
import { api } from "../config/api";

const EditModal = (props) => {
  const { temptUser, setUsers, toast, setEditModalShow } = props;
  const [name, setName] = useState(temptUser.name);
  const [image, setImage] = useState(temptUser.image);
  const [title, setTitle] = useState(temptUser.title);
  const [email, setEmail] = useState(temptUser.email);
  const [amount, setAmount] = useState(temptUser.amount);
  const [status, setStatus] = useState(temptUser.status);
  const [id] = useState(temptUser.id);
  const handleAdd = () => {
    axios
      .put(`${api}/${id}`, { name, image, title, email, amount, status })
      .then((res) => res.data);

    setEditModalShow(false);

    axios.get(api).then((res) => {
      setUsers(res.data);
    });
    toast.success(`${temptUser.name} Is Successfully Edited!`);
  };
  return (
    <div className=" bg-red-100 absolute top-[150px] left-6 md:left-[300px] p-4 md:p-12 rounded-xl">
      <div className=" m-2 px-6 rounded-2xl">
        <img src={image} />
        {/* <input placeholder="image" type="file" onChange={() => setImage()} /> */}
      </div>
      <div className="h-[50px] m-2 px-6 rounded-2xl">
        <input
          placeholder="name"
          type="string"
          value={name}
          onChange={() => setName()}
        />
      </div>
      <div className="h-[50px] m-2 px-6 rounded-2xl">
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={() => setEmail()}
        />
      </div>
      <div className="h-[50px] m-2 px-6 rounded-2xl">
        <input
          placeholder="title"
          type="string"
          value={title}
          onChange={() => setTitle()}
        />
      </div>
      <div className="h-[50px] m-2 px-6 rounded-2xl">
        <input
          value={amount}
          placeholder="amount"
          type="number"
          onChange={() => setAmount()}
        />
      </div>
      <div className="h-[50px] m-2 px-6 rounded-2xl">
        <input
          value={status}
          placeholder="status"
          type="boolean"
          onChange={() => setStatus()}
        />
      </div>

      <div className="text-white">
        <div>
          <button
            className="w-[150px] m-2 bg-green-600 rounded-md"
            onClick={() => {
              handleAdd();
            }}
          >
            Add
          </button>
        </div>
        <button
          className="w-[150px] m-2 bg-yellow-300 rounded-md"
          onClick={() => setEditModalShow(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditModal;
