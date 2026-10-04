import React, {useEffect, useState} from "react";
import axios from 'axios'

const AxiosApi = () => {
  const [state, setState] = useState([]);
  console.log(state, "state........");
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);

      setState(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>
    {state.map(user => {
      return (
        <ul>
          <li>{user.id}</li>
          <li>{user.name}</li>
        </ul>
      )
    })}
  </div>;
}

export default AxiosApi;