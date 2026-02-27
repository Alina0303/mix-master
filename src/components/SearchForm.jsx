import { Form, useNavigation } from "react-router-dom";
import styled from "styled-components";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" disabled={isSubmitting} className="btn">
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 6rem;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 2rem;
  }
  .form-input {
    outline: none;
    border-top-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }
  .btn {
    border-top-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
`;
export default SearchForm;
