import { Link } from "react-router-dom";

type Props = {
    total : number;
    city:string;
}

export const SearchResultInfo = ({total,city}:Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
        <span>
            {total} Shops found in {city}
            <Link to="/" className="text-sm font-semibold underline cursor-pointer text-blue-500 ml-2">Change Loacation</Link>
        </span>
        sort dropdown
    </div>
  )
}
