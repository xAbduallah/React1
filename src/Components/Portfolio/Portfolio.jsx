import React, { useEffect, useState } from "react";

export default function Portfolio() {
  let [popup, setPopup] = useState("");
  const imgPath = "https://routeegy.github.io/startFramework/assets/images/";
  return (
    <>
      {popup !== "" && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            onClick={() => {
              setPopup("");
            }}
            className="rounded-2xl w-10/12 cursor-pointer"
            src={imgPath + popup}
            alt={popup}
          />
        </div>
      )}

      <div className="flex flex-col my-8 items-center">
        <div className="text-center font-bold text-5xl bg-gradient-to-r from-[#00DAFD] to-[#C148FA] text-transparent bg-clip-text mb-12">
          Portfolio Component
        </div>
        <div className="grid grid-cols-3 gap-7 w-11/12">
          {[ "poert1.png", "port2.png", "port3.png", "port3.png", "poert1.png", "port2.png",
          ].map((item) => (
            <div key={item + Math.random()}>
              <img
                onClick={() => {
                  setPopup(item);
                }}
                className="rounded-2xl cursor-pointer"
                src={imgPath + item}
                alt={item}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
