import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ review }) => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="absolute -left-4 -top-24">
        <img
          src={review.image}
          alt="image"
          className="h-[140px] w-[140px] rounded-full"
        />
      </div>
      <div className="mb-2">
        <h2 className="font-bold text-xl">{review.name}</h2>
        <div>
          <p className="text-violet-300 uppercase text-xs font-bold">
            {review.job}
          </p>
        </div>
      </div>
      <div>
        <FaQuoteLeft />
      </div>
      <div className="m-2">
        <p className="text-center">{review.text}</p>
      </div>
      <div>
        <FaQuoteRight />
      </div>
    </div>
  );
};
export default Card;
