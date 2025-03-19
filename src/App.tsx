import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import BalanceComponent from "./components/balanceComponent/BalanceComponent";
import { DataTable } from "./components/dataTable/data-table";
import { columns, ExpenseType } from "./components/dataTable/columns";
import getData from "./constants/sampleData";
import BarChartComponent from "./components/charts/BarChartComponent";
import PieChartComponent from "./components/charts/PieChartComponent";
import UserComponent from "./components/user/UserComponent";
import BottomNavigation from "./components/navigation/BottomNavigation";

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
        <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            {/* Sidebar trigger - Hidden on mobile */}
            <div className="hidden md:block">
              <SidebarTrigger className="-ml-1" />
            </div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
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
              <div className="w-full flex flex-col justify-around h-full mb-24">
                <div className="w-full py-2">
                  <h3 className="text-lg font-medium px-4 mb-2">
                    Expense Breakdown
                  </h3>
                  <div className="w-full h-full">
                    <BarChartComponent />
                  </div>
                </div>

                <div className="w-full py-2">
                  <div className="w-full h-full">
                    <PieChartComponent />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <UserComponent />
          )}

          {/* Bottom Navigation */}
          <BottomNavigation
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
