import CatCard from "./CatCard";

const Main = () => {
  const five = [4, 5, 6, 7, 2, 3, 2, 2, 2];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full 2xl:grid-cols-4 ">
      {five.map((x) => (
        <CatCard key={x} />
      ))}
      <button className="bg-white rounded-md p-6 h-auto w-auto bg-opacity-70">
        Add Cat
      </button>
    </div>
  );
};

export default Main;
