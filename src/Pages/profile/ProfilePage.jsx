import { useState, useEffect } from 'react'
import { getToken, logout } from '../../helper/tokenHelper'
import axios from 'axios'

const ProfilePage = () => {
  let url = `http://localhost:8080/user/api/v1/readuser`
  let config = {
    headers: {
        token: getToken(),
    }
  }

  const [details, setDetails] = useState({})
  const { _id, FirstName, LastName, Email, Password, Country, Phone } = details;
  // const { Phone1 } = Phone;

  async function fetchData() {
    try {
      const response = await axios.get(url, config);
      const data = response.data.data;
      console.log(data)
      setDetails(data);
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data:', error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{FirstName}</h1>
      <h1>{LastName}</h1>
      <h1>{Email}</h1>
      <h1>{Password}</h1>
      <h1>{_id}</h1>
      <h1>{Country}</h1>
      <h1>{Phone?.Phone1}</h1>
      <button onClick={() => logout()} className='btn btn-danger'>logout</button>
    </div>
  )
}

export default ProfilePage
