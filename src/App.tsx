import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, BarChart3, User } from "lucide-react";
import BalanceComponent from "./components/balanceComponent/BalanceComponent";
import { DataTable } from "./components/dataTable/data-table";
import { columns, ExpenseType } from "./components/dataTable/columns";
import getData from "./constants/sampleData";
import BarChartComponent from "./components/charts/BarChartComponent";
import PieChartComponent from "./components/charts/PieChartComponent";

export default function App() {
  const data: ExpenseType[] = getData();
  const [activePage, setActivePage] = useState("home");

  return (
    <SidebarProvider>
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden md:block">
        <AppSidebar />
      </div>
      
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            {/* Sidebar trigger - Hidden on mobile */}
            <div className="hidden md:block">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="h-4 mr-2" />
            </div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="hidden md:block">Dashboard</BreadcrumbPage>
                  <BreadcrumbPage className="md:hidden">
                    {activePage === "home" ? "Walletly" : "Analytics"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        
        {/* Desktop Layout */}
        <div className="hidden md:grid h-full grid-cols-10 grid-rows-5">
          <div className="flex flex-col h-full col-span-6 row-span-1 bg-slate-600">
            <BalanceComponent />
          </div>
          <div className="row-span-2 col-span-4 bg-gray-400">
            <BarChartComponent />
          </div>
          <div className="col-span-6 row-span-4 bg-white-500">
            <DataTable columns={columns} data={data} />
          </div>
          <div className="row-span-3 col-span-4 bg-gray-600">
            <PieChartComponent />
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="flex flex-col h-full md:hidden">
          {activePage === "home" ? (
            <>
              {/* Home Page - Balance and Data Table */}
              <div className="w-full h-[20%] bg-slate-600">
                <BalanceComponent />
              </div>
              
              <div className="w-full bg-white-500 flex-grow overflow-auto mt-2 mb-24">
                <DataTable columns={columns} data={data} />
              </div>
            </>
          ) : activePage === "charts" ? (
            <>
              {/* Charts Page */}
              <div className="w-full flex flex-col mb-24">
                <div className="w-full py-2">
                  <h3 className="text-lg font-medium px-4 mb-2">Expense Breakdown</h3>
                  <div className="w-full h-72">
                    <BarChartComponent />
                  </div>
                </div>
                
                <div className="w-full py-2">
                  <div className="w-full h-100">
                    <PieChartComponent />
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Profile page (placeholder)
            <div className="w-full flex-grow flex items-center justify-center mb-24">
              <div className="text-center">
                <User size={64} className="mx-auto mb-4 text-gray-400" />
                <h2 className="text-xl font-medium">User Profile</h2>
                <p className="text-gray-500 mt-2">Profile page content will appear here</p>
              </div>
            </div>
          )}
          
          {/* Bottom Navigation */}
          <div className="w-[95%] h-16 bg-dark-blue flex justify-around items-center fixed bottom-0 rounded-full px-5 mb-5 mx-3">
            <button 
              className="flex flex-col items-center justify-center p-2"
              onClick={() => setActivePage("home")}
            >
              <Home 
                size={24} 
                className={`${activePage === "home" ? "text-white" : "text-gray-400"}`}
              />
              <span className={`text-xs mt-1 ${activePage === "home" ? "text-white" : "text-gray-400"}`}>
                Home
              </span>
            </button>
            <button 
              className="flex flex-col items-center justify-center p-2"
              onClick={() => setActivePage("charts")}
            >
              <BarChart3 
                size={24} 
                className={`${activePage === "charts" ? "text-white" : "text-gray-400"}`}
              />
              <span className={`text-xs mt-1 ${activePage === "charts" ? "text-white" : "text-gray-400"}`}>
                Charts
              </span>
            </button>
            <button 
              className="flex flex-col items-center justify-center p-2"
              onClick={() => setActivePage("profile")}
            >
              <User 
                size={24} 
                className={`${activePage === "profile" ? "text-white" : "text-gray-400"}`}
              />
              <span className={`text-xs mt-1 ${activePage === "profile" ? "text-white" : "text-gray-400"}`}>
                Profile
              </span>
            </button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}