import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
const itemUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const cocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${itemUrl}${id}`);
      return data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(cocktailQuery(id));
    return { id };
  };
const Cocktail = () => {
  const { id } = useLoaderData();
  const { data: drinks } = useQuery(cocktailQuery(id));
  // if (!data) return <h2>Something went wrong...</h2>;
  if (!drinks) return <Navigate to={"/"} />;

  const drink = drinks[0];
  const {
    strDrink,
    strAlcoholic,
    strCategory,
    strDrinkThumb,
    strGlass,
    strInstructions,
  } = drink;

  const ingredients = Object.entries(drink)
    .filter(([key, value]) => key.startsWith("strIngredient") && value)
    .map(([_, value]) => value);

  const measure = Object.entries(drink)
    .filter(([key, value]) => key.startsWith("strMeasure") && value)
    .map(([_, value]) => value);

  const combined = ingredients.map((ingredient, index) => {
    return { id: uuidv4(), ingredient, measure: measure[index] || "lil bit" };
  });

  // const validIngredients = Object.keys(drink)
  //   .filter((key) => key.startsWith("strIngredient") && drink[key] !== null)
  //   .map((key) => drink[key]);
  // console.log(validIngredients);

  return (
    <Wrapper>
      <header>
        <Link to={"/"} className="btn">
          back home
        </Link>
        <h3>{strDrink}</h3>
      </header>
      <div className="drink">
        <img src={strDrinkThumb} alt={strDrink} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">drink : </span>
            {strDrink}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {strCategory}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {strGlass}
          </p>
          <p>
            <span className="drink-data">instructions : </span>
            {strInstructions}
          </p>
          <h4 className="drink-data">ingredients</h4>
          <ul>
            {combined.map((item) => {
              return (
                <li className="ing" key={item.id}>
                  {item.ingredient} : {item.measure}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink p,
  .drink li {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  h4 {
    text-align: center;
  }

  @media (min-width: 992) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;
export default Cocktail;
