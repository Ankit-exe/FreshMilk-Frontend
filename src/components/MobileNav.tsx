import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MobileNavLinks } from "./MobileNavLinks";

const items = ["HOME", "ABOUT", "PRODUCT", "CONTACT"];

export const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const [selected, setSelected] = useState("HOME");

  const handleSelect = (item: string) => {
    setSelected(item);
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="space-y-6">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <img
                src={user?.picture}
                alt="profile"
                className="h-10 w-10 rounded-full"
              />
              {user?.name}
            </span>
          ) : (
            <span>Welcome to FreshMilk.com!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="w-full flex flex-col justify-center">
          {items.map((item) => (
            <Button key={item}
              className={`w-full ${
                selected === item
                  ? "bg-slate-100 text-white"
                  : "bg-white text-blue-600 hover:bg-slate-100"
              } text-blue-600 font-bold mt-3 hover:bg-slate-100 shadow-none`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </Button>
          ))}
        </SheetDescription>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              className="flex-1 font-bold bg-blue-600 hover:bg-blue-500"
              onClick={async () => loginWithRedirect()}
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
