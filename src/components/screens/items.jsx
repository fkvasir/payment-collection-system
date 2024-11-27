import React from "react";
import SearchBar from "../searchBar";

function Items() {
  return (
    <div className="flex flex-col h-screen p-6 bg-gray-50 overflow-hidden">
      <article className="text-xl font-bold mb-4">Items</article>
      <SearchBar />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-4 flex-1">
        <div className="overflow-y-auto h-full">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="px-6 py-3 font-semibold text-gray-600">#</th>
                <th className="px-6 py-3 font-semibold text-gray-600">
                  ITEM NAME
                </th>
                <th className="px-6 py-3 font-semibold text-gray-600">
                  AMOUNT
                </th>
                <th className="px-6 py-3 font-semibold text-gray-600">
                  ACADEMIC YEAR
                </th>
                <th className="px-6 py-3 font-semibold text-gray-600">
                  ORGANIZATION
                </th>
                <th className="px-6 py-3 font-semibold text-gray-600">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(15)].map((_, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="px-6 py-4 text-gray-700">{index + 1}</td>
                  <td className="px-6 py-4 text-gray-700">
                    2nd Membership Fee
                  </td>
                  <td className="px-6 py-4 text-gray-700">201</td>
                  <td className="px-6 py-4 text-gray-700">2024-2025</td>
                  <td className="px-6 py-4 text-gray-700">CCS-EC</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg shadow hover:bg-red-700 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white sticky bottom-0 border-t">
          <div className="px-6 py-4 text-gray-500 text-center font-semibold">
            Items - 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
