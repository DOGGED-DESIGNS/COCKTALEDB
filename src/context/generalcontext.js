// import { use } from "react";
import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const General = createContext();

const Generalcontext = (props) => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const [search, setSearch] = useState("a");

  const [cocktale, setCocktale] = useState([]);

  const [isloading, setIsLoading] = useState(true);

  const [errorz, setError] = useState(false);

  const drawData = () => {
    setIsLoading(true);
    axios
      .get(`${url}${search}`)
      .then((res) => {
        setIsLoading(false);
        const processing = res.data;
        // console.log(processing);
        if (!processing.drinks) {
          setError(true);
          setCocktale([]);
          setIsLoading(false);
        } else {
          setError(false);
          const returnz = processing.drinks.map((pro) => {
            const {
              idDrink,
              strDrink,
              strGlass,
              strAlcoholic,
              strDrinkThumb,
              strIngredient1,
              strIngredient2,
              strIngredient3,
            } = pro;

            return {
              idDrink: idDrink,
              img: strDrinkThumb,
              name: strDrink,
              glass: strGlass,
              alcoholic: strAlcoholic,
              ingredient1: strIngredient1,
              ingredient2: strIngredient2,
              ingredient3: strIngredient3,
            };
          });

          const countReturnz = returnz.slice(0, 20);
          setCocktale(countReturnz);

          console.log(countReturnz);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err);
      });
  };

  useEffect(() => {
    drawData();
  }, [search]);

  const inYur = (take) => {
    setSearch(take);
  };

  return (
    <>
      <General.Provider value={{ isloading, cocktale, inYur, errorz }}>
        {props.children}
      </General.Provider>
    </>
  );
};

export default Generalcontext;
