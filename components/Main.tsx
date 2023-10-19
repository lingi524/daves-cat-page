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
      name: "Lisa Larsson",
      gender: "Female",
      bio: "A great Swedish painter and a sweet cat",
      date: "1",
      month: "August",
      year: "2018",
    },
    {
      id: 1,
      name: "Beans",
      gender: "Female",
      bio: "Sweetest fkn kitty",
      date: "2",
      month: "April",
      year: "2022",
    },
  ];

  const [cats, setCats] = useLocalStorage("cats", initialCats);

  function toggle() {
    setShowPopup((showPopup) => !showPopup);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full 2xl:grid-cols-4">
      {cats.map((cat: CatProps) => (
        <CatCard key={cat.id} cat={cat} cats={cats} setCats={setCats}/>
      ))}
      <button
        className="bg-white rounded-md p-6 h-auto w-auto bg-opacity-70"
        onClick={() => toggle()}
      >
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
