import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex text-white items-center font-bold  bg-blue-600 hover:bg-blue-500 p-2 rounded-md  w-full justify-center "
      >
        USER PROFILE{/*  */}
      </Link>
      <Link to="/manage-shop">
        <Button
          variant="ghost"
          className=" w-full flex items-center px-3 font-bol bg-blue-600 hover:bg-blue-500 font-bold tracking-wide text-white hover:text-white"
        >
          Manage Shop
        </Button>
      </Link>

      <Button
        className="flex items-center px-3 font-bol bg-blue-600 hover:bg-blue-500 font-bold tracking-wide"
        onClick={() => logout()}
      >
        Logout
      </Button>
    </>
  );
};
