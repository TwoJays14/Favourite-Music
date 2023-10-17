import Song from './Song';

const Songs = (props) => {
  const { submittedData, setSubmittedData } = props;

  return (
    <article className=" text-white">
      <h2 className="font-semibold ml-5 text-2xl py-5">Popular</h2>
      {submittedData.map((song, i) => {
        return <Song song={song} key={i} />;
      })}
    </article>
  );
};
export default Songs;
