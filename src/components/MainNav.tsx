import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { UsernameMenu } from "./UsernameMenu";

export const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="flex flex-row items-center">
      <div>
        <div className="flex list-none gap-5">
          <li className="font-semibold text-white text-base hover:underline hover:cursor-pointer">
            HOME
          </li>
          <li className="font-semibold text-white text-base hover:underline hover:cursor-pointer">
            ABOUT
          </li>
          <li className="font-semibold text-white text-base hover:underline hover:cursor-pointer">
            PRODUCT
          </li>
          <li className="font-semibold text-white text-base hover:underline hover:cursor-pointer">
            CONTACT
          </li>
        </div>
      </div>
      <div className="ml-2">
        {isAuthenticated ? (
          <UsernameMenu />
        ) : (
          <Button
            variant="ghost"
            className="font-bold bg-slate-200 text-blue-600 hover:text-white hover:bg-blue-500 hover:border-b-white border-2 ml-2"
            onClick={async () => await loginWithRedirect()}
          >
            Log In
          </Button>
        )}
      </div>
    </div>
  );
};
