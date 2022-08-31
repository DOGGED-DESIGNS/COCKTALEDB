import { Link } from "react-router-dom";
// import im from "../";
import { useContext } from "react";
import { General } from "../context/generalcontext";
import Singlecocktale from "./single";

const Cocktallist = () => {
  const { isloading, cocktale, setSearch } = useContext(General);
  return (
    <>
      <div className="grid">
        {cocktale.map((ma, index) => {
          return <Singlecocktale {...ma} key={index} />;
        })}
      </div>
    </>
  );
};

export default Cocktallist;
