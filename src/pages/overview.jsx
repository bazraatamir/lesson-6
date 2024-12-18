import React from "react";
import DashboardCard from "../components/dashboardCard";
import Linechart from "../components/linechart";
import LatestOrders from "../components/latestOrders";

const Overview = () => {
  const data = [
    {
      title: "BUDGET",
      count: "$24",
      procent: 12,
    },
    {
      title: "Total Customers",
      count: "1.6k",
      procent: 16,
    },
    {
      title: "Task Progress",
      count: "75.5%",
      procent: 12,
    },
    {
      title: "Total Profit",
      count: "15k",
      procent: 12,
    },
  ];
  return (
    <div className=' w-full px-[80px] grid grid-cols-4 gap-[20px] grid-rows-3'>
      <DashboardCard data={data} />
      <div className='col-span-3 flex flex-col  justify-center border-2 rounded-2xl p-[24px]'>
        <h1>Sales</h1>
        <Linechart />
      </div>
      <LatestOrders />
    </div>
  );
};

export default Overview;
