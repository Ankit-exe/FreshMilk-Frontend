import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

export const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-slate-300 gap-2">
        <div className="flex flex-col">
          <img
            src={user?.picture} 
            className="h-10 w-10 rounded-full hover:border-2 border-white"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-lg p-1">
        <DropdownMenuItem>
          <Link
            to="/user-profile"
            className="font-bold hover:text-blue-600 text-base"
          >
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            className="flex flex-1 font-bold bg-blue-600 hover:bg-blue-500"
            onClick={() => logout()}
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
