import axios from "axios";
import { useState } from "react";
import { api } from "../config/api";


const AddModal = (props) => {
  const { setAddModalShow, setUsers, toast, temptUser, setTemptUser } = props;
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState(false);
  const handleAdd = () => {
    setTemptUser({ name, image, title, email, amount, status })
    axios
      .post(api, temptUser )
      .then((res) => res.data);
    setAddModalShow(false);
    axios.get(api).then((res) => {
      setUsers(res.data);
    });
    toast.success(`${temptUser.name} is successfully added!`)
  };
  return (
    <div className=" bg-red-100 absolute top-[150px] left-[50px] md:left-[300px] p-8 md:p-12 rounded-xl">
      <div className="h-[50px] m-2 px-6 rounded-2xl">
        <input
          placeholder="name"
          type="string"
          onChange={() => setName()}
          
        />
      </div>
      <div className="h-[50px] m-2 px-6 rounded-2xl">
        <input
          placeholder="email"
          type="email"
          onChange={() => setEmail()}
          
        />
      </div>
      <div className="h-[50px] m-2 px-6 rounded-2xl">
        <input
          placeholder="title"
          type="string"
          onChange={() => setTitle()}
          
        />
      </div>
      <div className="h-[50px] m-2 px-6 rounded-2xl">
        <input
          placeholder="amount"
          type="number"
          onChange={() => setAmount()}
          
        />
      </div>
      <div className="h-[50px] m-2 px-6 rounded-2xl">
        <input
          placeholder="status"
          type="boolean"
          onChange={() => setStatus()}
          
        />
      </div>
      <div className="h-[50px] m-2 px-6 rounded-2xl">
        <input placeholder="image" type="file" onChange={() => setImage()} />
      </div>
      <div className="text-white">
        <button
          className="w-[150px] m-2 bg-green-600 rounded-md"
          onClick={() => {
            handleAdd();
          }}
        >
          Add
        </button>
        <button
          className="w-[150px] m-2 bg-yellow-300 rounded-md"
          onClick={() => setAddModalShow(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddModal;
