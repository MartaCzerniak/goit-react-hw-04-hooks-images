import styled from "@emotion/styled";
import { useState } from "react";

const FancySearch = styled.header({
  top: 0,
  left: 0,
  position: "sticky",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "64px",
  padding: "12px 24px",
  color: "#fff",
  backgroundColor: "#3f51b5",
  boxShadow:
    "0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
});

const FancyInput = styled.input({
  position: "relative",
  padding: "10px 10px",
  minWidth: "500px",
  borderRadius: 3,
  border: "none",
  outline: "none",
  fontSize: 16,
});

const FancyButton = styled.button({
  position: "relative",
  left: 5,
  right: 0,
  marginLeft: "auto",
  marginRight: "auto",
  padding: "11px 10px",
  color: "grey",
  border: "none",
  borderRadius: 3,
});
const Searchbar = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(name);
    setName("");
  };

  const handleChange = (event) => {
    setName(event.currentTarget.value.toLowerCase());
  };

  return (
    <FancySearch className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <FancyButton type="submit" className="button">
          <span className="button-label"></span>
        </FancyButton>

        <FancyInput
          onChange={handleChange}
          value={name}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </FancySearch>
  );
};

export default Searchbar;
