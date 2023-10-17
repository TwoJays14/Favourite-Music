import { useState } from 'react';
const Form = (props) => {
  const { submittedData, setSubmittedData, input, setInput } = props;

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = {
      songName: input.songName,
      numPlays: input.numPlays,
      duration: input.duration,
    };

    setSubmittedData([...submittedData, newFormData]);

    setInput({
      songName: '',
      numPlays: '',
      duration: '',
    });
  };

  return (
    <>
      <h2 className="font-semibold text-3xl text-center mt-5 text-white mb-4">
        Add Your Favourite Song
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-6/12 mx-auto bg-gradient-to-t from-slate-900 to-slate-600"
      >
        <input
          className="w-full bg-gradient-to-t from-slate-900 to-slate-600 text-white  p-5 text-xl mb-2"
          type="text"
          name="songName"
          onChange={handleInput}
          value={input.songName}
          placeholder="Song Name..."
        />
        <input
          className="w-full bg-gradient-to-t from-slate-900 to-slate-600 text-white p-5 text-xl mb-2"
          type="text"
          name="numPlays"
          onChange={handleInput}
          value={input.numPlays}
          placeholder="Number of Plays"
        />
        <input
          className="w-full bg-gradient-to-t from-slate-900 to-slate-600 text-white p-5 text-xl mb-2"
          type="text"
          name="duration"
          onChange={handleInput}
          value={input.duration}
          placeholder="Track Duration"
        />
        <button
          className="text-white p-5 uppercase font-semibold text-2xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
