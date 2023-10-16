import '../../../index.css';

const Header = () => {
  return (
    <header className="w-full h-[600px] bg-cover object-cover text-white flex justify-end">
      <div className="ml-5 mt-auto w-full">
        <p className="font-semibold">Verified Artist</p>
        <h1 className="font-bold text-9xl">J. Cole</h1>
        <p className="my-5">44,486,277 monthly listeners</p>
      </div>
    </header>
  );
};

export default Header;
