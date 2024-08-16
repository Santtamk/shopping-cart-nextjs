"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = "https://fakestoreapi.com/products";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    toast.info("Loading Products"); //for initial load
    try {
      const response = await axios.get(URL);
      setData(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
      toast.success("Let's shop!!");
    }
  };
  useEffect(() => {
    fetchData(); //fetches the data initially
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 md:mb-2">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}
