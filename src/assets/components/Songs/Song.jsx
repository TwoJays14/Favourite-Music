import Like from './heart.svg';
import { useState } from 'react';

export default function Song(props) {
  const { song } = props;

  const [heart, setHeart] = useState(false);

  const handleLike = () => {
    setHeart(!heart);
  };

  return (
    <div className="songListContainer w-full text-white">
      <div className="song flex justify-between p-4 w-3/4 ">
        <div className="flex ">
          <p className="mr-3">1</p>
          <img
            className="w-5 mr-3"
            src="https://wp.hnhh.com/wp-content/uploads/2023/10/for-all-the-dogs.png"
            alt="first person shooter"
          />
          <h3 className="font-semibold">{song.songName}</h3>
        </div>
        <div>
          <p>{song.numPlays}</p>
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
          <p>{song.duration}</p>
        </div>

        {/* {heart && <h4>Favourited!</h4>} */}
      </div>
    </div>
  );
}
