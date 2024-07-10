import React, { useState,useEffect } from "react";
//import { useLoaderData } from "react-router-dom"; 
function Github() {
    const [data, setdata] =  useState([]);
    useEffect(() => {
      fetch('https://api.github.com/users/Paraschamoli')
        .then((resp) => resp.json())
        .then((data) =>{
          console.log(data);
          setdata(data)});
    }, []);
  // const data = useLoaderData();
  return (
    <div className="text-center text-3xl bg-gray-600 p-4 text-white">
      Github id:{data.id}
    </div>
  );
}

export default Github;

// export const gitinfo = async () => {
//   const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//   return response.json();
// };
