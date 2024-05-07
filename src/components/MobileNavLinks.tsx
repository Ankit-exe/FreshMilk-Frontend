import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex text-blue-600 items-center font-bold hover:bg-slate-100 p-2 rounded-md  w-full justify-center "
      >
        USER PROFILE{/*  */}
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
