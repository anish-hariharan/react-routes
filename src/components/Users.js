import { Link } from "react-router-dom";

const Users = () => {
  const users = [
    { id: 1, name: "Anish" },
    { id: 2, name: "Tiger" },
  ];
  return (
    <>
      {users.map((user) => {
        const path = `/users/${user.id}/${user.name}`;
        return (
          <h1 key={user.id}>
            <Link to={path}>{user.name}</Link>
          </h1>
        );
      })}
    </>
  );
};

export default Users;
