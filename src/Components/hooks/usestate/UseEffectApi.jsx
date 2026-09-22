import React from "react";

const UseEffectApi = () => {
  const [state, setState] = useState([]);
  console.log(state, "state........");
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
      const data = await response.json();
      setState(data);
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

export default UseEffectApi;