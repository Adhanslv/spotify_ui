import React from "react";
import "../App.css";
// Font Awesome
import { FaLaptop, FaHome, FaSearch, FaBookMedical } from "react-icons/fa";
// Bootstrap Icon
import { BsPauseFill } from "react-icons/bs";

function Beranda() {
  return (
    <div className="pl-6 pt-6 bg-black text-white  font-sans  ">
      <p className="text-lg font-bold">What your friend are up to</p>
      <div className="flex avatar cursor-pointer">
        <img
          className="rounded-full bgs-contain bg-repeat"
          src={require("../img/of.png")}
          alt="avatar"
        />
        <img
          className="rounded-full bg-contain bg-repeat"
          src={require("../img/smoker.jpg")}
          alt="avatar"
        />
        <img
          className="rounded-full bg-contain bg-repeat"
          src={require("../img/satu.jpg")}
          alt="avatar"
        />
        <img
          className="rounded-full bg-contain bg-repeat"
          src={require("../img/satu.jpg")}
          alt="avatar"
        />
        <div className="info flex pt-36 font-sans font-bold">
          <p className="satu">You</p>
          <p className="dua">Adhan</p>
          <p className="tiga">Vito</p>
          <p className="empat">Zaza</p>
        </div>
      </div>
      {/* Main Content */}
      <div className="mainContent pt-10 font-sans ">
        <p className="text-lg font-bold">Recently played</p>
        <div className="recent flex cursor-pointer">
          <img
            className="rounded bg-contain bg-repeat"
            src={require("../img/cover/cover2.jpg")}
            alt="avatar"
          />
          <img
            className="rounded bg-contain bg-repeat"
            src={require("../img/cover/oasis.jpg")}
            alt="avatar"
          />
          <img
            className="rounded bg-contain bg-repeat"
            src={require("../img/cover/cover3.jpg")}
            alt="avatar"
          />
          <img
            className="rounded bg-contain bg-repeat"
            src={require("../img/cover/cover1.jpg")}
            alt="avatar"
          />
          <div className="coverInfo flex pt-36 font-sans font-bold">
            <p className="coverInfo1">GKMC</p>
            <p className="coverInfo2">D.Maybe</p>
            <p className="coverInfo3">Salad </p>
            <p className="coverInfo4">2</p>
          </div>
        </div>
      </div>
      {/* End Main Content */}
      <div className="heavyContent pt-10 font-sans">
        <p className="text-lg font-bold">Heavy Content</p>
        <div className="heavy flex cursor-pointer">
          <img
            className="rounded bg-contain bg-repeat"
            src={require("../img/cover/heavy3.jpg")}
            alt="avatar"
          />
          <img
            className="rounded bg-contain bg-repeat"
            src={require("../img/cover/heavy1.jpg")}
            alt="avatar"
          />
          <img
            className="rounded bg-contain bg-repeat"
            src={require("../img/cover/heavy4.jpg")}
            alt="avatar"
          />
          <img
            className="rounded bg-contain bg-repeat"
            src={require("../img/cover/heavy2.jpg")}
            alt="avatar"
          />
          <div className="heavyInfo flex pt-36 font-bold ">
            <p className="heavy1">murderBoys</p>
            <p className="heavy2">Bateman</p>
            <p className="heavy3">Ninja</p>
            <p className="heavy4">Marlboro</p>
          </div>
        </div>
      </div>
      <div className="sampul pt-16">
        <div className="option ">
          <img
            className="rounded bg-contain bg-repeat"
            src={require("../img/cover/heavy4.jpg")}
            alt="avatar"
          />
        </div>
        <div className="subJudul text-lg">
          <p>
            Drake -<span className="coor"> Pain 1995</span>
          </p>
          <FaLaptop className="komputer  cursor-pointer" />
          <p className="tersedia font-mono">Devices Available </p>
          <BsPauseFill className="pamus cursor-pointer" />
        </div>
        <div className="chossing">
          <div className="icos cursor-pointer pt-10  gap-x-14  flex justify-evenly">
            <FaHome />
            <FaSearch />
            <FaBookMedical />
          </div>
          <div className="title pt-10  gap-x-11  flex justify-evenly">
            <p>Home</p>
            <p>Search</p>
            <p>Library</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
