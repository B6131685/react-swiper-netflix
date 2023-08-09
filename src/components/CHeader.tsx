
const CHeader = () => {
  // padding : max-
  return (
    <div className="w-full h-16 flex justify-between items-center bg-black px-[40px] z-50 sticky top-0">
      <section className="Logo">
        <img className="max-h-full h-16" src="./netflix.png" />
      </section>
      <section className="nevigate">
        <h1 className="font-bold flex gap-2 text-sm">
            <div className="text-white place-items-center hidden md:flex">UNLIMITED TV SHOWS & MOVIES</div>
            <div className="bg-nf-red-500 text-white text-sm font-normal py-2 px-5 rounded-sm hover:bg-nf-red-550 hover:cursor-pointer">JOIN NOW</div>
            <div className="text-white font-normal py-2 px-5 border-zinc-400 rounded-sm border-[1px] hover:bg-zinc-800 hover:cursor-pointer">SIGN IN</div>
        </h1>
      </section>
    </div>
  );
};

export default CHeader;
