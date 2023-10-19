"use client";

import { useState } from "react";
import CatCard from "./CatCard";
import Popup from "./modals/Popup";
import useLocalStorage from "@/hooks/useLocalStorage";
import { CatProps } from "@/app/types/types";

const Main = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const initialCats: CatProps[] = [
    {
      id: 0,
      name: "Lingon",
      gender: "Male",
      bio: "Lingon is named after the berry and was adopted from a farm. He does bite quite a bit but we still love him!",
      date: "1",
      month: "August",
      year: "2018",
      image: "",
    },
    {
      id: 1,
      name: "Beans",
      gender: "Female",
      bio: "Beans is a very sweet little kittie! Does not bite that much",
      date: "2",
      month: "April",
      year: "2022",
      image: "",
    },
  ];

  const [cats, setCats] = useLocalStorage("cats", initialCats);

  function toggle() {
    setShowPopup((showPopup) => !showPopup);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full 2xl:grid-cols-4">
      {cats.map((cat: CatProps) => (
        <CatCard
          key={cat.id}
          cat={cat}
          cats={cats}
          setCats={setCats}
          setShowPopup={setShowPopup}
        />
      ))}
      <button
        className="flex flex-col justify-center items-center bg-white text-pink-500 hover:text-white rounded-md p-6 h-auto w-auto bg-opacity-70 min-h-[228px] hover:bg-pink-500 hover:bg-opacity-70"
        onClick={() => toggle()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-24 h-24"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
            clipRule="evenodd"
          />
        </svg>
        Add Cat
      </button>
      {showPopup ? (
        <Popup setShowPopup={setShowPopup} setCats={setCats} cats={cats} />
      ) : (
        false
      )}
    </div>
  );
};

export default Main;
