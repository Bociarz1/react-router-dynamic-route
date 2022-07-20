import { Outlet } from "react-router-dom";

function Users() {
  return ( 
    <>
      this is USERS PAGE <br/>
      <Outlet/>
    </>
   );
}

export default Users;