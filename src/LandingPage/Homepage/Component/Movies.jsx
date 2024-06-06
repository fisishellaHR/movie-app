import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { apikey } from "../../../API";

export const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const onSearchHandler = async () => {
    if (!searchTerm) {
      return; // Early exit if searchTerm is empty
    }

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&apiKey=${apikey}`
      );
      console.log(response.data);
      setData(response.data.Search || []); // Update data state with response data
    } catch (error) {
      console.error("Error fetching data:", error); // Handle errors gracefully
    }
  };

  return (
    <>
      <div className="w-full h-[104px] bg-primary">
        <div className="flex justify-between items-center py-9 gap-x-40 px-9 text-secondary font-semibold text-xl ">
          <a href="">
            <h1>MovIE</h1>
          </a>
          <div className="flex  justify-center items-center gap-x-9">
            <a href="">
              <h2>Home</h2>
            </a>
            <a href="">
              <h2>Movies</h2>
            </a>
            <a href="">
              <h2>Recomendation</h2>
            </a>
          </div>
        </div>
      </div>
      <div className=" text-center font-bold  pt-[97px] h-[500px] bg-white ">
        <h1 className="text-[48px]">MovIE</h1>
        <h2 className="font-medium text-[32px] pb-4">
          Kamu Mau Mencari Film Kamu secara gratis ?
        </h2>
        <p className="w-[600px] mx-auto">
          You`ve come to the right place. We`ve got a bunch here and you can
          start watching right now
        </p>
        <div className="bg-primary w-80 h-9 flex rounded-xl justify-between items-center mx-auto px-2 mt-5 ">
          <input
            type="text"
            className=" text-left bg-primary  focus:outline-none text-white font-bold"
            placeholder="Enter Keywords"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className=" bg-secondary text-primary  rounded-xl px-4"
            onClick={onSearchHandler}
          >
            Search
          </button>
        </div>
      </div>
      <div className="container flex flex-wrap justify-center items-center gap-16 mb-40">
        {data &&
          data.map((movie) => (
            <div key={movie.imdbID} className="w-80">
              <img src={movie.Poster} alt={movie.Title} />
              <h1 className="font-bold text-[25px] text-left">{movie.Title}</h1>
              <div className="w-80">
                <p className="text-primary text-sm text-left">{movie.Type}</p>
                <p className="text-secondary text-sm text-left">
                  Tanggal Terbit: {movie.Year}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="w-full bg-primary h-[200px] py-4 ">
        <div className="flex justify-between md:justify-center sm:justify-center items-center px-6 py-6 flex-wrap gap-x-9">
          <div>
            <h1 className="font-extrabold text-xl">MovIE</h1>
          </div>
          <div>
            <p className="w-[800px] text-center py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              deleniti dicta culpa nobis est quos dolorem suscipit quis enim,
              sunt voluptas rerum distinctio facilis accusamus voluptate odit,
              quia, eius aliquid?
            </p>
          </div>
          <div className="flex gap-x-3">
            <a href="">
              <FaInstagram size={28} />
            </a>
            <a href="">
              <FaFacebook size={28} />
            </a>
            <a href="">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
