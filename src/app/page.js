"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "./components/Card";
const URL = "https://fakestoreapi.com/products";
export default function Home() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get(URL)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log("product data", data);

  

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 md:mb-2">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}
