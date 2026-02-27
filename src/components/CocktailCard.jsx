import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";

const CocktailCard = ({
  idDrink,
  strDrink,
  strDrinkThumb,
  strGlass,
  strAlcoholic,
}) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img className="img" src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="footer">
        <h4>{strDrink}</h4>
        <h5>{strGlass}</h5>
        <p>{strAlcoholic}</p>
        <Link to={`cocktail/${idDrink}`} className="btn btn-link">
          details
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  :hover {
    box-shadow: var(--shadow-4);
  }
  .img {
    height: 15rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
    .btn-link {
      text-align: center;
    }
  }
`;
export default CocktailCard;
