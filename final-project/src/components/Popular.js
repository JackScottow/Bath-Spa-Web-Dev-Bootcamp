import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Pagination from "./Pagination";
const Popular = () => {
  const [array, setArray] = useState(null);
  // e4082d8b6a175161863c83b42482f659
  // https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=e4082d8b6a175161863c83b42482f659&language=en-US")
      .then((response) => response.json())
      .then((data) => {
        setArray(data);
      });
  }, []);
  return (
    <div>
      <h1 className="page-title">Popular Movies</h1>
      {array ? (
        <div className="products-container">
          <Pagination list={array} />
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Popular;
// {array ? (
//     <div className="products-container">
//       {array.map((item) => (
//         <Card className="text-center m-4 shadow" key={item.id}>
//           <Card.Img
//             variant="top"
//             src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`}
//             alt="Product Image"
//             className="mx-auto"
//           />
//           <Card.Body>
//             <div className="card-title">
//               <h4>{item.title}</h4>
//             </div>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   ) : (
//     "Loading"
//   )}
