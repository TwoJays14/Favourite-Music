import Like from './heart.svg';
import { useState } from 'react';
export default function Song3({}) {
  const [heart, setHeart] = useState(false);

  const handleLike = () => {
    setHeart(!heart);
  };
  return (
    <div className="songListContainer w-full">
      <div className="song flex justify-between p-4 w-3/4">
        <div className="flex ">
          <p className="mr-3">3</p>
          <img
            className="w-5  mr-3"
            src="https://i.scdn.co/image/ab67616d0000b2737c173b0dc64913d4635e3594"
            alt="first person shooter"
          />
          <h3 className="font-semibold">
            First Person Shooter &#40;feat. J. Cole&#41;
          </h3>
        </div>
        <div className="">
          <p>229,678,477</p>
        </div>

        <div className="flex">
          <img
            onClick={handleLike}
            className={
              heart
                ? 'w-5 cursor-pointer mr-4 bg-red-500'
                : 'w-5 cursor-pointer mr-4'
            }
            src={Like}
            alt="like--v1"
          />
          <p>4:07</p>
        </div>
      </div>
    </div>
  );
}
