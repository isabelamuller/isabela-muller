import Image from "next/image";

const stars = [1, 2, 3, 4, 5];

export const BookRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-0 md:pt-4 pt-1">
      {stars.map((star) => {
        const isFull = rating >= star;
        const isHalf = rating === star - 0.5;

        if (isFull) {
          return (
            <Image
              key={star}
              src="/star-full.png"
              alt=""
              width={25}
              height={25}
              className="h-[22px] w-[22px] shrink-0 object-contain"
            />
          );
        }
        if (isHalf) {
          return (
            <div key={star} className="relative h-[22px] w-[22px] shrink-0">
              <Image
                src="/star-full.png"
                alt=""
                width={25}
                height={25}
                className="absolute inset-0 h-[22px] w-[22px] object-contain opacity-20"
              />
              <div className="absolute inset-0 h-[22px] w-[22px] overflow-hidden">
                <Image
                  src="/star-full.png"
                  alt=""
                  width={25}
                  height={25}
                  className="h-[22px] w-[22px] object-contain"
                  style={{
                    clipPath: "inset(0 50% 0 0)",
                  }}
                />
              </div>
            </div>
          );
        }

        return (
          <Image
            key={star}
            src="/star-full.png"
            alt=""
            width={25}
            height={25}
            className="h-[22px] w-[22px] shrink-0 object-contain opacity-40"
          />
        );
      })}
    </div>
  );
};
