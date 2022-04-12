import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { crossOrigin } from "../next.config";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState();

  const [petrolPriceChange, setpetrolPriceChange] = useState();
  const [petrolPriceChangeSign, setpetrolPriceChangeSign] = useState();
  const [petrolPrice, setpetrolPrice] = useState();

  const [DieselPriceChange, setDieselPriceChange] = useState();
  const [DieselPriceChangeSign, setDieselPriceChangeSign] = useState();
  const [dieselPrice, setdieselPrice] = useState();
  

  const getFuelData = async () => {
    try {
      const data = await axios.get(
        "https://fule-api-india.herokuapp.com/price/MAHARASHTRA/AMRAVATI"
      );
      setData(data.data[0]);
      // Petrol Price State
      setpetrolPriceChange(data.data[0].products[0].priceChange);
      setpetrolPriceChangeSign(data.data[0].products[0].priceChangeSign);
      setpetrolPrice(data.data[0].products[0].productPrice);

      // Diesel Price State
      setDieselPriceChange(data.data[0].products[1].priceChange);
      setDieselPriceChangeSign(data.data[0].products[1].priceChangeSign);
      setdieselPrice(data.data[0].products[1].productPrice);





      console.log(data.data[0].products[0]);
      console.log(data.data[0].products[1]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getFuelData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Amravati Fuel Rate Real-Time</title>
        <meta name="description" content="Amravati Fuel Rate Real-Time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>AMRAVATI DISTRICT FUEL RATE</h1>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <span className={styles.spans}>
              <h3>Petrol Price</h3>
            </span>
            <span>
              <h4>
                Today Petrol Price <br /> Rs{petrolPrice}   ( {petrolPriceChangeSign + petrolPriceChange } )
              </h4>
            </span>
          </div>
          <div className={styles.card}>
            <span>
              <h3>Diesel Price</h3>
            </span>
            <span>
              <h4>
                Today Diesel Price <br /> Rs{dieselPrice}   ( {DieselPriceChangeSign + DieselPriceChange } )
              </h4>
            </span>
          </div>
        </div>
        
      </main>
      
    </div>
  );
}
