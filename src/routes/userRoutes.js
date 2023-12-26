import { Outlet, Route, Routes } from "react-router-dom";
import User from "../components/User";
import Users from "../components/Users";
import { TestUser } from "../components/TestUser";

const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>This is for users</h1>} />
      </Routes>
      <Routes>
        <Route path="/:id/:name" element={<h1>This is for user</h1>} />
      </Routes>
      <Routes>
        <Route
          element={
            <>
              <h1>This is a parent</h1>
              <Outlet context={{ hello: "World" }} />
            </>
          }
        >
          <Route index element={<Users />} />
          <Route path=":id/:name" element={<User />} />
          <Route path="search/:searchParam" element={<TestUser />} />
        </Route>
      </Routes>
    </>
  );
};

export default UserRoutes;
