import axios, { all } from "axios";
import React, { useContext, useEffect, useState } from "react";

const Product = () => {
  const [foodObj, setFoodObj] = useState({})
  const [allFoodItems, setAllFoodItems] = useState([])
  useEffect(() => { getData() }, [])

  const [showModal, setShowModal] = useState(false);
  const [allUserData, setAllUserData] = useState([])
  const getData = () => {
    axios.get('http://localhost:5000/api/foodItem')
    .then((res) => { setAllFoodItems(res.data) })
    .catch((err) => { console.log(err) })
  }

  const postData = () => {
    axios.post('http://localhost:5000/api/foodItem', foodObj)
    .then((res)=>{alert(res.data); setShowModal(false)})
    .catch((err)=> alert(err))
  }

  // UI Components
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Product Management</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Add New Product
        </button>
      </div>
      {JSON.stringify(allUserData)}
      {/* Market Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              {[
                "S.No",
                "userId",
                "Name",
                "Email",
                "Mobile No",
                
                "Actions",
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
            {allFoodItems.map((i, index) =>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4">{i.category}</td>
                <td className="px-6 py-4">{i.foodName}</td>
                <td className="px-6 py-4">
                  <img className="h-[10vh]" src={i.image}></img>
                </td>
                <td className="px-6 py-4">{i.price}</td>
               
                <td className="px-6 py-4">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal ? (
        <div className="fixed flex w-[100%] h-[100%] top-0 left-0 items-center z-[100] justify-center">
          <div className="absolute w-[100%] h-[100%] inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-6 w-[80%] max-w-4xl z-10">
            <h2 className="text-xl font-bold mb-4">Edit Market Details</h2>
          {JSON.stringify(foodObj)}
            <div className="grid grid-cols-2 gap-4">
              {/* Market Name - Read Only */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  FOOD NAME
                </label>
                <input 
                onChange={(e)=> setFoodObj({
                  ...foodObj,
                  foodName : e.target.value
                })}
                type="text" className="w-full p-2 border rounded-md 0" />
              </div>

              {/* Open Time */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CATEGORY
                </label>
                <input
                  type="text"
                  onChange={(e)=> setFoodObj({
                    ...foodObj,
                    category: e.target.value
                  })}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              {/* Close Time */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PRICE
                </label>
                <input
                  type="text"
                  name="close_time_formatted"
                  onChange={(e)=> setFoodObj({
                    ...foodObj,
                    price: e.target.value
                  })}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  IMAGE
                </label>
                <input
                  type="text"
                  onChange={(e)=> setFoodObj({
                    ...foodObj,
                    image: e.target.value
                  })}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
            </div>

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button onClick={()=> postData()} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50">
                {"Save"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
