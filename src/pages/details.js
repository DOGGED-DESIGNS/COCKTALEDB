import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import im from "../bigimg-8.png";
import axios from "axios";
const Detailscocktale = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  const run = () => {
    axios
      .get(`${url}${id}`)
      .then((res) => {
        const final = res.data.drinks[0];
        // setDetail(final);
        console.log(final);

        const setitall = {
          idDrink: final.idDrink,
          img: final.strDrinkThumb,
          name: final.strDrink,
          glass: final.strGlass,
          alcoholic: final.strAlcoholic,
          category: final.strCategory,
          ingredient1: final.strIngredient1,

          ingredient2: final.strIngredient2,
          ingredient3: final.strIngredient2,
        };
        setDetail(setitall);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    run();
  }, []);

  const {
    idDrink,
    img,
    name,
    glass,
    alcoholic,
    category,
    ingredient1,
    ingredient2,
    ingredient3,
  } = detail;

  console.log(detail);

  const ingredientz = [ingredient1, ingredient2, ingredient3];

  return (
    <>
      <main className="main">
        <section className="only only--details">
          <a href="/">
            <button href="index.html" className="btn">
              back to home
            </button>
          </a>

          <h5>{name}</h5>
          <div className="details-grid">
            <div className="details-grid__cover">
              <div className="details-grid__cover--img">
                <img src={img} alt="" />
              </div>
            </div>

            <div className="details-grid__cover">
              <div className="details-grid__cover--ingredients">
                <p>
                  <span className="span">name:</span> {name}
                </p>
                <p>
                  <span className="span">glass:</span> {glass}
                </p>
                <p>
                  <span className="span">info:</span> {alcoholic}
                </p>
                <p>
                  <span className="span">category:</span> {category}
                </p>
                <p>
                  <span className="span">ingredients:</span>
                  {ingredientz.map((ing) => {
                    return <span>{ing}, </span>;
                  })}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Detailscocktale;
