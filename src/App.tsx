import { useState, useEffect } from "react"
import axios from "axios";
interface GettingData{
  id: number,
  name: string,
  website: string,
  phone: number,
}

const App = () => {
  const [data, setData] = useState<GettingData[]>([]);
  
const fetchData = async() => {
  try{
  const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
  const results = resp.data;
  setData(results)
  }
  catch(error){
    console.log(error);
  }
}  
  
  useEffect(() => {
   fetchData()
  }, []);

  return (
    <>
    {data.map((items) => (
   
      <table className="table" key={items.id}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Website</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{items.id}</td>
      <td>{items.name}</td>
      <td>{items.website}</td>
      <td>{items.phone}</td>
    </tr>
  </tbody>
</table>
 ))}
    </>
  )
}

export default App
