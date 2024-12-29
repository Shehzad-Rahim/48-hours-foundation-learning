
async function page() {
    type IBook = {
        id : number;
        name : string;
        type : string;
        available : boolean;
    }
    const response =  await fetch('https://simple-books-api.glitch.me/books/');
    const books : IBook[] = await response.json();
  return (
    <div className="my-5">
        <div className="flex justify-evenly">
            {books.map((item , id:number)=> (
                <div className="shadow-[0px_0px_5px_white] rounded-md py-3 px-4" key={id}>
                    <p className="text-yellow-400">{item.id}</p>
                    <p className="text-xl font-semibold">{item.name}</p>
                    <p className="text-gray-200">{item.type}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page