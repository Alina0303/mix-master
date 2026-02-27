import styled from "styled-components";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }
  return (
    <Wrapper>
      {drinks.map((drink) => {
        return <CocktailCard key={drink.idDrink} {...drink} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;
export default CocktailList;
