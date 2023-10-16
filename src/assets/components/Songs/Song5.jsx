import Like from './heart.svg';
import { useState } from 'react';

export function Song5({}) {
  const [heart, setHeart] = useState(false);

  const handleLike = () => {
    setHeart(!heart);
  };
  return (
    <div className="songListContainer w-full">
      <div className="song flex justify-between p-4 w-3/4">
        <div className="flex ">
          <p className="mr-3">5</p>
          <img
            className="w-5 mr-3"
            src="https://townsquare.media/site/812/files/2016/09/J-Cole-Cole-World-Cover-Feature-Image.jpg?w=980&q=75"
            alt="first person shooter"
          />
          <h3 className="font-semibold">Work Out</h3>
        </div>
        <div className="">
          <p>799,247,489</p>
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
