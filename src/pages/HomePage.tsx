import heroimg from "@/assets/waves.svg";
import milk from "@/assets/hero.png";
import { useEffect, useState } from "react";
import ios from "@/assets/ios.jpg";
import avail from "@/assets/Google-Play-and-App-Store.webp";
import { SearchBar, SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleSeachSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  const words = ["WANT", "LIKE", "DRINK"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <main className="flex flex-col grid-rows-2 pb-10">
      <section className="row-span-1">
        <div className="flex flex-col relative items-center">
          <div className=" bg-cover bg-[#226fc9] w-full h-[600px]"></div>
          <img src={heroimg} alt="Hero Image" className="w-full" />
          <div className=" absolute w-full grid grid-cols-1 md:grid-cols-2 container lg:px-[50px] mt-9 ">
            <div className="grid content-center lg:mt-[-200px]  md:mt-9  space-y-[-10px]">
              <label className="font-bold text-lg text-white tracking-wide ">
                FRESH MILK
              </label>
              <p className="font-extrabold text-[50px] text-white tracking-wide ">
                THAT'S WHAT
              </p>
              {
                <label className="font-extrabold text-white text-[60px]">
                  I {words[currentWordIndex]}
                </label>
              }

              <p className="font-medium text-white text-wrap ">
                "Indulge in the creamy goodness of Fresh Milk! From our dairy to{" "}
                your doorstep, savor the rich taste and quality of our
                farm-fresh milk. Experience freshness like never before!"
              </p>
            </div>
            <div className=" col-span-1">
              <img
                src={milk}
                alt="Hero Image"
                className="h-300 w-300 mx-auto lg:mt-[-100px] z-0 drop-shadow-2xl shadow-black filter"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-12 z-10 row-span-2 container mt-40 md:-mt-20 ">
        <div className="bg-white border-2 border-slate-200 bg-opacity-10 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center md:px-32">
          <h1 className="text-5xl font-bold tracking-tight text-blue-500">
            Tuck into a takeway today
          </h1>
          <span className="text-xl">Food is just a click away!</span>
          <SearchBar
            placeHolder="Search by City or Shop"
            onSubmit={handleSeachSubmit}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5 p-5">
          <img src={ios} alt="APP" className="p-5 md:p-20" />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tighter">
              Order even faster!
            </span>
            <span>
              Download the FreshMilk App for faster ordering and personalised
              recommendations.
            </span>
            <img src={avail} alt="availability" className="h-32 w-52" />
          </div>
        </div>
      </section>
    </main>
  );
};
