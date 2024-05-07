import { Link } from "react-router-dom"
import logo from "./../assets/pngegg.png"
import { MobileNav } from "./MobileNav"
import { MainNav } from "./MainNav"

export const Header = () => {
  return (
    <div className="border-b-2 border-b-white-500 py-2 bg-[#226fc9] z-10" >
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="h-16 w-16 flex flex-row items-center">
                <img src={logo} />
                <span className="text-3xl font-bold tracking-tight text-white">FreshMilk.com</span>
            </Link>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block">
                <MainNav />
            </div>

        </div>
    </div>
  )
}
