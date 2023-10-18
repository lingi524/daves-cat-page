import Image from "next/image";
import logo from "../public/daves-cat-page.png";
import SearchBar from "./Search";

const Header = () => {
  return (
    <div className="flex flex-row justify-between w-full items-center flex-wrap">
      <Image
        src={logo}
        width={500}
        height={500}
        alt="Logo for Dave's cat page"
      />
      <SearchBar />
    </div>
  );
};

export default Header;
