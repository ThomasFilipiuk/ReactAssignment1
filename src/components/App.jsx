import React from "react";
import notes from "../notes";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Note 
          title = "This is the title"
          content = "This is the content"
      />
    </div>
  );
}

export default App;