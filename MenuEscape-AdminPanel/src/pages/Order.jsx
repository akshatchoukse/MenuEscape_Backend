import axios, { all } from "axios";
import React, { useContext, useEffect, useState } from "react";

const Order = () => {
  const [foodObj, setFoodObj] = useState({})
  const [allFoodItems, setAllFoodItems] = useState([])
  useEffect(() => { getData() }, [])

  const [showModal, setShowModal] = useState(false);
  const [allOrders, setAllOrders] = useState([])
  const getData = () => {
    axios.get('http://localhost:5000/api/order')
    .then((res) => { setAllOrders(res.data) })
    .catch((err) => { console.log(err) })
  }

  

  const handleOrder = (id, status)=>{
    axios.put(`http://localhost:5000/api/order/${id}`, {
      status : status
    }).then((res)=>{alert(res.data); getData()})
    .catch((err)=> alert(err))
  }
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Product Management</h1>
        
      </div>
      {/* Market Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              {[
                "S.No",
                "Table.no",
                "Name",
                "Food Items",
                "Price",
                "Status",
                "Actions"
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allOrders.map((i, index) =>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4">
                  <button className=" hover:text-indigo-900">
                    {i.table}
                  </button>
                </td>
                <td className="px-6 py-4">{i.name}</td>
                <td className="px-6 py-4">
                  <ul>
                    {i.orderedFood.map((food)=>
                    <div className="flex">
                      <li>{food.name}</li> - <li>{food.price}</li> - <li>{food.quantity}</li>
                      </div>
                    )}
                  </ul>
                </td>
                
                <td className="px-6 py-4">
                    {i.orderedFood.map((i)=> i.price * i.quantity).reduce((a, b)=> a+b)}
                </td>
                <td className="px-6 py-4">
                  {i.status}
                </td>
               
                <td className="px-6 py-4 flex gap-3.5">
                  <button onClick={()=>{
                    handleOrder(i._id, "Completed")
                  }} className="text-indigo-600 hover:text-indigo-900">
                    Completed
                  </button>
                  <button onClick={()=>{
                    handleOrder(i._id, "Cancelled")
                  }} className="text-indigo-600 hover:text-indigo-900">
                    Cancelled
                  </button>
                </td>
                
              </tr>
            )}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default Order;
