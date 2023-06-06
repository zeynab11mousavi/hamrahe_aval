import axios from "axios";
import { api } from "../config/api";

const DeleteModal = (props) => {
  const { temptUser, setShowDelete, setUsers, users, toast } = props;

  const handleDelete = () => {
    setShowDelete(false)
    axios.delete(`${api}/${temptUser.id}`).then(res => res.data)
    axios.get(api).then((res) => {
        setUsers(res.data);
      });
      toast.warning(`${temptUser.name} got deleted!`)
  }
  return (
    <div className=" bg-red-100 absolute top-[250px] left-[50px] md:left-[300px] p-8 md:p-16 rounded-xl">
      <div>{`ARE YOU SURE YOU WANT TO DELETE ${temptUser.name} ?`}</div>
      <div className="text-white">
        <button className="w-[150px] m-2 bg-red-600 rounded-md" onClick={() => {handleDelete(temptUser.id)}} >Yes</button>
        <button className="w-[150px] m-2 bg-yellow-300 rounded-md" onClick={() => setShowDelete(false)} >No</button>
      </div>
    </div>
  );
};

export default DeleteModal;
