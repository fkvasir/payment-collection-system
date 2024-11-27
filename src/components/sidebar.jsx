import React from "react";
import { Link, useLocation } from "react-router-dom";
import RecordLogo from "../assets/RecordLogo.svg";
import DashboardLogo from "../assets/DashboardLogo.svg";
import HistoryLogo from "../assets/Vector-1.svg";
import StudentRecords from "../assets/Vector-2.svg";
import vector3 from "../assets/Vector-3.svg";
import Logo from "../assets/Logo.svg";

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: DashboardLogo },
    { name: "Payment Records", path: "/payment-records", icon: RecordLogo },
    {
      name: "Transaction History",
      path: "/transaction-history",
      icon: HistoryLogo,
    },
    { name: "Student Records", path: "/student-records", icon: StudentRecords },
    { name: "Items", path: "/items", icon: vector3 },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white fixed h-full flex flex-col">
      {/* Logo Section */}
      <div className="h-24 flex items-center justify-center border-b border-gray-700">
        <img src={Logo} alt="Logo" className="h-12 w-12 mr-3 px-1" />
        <div className="flex flex-col">
          <h2 className="font-bold text-lg">PAYWOLF</h2>
          <p className="text-sm text-gray-400">
            CCS-EC Payment Collection System
          </p>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="mt-6 space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-4 hover:bg-gray-700 rounded-lg ${
                  location.pathname === item.path ? "bg-blue-800" : ""
                }`}
              >
                <img
                  src={item.icon}
                  alt={`${item.name} Logo`}
                  className="h-6 w-6 mr-4"
                />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
        <p>© 2024 CCS - EC</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
