import logo from "@/assets/pngegg.png";

export const Footer = () => {
  return (
    <div className="bg-[#226fc9] z-10 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex flex-row items-center">
          <img
            src={logo}
            alt="LOGO"
            className="h-14 w-14 flex flex-row items-center"
          />
          <span className="text-3xl font-bold tracking-tight text-white">
            FreshMilk.com
          </span>
        </div>

        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};
