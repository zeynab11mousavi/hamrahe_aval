import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://62c918e04795d2d81f784bca.mockapi.io/api/list_users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr>
          <th className="">0</th>
          <th>image</th>
          <th>name</th>
          <th>email</th>
          <th>title</th>
          <th>amount</th>
          <th>status</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id} className="hover:bg-gray-100">
            <td>
              {" "}
              <input type="radio" />{" "}
            </td>
            <td>
              <img className="w-[40px] h-[40px]" src={user.image} />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.title}</td>
            <td>{user.amount}</td>
            <td className="text-white text-xs">
              {user.status ? (
                <div className="bg-green-300 w-fit w-fit px-2 rounded-2xl">
                  {" "}
                  Success
                </div>
              ) : (
                <div className="bg-red-600 w-fit px-2 rounded-2xl">danger</div>
              )}
            </td>
            <td>...</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
