
import axios from "axios";
import { Item } from "../../../types/Items-Types";
import { GetCookie } from "./CookiesSetup";

const NEXT_PUBLIC_API_URL = '' ;//process.env.NEXT_PUBLIC_API_URL;
interface details {
    email:string;
    address:string;
}
const PlaceOrders = async (itemsData: Item[],details?:details) => {
  const token = await GetCookie();
    const FilteredtemsData = itemsData.map((item) => ({
    item: item.id,
    quantity: item.quantity,
    price: item.price,
    subtotal: item.subtotal,
    }));
    console.log(FilteredtemsData)
  const response = await axios.post(
    `${NEXT_PUBLIC_API_URL}/api/v1/cart/`,
    {
      items: FilteredtemsData,
      details:details,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization" :`Token ${token}`,

      },
    }
    );

  return response.data;
};

export { PlaceOrders };
