import { useOutletContext, useParams } from "react-router-dom";

const User = () => {
  const { id, name } = useParams();
  const { hello } = useOutletContext();
  return (
    <h1>
      This is {name} page of {id} and the context is {hello}.
    </h1>
  );
};

export default User;
