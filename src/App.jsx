import "./App.css";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/Searchbar";
import styled from "@emotion/styled";
import { useState } from "react";
const FancyApp = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridGap: "16px",
  paddingBottom: "24px",
});
const App = () => {
  const [name, setName] = useState("");
  const handleFormSubmit = (name) => {
    setName(name);
  };
  return (
    <FancyApp>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery name={name} />
    </FancyApp>
  );
};

export default App;
