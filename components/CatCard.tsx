import Image from "next/image";
import frame from "../public/frame.png";

const CatCard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white w-auto h-auto justify-center items-center rounded-md p-6 gap-3 relative">
      <div className="absolute -top-5 -right-2 flex flex-row gap-3">
        <button className="bg-pink-600 p-2 rounded-full text-white w-10 h-10 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-white"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
        </button>
        <button className="bg-pink-600 p-4 rounded-full text-white font-bold w-10 h-10 flex justify-center items-center">
          X
        </button>
      </div>
      <Image
        src={frame}
        width={150}
        height={150}
        alt="A frame that contains a picture of a cat"
      />
      <div className="flex flex-col w-full gap-2">
        <p className="text-2xl">Cat Name</p>
        <p className="italic">Birthdate, Gender</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default CatCard;
