import reactLogo from "../../assets/react.svg";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          className="w-36 absolute top-1/4 cursor-pointer"
          src={reactLogo}
          alt="homeLogo"
        />
        <div className="text-center font-bold text-5xl bg-gradient-to-r from-[#00DAFD] to-[#C148FA] text-transparent bg-clip-text uppercase">
          Start Framework
        </div>
      </div>
    </>
  );
}
