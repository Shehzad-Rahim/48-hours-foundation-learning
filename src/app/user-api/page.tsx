interface User {
    id : number;
    name: string;
    username: string;
    email: string;
    phone: string;
}
async function page() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users : User[] = await response.json();
    console.log(users)
  return (
    <div className="flex flex-wrap justify-between gap-4 px-5 py-5">
        {users.map((user : User)=>{
            return(
                <div className="w-[48%] bg-black py-2 px-4 flex justify-between rounded-lg shadow-lg relative" key={user.id}>
                    <div className="w-[25px] h-[25px] absolute -left-2 -top-2 bg-white text-black rounded-full flex justify-center">{user.id}</div>
                    <div>
                       <h2>{user.name}</h2> 
                       <p>{user.username}</p> 
                    </div>
                    <div>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default page