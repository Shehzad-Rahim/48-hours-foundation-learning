// Client Side Data Fetching 


// // 'use client'
// // import { useEffect, useState } from "react";

// // type Cart = {
// //   id: number;
// //   total: number;
// //   discountedTotal: number;
// //   userId: number;
// //   totalProducts: number;
// //   totalQuantity: number;
// // };

// // export default function CartsPage() {
// //   const [carts, setCarts] = useState<Cart[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     // Fetch data from the API
// //     const fetchCarts = async () => {
// //       try {
// //         const response = await fetch("https://dummyjson.com/carts");
// //         const data = await response.json();

// //         // Set the cart data
// //         setCarts(data.carts);
// //       } catch (err) {
// //         setError("Failed to fetch cart data.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCarts();
// //   }, []);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div>
// //       <h1>Cart Data</h1>
// //       {carts.map((cart) => (
// //         <div key={cart.id} className="m-3 p-3 border border-white">
// //           <h3>Cart ID: {cart.id}</h3>
// //           <p>User ID: {cart.userId}</p>
// //           <p>Total Products: {cart.totalProducts}</p>
// //           <p>Total Quantity: {cart.totalQuantity}</p>
// //           <p>Total: ${cart.total.toFixed(2)}</p>
// //           <p>Discounted Total: ${cart.discountedTotal.toFixed(2)}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// Server side Data fetching 

type Cart = {
  id: number;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

async function fetchCarts(): Promise<Cart[]> {
  await new Promise((resolve)=> setTimeout(resolve, 2000))
  const response = await fetch("https://dummyjson.com/carts");
  const data = await response.json();
  return data.carts;
}

export default async function CartsPage() {
  const carts = await fetchCarts();

  return (
    <div>
      <h1>Cart Data</h1>
      {carts.map((cart) => (
        <div
          key={cart.id}
          className="m-3 p-3 border border-white"
        >
          <h3>Cart ID: {cart.id}</h3>
          <p>User ID: {cart.userId}</p>
          <p>Total Products: {cart.totalProducts}</p>
          <p>Total Quantity: {cart.totalQuantity}</p>
          <p>Total: ${cart.total.toFixed(2)}</p>
          <p>Discounted Total: ${cart.discountedTotal.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
