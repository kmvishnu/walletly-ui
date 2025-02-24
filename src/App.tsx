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
import BalanceComponent from "./components/balanceComponent/BalanceComponent";
import { DataTable } from "./components/dataTable/data-table";
import { columns, ExpenseType } from "./components/dataTable/columns";
import getData from "./constants/sampleData";
import BarChartComponent from "./components/charts/BarChartComponent";
import PieChartComponent from "./components/charts/PieChartComponent";



export default function App() {

  const data:ExpenseType[] = getData()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mr-2" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="grid h-full grid-cols-10 grid-rows-5">
          <div className="flex flex-col h-full col-span-6 row-span-1 bg-slate-600 ">
            <BalanceComponent />
          </div>
          <div className="row-span-2 col-span-4 bg-gray-400">
            <BarChartComponent />
          </div>
          <div className="col-span-6 row-span-4 bg-white-500">
             <DataTable columns={columns} data={data} />
          </div>
          <div className="row-span-3 col-span-4 bg-gray-600 ">
            <PieChartComponent/>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
