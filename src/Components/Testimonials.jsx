import { useState } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Testimonials = ({ review }) => {
  const [index, setIndex] = useState(0);
  // function for left shift
  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(review.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  // function for right shift
  function rightShiftHandler() {
    if (index + 1 >= review.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  // function for button
  function randomClickHandler() {
    let randomIndex = Math.floor(Math.random() * review.length);
    setIndex(randomIndex);
  }
  return (
    <div className="flex flex-col justify-center items-center w-[50vw] bg-white p-3 rounded-lg">
      <Card review={review[index]} />
      <div className="m-2 flex gap-10 text-2xl">
        <button onClick={leftShiftHandler}>
          <FaAngleLeft />
        </button>
        <button onClick={rightShiftHandler}>
          <FaAngleRight />
        </button>
      </div>
      <div>
        <button
          className="bg-purple-500 text-lg p-2 rounded-lg text-white font-bold m-2"
          onClick={randomClickHandler}
        >
          Surprise me!
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
