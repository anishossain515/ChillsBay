import React, { useEffect, useState } from "react";
import {
  ClockIcon,
  MapPinIcon,
  XMarkIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { Button, DatePicker, Input } from "@nextui-org/react";
import { Arrow } from "../../Utilities/Icon";
import PayModal from "./PayModal";

function PaymentPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [CartItem, setCartItem] = useState([
    {
      id: 1,
      img: "/cart1.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2024",
      location: "Quilox Club",
      time: "9:00 PM",
      price: 45000,
      priceOriginal: 45000,
      quantity: 1,
    },
    {
      id: 2,
      img: "/cart2.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 13 2024",
      location: "Quilox Club",
      time: "10:00 PM",
      price: 90000,
      priceOriginal: 90000,
      quantity: 2,
    },
  ]);

  const UpdateQuantity = (id, increment) => {
    setCartItem((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + increment, 1),
              price:
                item.priceOriginal * Math.max(item.quantity + increment, 1),
            }
          : item
      )
    );
  };

  const RemoveItem = (id) => {
    setCartItem(CartItem.filter((item) => item.id !== id));
  };

  const AddItem = () => {
    const newItem = {
      id: CartItem.length + 1,
      img: "cart1.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2024",
      location: "Quilox Club",
      time: "11:00 PM",
      price: 45000,
      priceOriginal: 45000,
      quantity: 1,
    };

    setCartItem([...CartItem, newItem]);
  };

  return (
    <section className="max-w-[1600px] mx-auto mt-[100px]">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {/* left side */}
        <div className="flex flex-col col-span-1 md:col-span-1">
          <h3 className="text-[#969DAA] font-bold">Your Cart</h3>

          {CartItem.map((item, index) => (
            <div
              key={item.id}
              className={`flex justify-between gap-4 pt-5 pb-4 transition-all ${
                index !== CartItem.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <div className="flex gap-4">
                <img
                  src={item.img}
                  alt="CartImg"
                  className="w-[129px] h-[120px] object-cover"
                />
                <div className="flex flex-col">
                  <h1 className="text-Dark_Indigo font-bold text-[22px]">
                    {item.title}
                  </h1>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <p className="flex items-center gap-2">
                      <CalendarIcon className="size-5 text-[#0E8BFF]" />
                      {item.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPinIcon className="size-5 text-[#0E8BFF]" />
                      {item.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <ClockIcon className="size-5 text-[#0E8BFF]" />
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>

              {/* quantity */}
              <div className="h-6 w-[100px] flex items-center justify-center bg-[#e4e7ec] text-Dark_Indigo rounded-md">
                <button
                  onClick={() => UpdateQuantity(item.id, -1)}
                  className="hover:bg-gray-300 px-2"
                >
                  -
                </button>
                <span className="px-3 font-bold">{item.quantity}</span>
                <button
                  onClick={() => UpdateQuantity(item.id, 1)}
                  className="hover:bg-gray-300 px-2"
                >
                  +
                </button>
              </div>

              {/* price */}
              <p className="text-Dark_Indigo font-bold">
                ₦{item.price.toLocaleString()}
              </p>

              <div>
                <button onClick={() => RemoveItem(item.id)}>
                  <XMarkIcon className="size-5" />
                </button>
              </div>
            </div>
          ))}

          <Button color="primary" className="w-[10%] mt-10" onClick={AddItem}>
            Add Item
          </Button>
        </div>

        {/* right side */}
        <div className="flex-1 p-5 border-l-1 border-[#E4E7EC] space-y-2 col-span-1 mt-5 md:mt-0">
          <div className="flex flex-col border-b pb-2 border-[#E4E7EC]">
            <h3 className="flex items-center gap-2 text-Dark_Indigo font-bold text-xl">
              <img
                src="/Check.png"
                alt="CheckImg"
                className="w-[24px] h-[24px]"
              />
              Account information
            </h3>
            <div className="text-Dark_Indigo pl-8 pt-1">
              <p>Tunde Chukwu</p>
              <p>tundechukwu12@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col border-b pb-2 border-[#E4E7EC]">
            <h3 className="flex items-center gap-2 text-Dark_Indigo font-bold text-xl">
              <img
                src="/Check.png"
                alt="CheckImg"
                className="w-[24px] h-[24px]"
              />
              Phone number
            </h3>
            <div className="text-Dark_Indigo pl-8 pt-1">
              <p>+2341123465799</p>
            </div>
          </div>

          <div>
            <button onClick={() => setIsOpen(!isOpen)}>
              <h3 className="flex items-center gap-2 text-Dark_Indigo font-bold text-xl">
                <img
                  src="/Check.png"
                  alt="CheckImg"
                  className="w-[24px] h-[24px]"
                />
                Payment
                <span className="flex items-center text-[#E4E7EC] gap-2">
                  card
                  <Arrow
                    className={`mt-2 transition-transform duration-250 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </h3>
            </button>

            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                isOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
                <Input type="number" label="Card Number" />
                <Input type="text" label="Card Holder Name" />
                <DatePicker label="Date" placeholder="Date" />
                <Input type="text" label="CVV" />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg">
            <ul className="flex flex-col gap-4 text-Dark_Indigo">
              {CartItem.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.title} {item.quantity}{" "}
                  </span>
                  <span>₦{item.price.toLocaleString()}</span>
                </li>
              ))}
            </ul>
            {/* Subtotal calculation */}
            <div className="text-Dark_Indigo flex justify-between my-4">
              <span className="font-bold">Subtotal :</span>
              <span>
                ₦
                {CartItem.reduce(
                  (sum, item) => sum + item.price,
                  0
                ).toLocaleString()}
              </span>
            </div>

            {/* Tax calculation */}
            <div className="text-Dark_Indigo flex justify-between my-4">
              <span className="font-bold">Tax [10%] :</span>
              <span>
                ₦
                {(
                  CartItem.reduce((sum, item) => sum + item.price, 0) * 0.1
                ).toLocaleString()}
              </span>
            </div>
            {/* total calculation */}
            <div className="text-Dark_Indigo flex justify-between border-t my-4">
               <span className="font-bold">Total :</span>
               <span>
                ₦{(
                    CartItem.reduce((sum,item)=>sum+item.price,0) *1.1
                ).toLocaleString()}
               </span>
            </div>

           <PayModal/>

          </div>
        </div>
      </div>
    </section>
  );
}

// useEffect(()=>{
//     fetch("/ads")
//     .then((response)=>{
//       return response.json()
//     })
//     .then((jsonData)=>{
//         setData(jsonData)
//     })
// })

export default PaymentPage;
