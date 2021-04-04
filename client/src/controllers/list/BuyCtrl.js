import React,{ useState, useEffect } from "react";
import {Text} from "react-native";
import Buy from "../../components/list/Buy"
import { buyCoin } from "../../network"


export default function BuyCtrl({ 
  //Properties
  prop , 
  navigation
}) {
  const [quantity, setQuantity] = useState(0);
  const [marketPrice, setMarketPrice] = useState(prop.current_price);
  const [bookValue, setBookValue] = useState(0);

  const submitForm = async () => {

    try {
      // network to gateway
      const response = await buyCoin(prop.id, quantity)
      console.log(response)

      navigation.navigate("Confirmation"); 
      
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const calculateBookValue = async () => {
    const result = quantity * marketPrice;
    if (typeof result !== "number") return 0;
    setBookValue(result);
  };

  useEffect(() => {
    calculateBookValue();
  }, [quantity]);

  return (
    <Buy
      //METHOD
      setQuantity={setQuantity}
      setMarketPrice={setMarketPrice}
      setBookValue={setBookValue}
      submitForm={submitForm}
      //PROPERTIES
      prop={prop}
      bookValue={bookValue}
      
    />
  );
}
