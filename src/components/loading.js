import gif from "../preloaderweb.gif";

const Loading = () => {
  return (
    <>
      <main className="maingif">
        <div className="gif">
          <img src={gif} alt="" />
        </div>
      </main>
    </>
  );
};

export default Loading;
