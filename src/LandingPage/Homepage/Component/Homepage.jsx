import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Homepage = () => {
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

      <div className=" text-center font-bold  pt-[97px] h-[500px] bg-slate-700">
        <h1 className="text-[48px]">MovIE</h1>
        <h2 className="font-medium text-[32px] pb-4">
          Selamat Datang Di MoVIE
        </h2>
        <p className="w-[600px] mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
          impedit. Ipsam, cupiditate! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolorem quae numquam obcaecati.
        </p>
      </div>

      <div className="w-full bg-white h-[140px] py-4">
        <div className="flex justify-between items-center px-6 py-6">
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

export default Homepage;
