// idDrink: idDrink,
//            img: strDrinkThumb,
//            name: strDrink,
//            glass: strGlass,
//            ingredient1: strIngredient1,
//            ingredient2: strIngredient2,
//            ingredient3: strIngredient3,

const Singlecocktale = ({
  idDrink,
  img,
  name,
  glass,
  alcoholic,
  ingredient1,
  ingredient2,
  ingredient3,
}) => {
  return (
    <>
      {/* <h2>i am the single cocktale</h2> */}
      <div className="grid__cover">
        <div className="card">
          <div className="card__img">
            <img src={img} alt="" />
          </div>

          <h3>{name}</h3>
          <h4>{glass}</h4>
          <h5>{alcoholic}</h5>

          <a href={`details/${idDrink}`}>
            <button className="btn">details</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Singlecocktale;
