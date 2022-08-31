import Cocktallist from "../components/cocktalelist";
import Form from "../components/searchform";
import { useContext } from "react";
import { General } from "../context/generalcontext";
import Loading from "../components/loading";
import Errorz from "./error";

const Home = () => {
  const { isloading, cocktale, setSearch, errorz } = useContext(General);

  return (
    <>
      <main className="main">
        <section className="only">
          <Form />
          {isloading ? <Loading /> : <Cocktallist />}
          {errorz && <h4 className="error"> sorry no result found </h4>}
        </section>
        <h2 className="created">
          created by <span>dogged_designs</span>{" "}
        </h2>
      </main>
    </>
  );
};

export default Home;
