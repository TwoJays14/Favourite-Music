import { Song } from './Song1';
import Song2 from './Song2';
import Song3 from './Song3';
import Song4 from './Song4';
import { Song5 } from './Song5';

const Songs = () => {
  return (
    <article className=" text-white">
      <h2 className="font-semibold ml-5 text-2xl py-5">Popular</h2>
      <Song />
      <Song2 />
      <Song3 />
      <Song4 />
      <Song5 />
    </article>
  );
};
export default Songs;
