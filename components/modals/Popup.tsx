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

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    let id = cats.length > 0 ? Math.max(...cats.map((t) => t.id)) + 1 : 0;
    //Add If-statement, if its not empty, do this:
    setCats([...cats, { id, name, gender, bio, date, month, year }]);
    setShowPopup(false);
  };

  return (
    <div className="bg-black w-screen h-screen fixed top-0 left-0 bg-opacity-30	">
      <div className="bg-white p-12 rounded-md relative mx-auto mt-20 max-w-lg flex flex-col gap-5">
        <form
          className="w-full  flex flex-col gap-5"
          id="addCat"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className="flex flex-wrap">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Cat name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                placeholder="Jane"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="relative">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Cat gender
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Female</option>
              <option>Male</option>
              <option>Prefer not to say</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Cat biography
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                placeholder="Jane"
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Birthday
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="date"
                type="number"
                placeholder="1"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Month
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="month"
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Year
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="year"
                type="number"
                placeholder="2019"
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className="flex flex-row gap-2 justify-end">
          <button onClick={() => setShowPopup(false)}>Cancel</button>
          <button type="submit" form="addCat" value="Submit">
            Add/Update Cat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
