
interface Products {
    productName : string
    productID : number
    productColor : string
    productPrice : number
}
async function fetchProducts() : Promise<Products[]> {
    const response = await fetch("https://48-hours-foundation-learning.vercel.app/data.json");
    const data = await response.json();
    return data.products;
}

async function page() {
    const products = await fetchProducts()
    
  return (
    <div className="flex gap-20 justify-center my-5">
        {products.map((item)=> {
            return (
                <div key={item.productID}>
                    <p>{item.productName}</p>
                    <p>{item.productColor}</p>
                    <p>{item.productPrice}</p>
                </div>
            )
        })}
    </div>
  )
}

export default page