import React from "react";
import List from "./List";
import Audio from "./Audio";
import{ Provider } from "../context/audios";
const Main = () => {
  return (
    
      <main>
        <Provider>
        <Audio />
        <List />
        </Provider>
      </main>
   
  );
};

export default Main;
