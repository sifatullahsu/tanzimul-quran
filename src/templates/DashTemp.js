import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { FiSettings, FiUsers } from 'react-icons/fi';
import { BiTransfer } from 'react-icons/bi';
import { FaGraduationCap, FaMoneyCheck } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';

const DashTemp = () => {
  return (
    <div className='flex'>
      <div className="w-72 px-3 text-white" style={{ background: "#383950" }}>
        <div className='h-screen flex flex-col justify-between sticky top-0 pt-5'>

          <div>
            <div className="flex items-center p-2 space-x-4">
              <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full bg-gray-500" />
              <div>
                <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                <div className="text-xs hover:underline text-gray-300">View profile</div>
              </div>
            </div>

            <div className="pt-8 pb-4 space-y-1 text-sm">
              <Link to='/dashboard' className="flex items-center p-2 space-x-3 rounded-md">
                <MdOutlineDashboardCustomize></MdOutlineDashboardCustomize><span>Dashboard</span>
              </Link>

              <Link to='/dashboard/students' className="flex items-center p-2 space-x-3 rounded-md">
                <FiUsers></FiUsers><span>Students</span>
              </Link>

              <Link to='/dashboard/classes' className="flex items-center p-2 space-x-3 rounded-md">
                <FaGraduationCap></FaGraduationCap><span>Classes</span>
              </Link>

              <Link to='/dashboard/fees' className="flex items-center p-2 space-x-3 rounded-md">
                <FaMoneyCheck></FaMoneyCheck><span>Fees</span>
              </Link>

              <Link to='/dashboard/transactions' className="flex items-center p-2 space-x-3 rounded-md">
                <BiTransfer></BiTransfer><span>Transactions</span>
              </Link>
            </div>
          </div>

          <div className="pb-4 space-y-1 text-sm" style={{ background: "#383950" }}>
            <Link to='/' className="flex items-center p-2 space-x-3 rounded-md">
              <FiSettings></FiSettings>
              <span>Settings</span>
            </Link>

            <Link to='/' className="flex items-center p-2 space-x-3 rounded-md">
              <AiOutlineLogout></AiOutlineLogout>
              <span>Logout</span>
            </Link>
          </div>

        </div>
      </div>


      <div className='basis-full' style={{ background: "#F3F3F3" }}>
        <div className='p-5'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashTemp;