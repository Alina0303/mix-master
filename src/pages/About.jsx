import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <h3>About us</h3>
      <p>
        Discover the world of mixology with our Cocktail Recipes App, powered by
        CocktailsDB. Whether you're a professional bartender or just love
        experimenting at home, this app gives you instant access to thousands of
        cocktail recipes from around the globe. Browse through an extensive
        collection of classic, modern, and creative drinks. Search by cocktail
        name, ingredient, or category to quickly find the perfect drink for any
        occasion. Each recipe includes detailed instructions, a complete
        ingredient list, measurements, and beautiful images to guide you step by
        step.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;

export default About;
