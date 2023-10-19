import Image from "next/image";
import beans from "../public/beans.jpg";
import { CatCardProps } from "@/app/types/types";

const CatCard = ({ cat, cats, setCats, setShowPopup }: CatCardProps) => {
  function sendCatToValhall(id: number) {
    const updateCats = cats.filter((t: { id: number }) => t.id !== id);
    setCats(updateCats);
  }

  function updateCatInfo(selectedId: number) {
    const allCatsInStorage = JSON.parse(localStorage.getItem("cats")!);
    const selectedCat = allCatsInStorage.find(
      (cat: { id: number }) => cat.id === selectedId
    );
    console.log(selectedCat);
    setShowPopup(true);
    //Ideally I'd like to display the already existing data in the popup by sending the selectedCat up to that component
    //And then update the entry in the array with the matching id on save
  }

  return (
    <div className="flex flex-col lg:flex-row bg-white w-auto h-auto justify-center items-center rounded-md p-6 gap-3 relative">
      <div className="absolute -top-5 -right-2 flex flex-row gap-3">
        <button
          onClick={() => updateCatInfo(cat.id)}
          className="bg-pink-500 p-2 rounded-full text-white w-10 h-10 flex justify-center items-center hover:bg-white hover:text-pink-500 hover:border-2 hover:border-solid hover:border-pink-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
        </button>
        <button
          onClick={() => sendCatToValhall(cat.id)}
          className="bg-pink-500 p-4 rounded-full text-white font-bold w-10 h-10 flex justify-center items-center  hover:bg-white hover:text-pink-500 hover:border-2 hover:border-solid hover:border-pink-500"
        >
          X
        </button>
      </div>
      <Image
        src={beans}
        width={150}
        height={150}
        alt="A frame that contains a picture of a cat"
        className="w-auto h-auto"
        priority
      />
      <div className="flex flex-col w-full gap-2">
        <p className="text-2xl">{cat.name}</p>
        <p className="italic text-xs">
          Born the {cat.date}th of {cat.month} {cat.year}, {cat.gender}
        </p>
        <p className="text-sm">{cat.bio}</p>
      </div>
    </div>
  );
};

export default CatCard;
