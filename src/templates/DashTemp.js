import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { FiSettings, FiUsers } from 'react-icons/fi';
import { BiTransfer } from 'react-icons/bi';
import { FaGraduationCap, FaMoneyCheck } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { RiUserSettingsLine } from 'react-icons/ri';

const DashTemp = () => {
  return (
    <div className='flex'>
      <div className="w-72 px-3 bg-primary text-white">
        <div className='h-screen flex flex-col justify-between sticky top-0 pt-5'>

          <div>
            <div className="flex items-center p-2 space-x-4">
              <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full bg-gray-500" />
              <div>
                <h2 className="text-lg font-semibold text-white">Leroy Jenkins</h2>
                <div className="text-xs hover:underline text-gray-300">View profile</div>
              </div>
            </div>

            <div className="pt-8 pb-4 space-y-1 text-sm">
              <NavLink to='/dashboard' className="flex items-center p-2 space-x-3 rounded-md">
                <MdOutlineDashboardCustomize></MdOutlineDashboardCustomize><span>Dashboard</span>
              </NavLink>

              <NavLink to='/dashboard/create' className="flex items-center p-2 space-x-3 rounded-md">
                <FiUsers></FiUsers><span>Create</span>
              </NavLink>

              <div className='sub pl-8 pb-3'>
                <NavLink to='/dashboard/create/student' className='block p-2 space-x-3'>
                  <span className='dot'></span> Create student
                </NavLink>
                <NavLink to='/dashboard/create/class' className='block p-2 space-x-3'>
                  <span className='dot'></span> Create class
                </NavLink>
                <NavLink to='/dashboard/create/fee' className='block p-2 space-x-3'>
                  <span className='dot'></span> Create fee
                </NavLink>
              </div>

              <NavLink to='/dashboard/students' className="flex items-center p-2 space-x-3 rounded-md">
                <FiUsers></FiUsers><span>Students</span>
              </NavLink>

              <NavLink to='/dashboard/classes' className="flex items-center p-2 space-x-3 rounded-md">
                <FaGraduationCap></FaGraduationCap><span>Classes</span>
              </NavLink>

              <NavLink to='/dashboard/fees' className="flex items-center p-2 space-x-3 rounded-md">
                <FaMoneyCheck></FaMoneyCheck><span>Fees</span>
              </NavLink>

              <NavLink to='/dashboard/transactions' className="flex items-center p-2 space-x-3 rounded-md">
                <BiTransfer></BiTransfer><span>Transactions</span>
              </NavLink>

              <NavLink to='/dashboard/users' className="flex items-center p-2 space-x-3 rounded-md">
                <RiUserSettingsLine></RiUserSettingsLine><span>Users</span>
              </NavLink>
            </div>
          </div>

          <div className="pb-4 space-y-1 bg-primary text-sm">
            <NavLink to='/' className="flex items-center p-2 space-x-3 rounded-md">
              <FiSettings></FiSettings>
              <span>Settings</span>
            </NavLink>

            <NavLink to='/' className="flex items-center p-2 space-x-3 rounded-md">
              <AiOutlineLogout></AiOutlineLogout>
              <span>Logout</span>
            </NavLink>
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