import Like from './heart.svg';
import { useState } from 'react';

export default function Song2({}) {
  const [heart, setHeart] = useState(false);

  const handleLike = () => {
    setHeart(!heart);
  };
  return (
    <div className="songListContainer w-full">
      <div className="song flex justify-between p-4 w-3/4">
        <div className="flex ">
          <p className="mr-3">2</p>
          <img
            className="w-5 mr-3"
            src="https://i.redd.it/wyh755z4ral51.png"
            alt="first person shooter"
          />
          <h3 className="font-semibold">No Role Modelz</h3>
        </div>
        <div>
          <p>1,905,737,596</p>
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
