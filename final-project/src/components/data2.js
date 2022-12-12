import React from "react";
import { useEffect, useState } from "react";

const data2 = () => {
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=e4082d8b6a175161863c83b42482f659&language=en-US&page=1")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setArray(data.results);
      });
  }, []);
  return data;
};

export default data2;
