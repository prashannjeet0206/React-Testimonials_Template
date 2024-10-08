import Testimonials from "./Components/Testimonials";
import reviews from "./data";

function App() {
  return (
    <div className="bg-gray-300 flex flex-col items-center justify-center w-full h-[768px]">
      <div className="m-3">
        <h1 className="text-3xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-500 w-[15.5vw] h-[3px] mb-1"></div>
      </div>
      <Testimonials review={reviews} />
    </div>
  );
}

export default App;
