import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';


const Home = () => {
  useEffect(()=>{getData()}, [])
  const [allUsers, setAllUsers] = useState([])
  const getData = () => {
    axios.get('http://localhost:5000/api/user')
    .then((res) => { setAllUsers(res.data) })
    .catch((err) => { console.log(err) })
  }
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Customer Details</h1>
      
   

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">RECENT</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                
                
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Contact No.</th>
                <th className="py-3 px-4 text-left">Table</th>
                
              </tr>
            </thead>
            <tbody>
                {allUsers.map((i)=>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">
                    {i.name}
                  </td>
                  <td className="py-2 px-4">+91 {i.number}</td>
                  <td className="py-2 px-4">
                  {i.table}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    
    </div>
  );
};

export default Home;