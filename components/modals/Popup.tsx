"use client";
import { useState } from "react";
import { PopupProps } from "../../app/types/types";

const Popup: React.FC<PopupProps> = ({ setShowPopup, setCats, cats }) => {
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [date, setDate] = useState<string>("1");
  const [month, setMonth] = useState<string>("January");
  const [year, setYear] = useState<string>("2010");
  const [image, setImage] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let id = cats.length > 0 ? Math.max(...cats.map((t) => t.id)) + 1 : 0;
    setCats([...cats, { id, name, gender, bio, date, month, year, image }]);
    setShowPopup(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      setImage(selectedFile.name);
    }
    //The select works but I've not had the time to set up a server to host the images so that I can use them
  };

  return (
    <div className="bg-black w-screen h-screen fixed top-0 left-0 bg-opacity-30	">
      <div className="bg-white p-12 rounded-md relative mx-auto mt-20 max-w-lg flex flex-col gap-5">
        <form
          className="w-full flex flex-col gap-5"
          id="addCat"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className="flex flex-wrap">
            <div className="w-full">
              <label className="block   tracking-wide  text-black text-xs font-bold mb-2 w-full">
                Cat name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200  text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                placeholder="Jane"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="relative">
            <label className="block   tracking-wide  text-black text-xs font-bold mb-2">
              Cat gender
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200  text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled></option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="They have not told me their gender">
                They have not told me their gender
              </option>
            </select>
            <div className="pointer-events-none absolute top-10 right-0 flex items-center px-2  text-black">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div className="w-full">
            <label className="block tracking-wide  text-black text-xs font-bold mb-2">
              Cat biography
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200  text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="bio"
              placeholder="Some info about the cat"
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block   tracking-wide  text-black text-xs font-bold mb-2">
                Birthday
              </label>
              <input
                className="appearance-none block w-full bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="date"
                type="number"
                placeholder="1"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block   tracking-wide  text-black text-xs font-bold mb-2">
                Month
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200  text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="month"
                  onChange={(e) => setMonth(e.target.value)}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled></option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2  text-black">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide  text-black text-xs font-bold mb-2">
                Year
              </label>
              <input
                className="appearance-none block w-full bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="year"
                type="number"
                placeholder="2019"
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full">
              <label className="block tracking-wide text-black text-xs font-bold mb-2">
                Cat Image
              </label>
              <p className="text-gray-400">I dont work just yet ☺️</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
        </form>
        <div className="flex flex-row gap-5 justify-between">
          <button
            onClick={() => setShowPopup(false)}
            className="hover:text-pink-500 hover:underline font-bold"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="addCat"
            value="Submit"
            className="bg-pink-500 p-2 rounded-lg text-sm border-2 border-transparent text-white font-bold flex justify-center items-center  hover:bg-white hover:text-pink-500 hover:border-2 hover:border-solid hover:border-pink-500"
          >
            Add / Update Cat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
