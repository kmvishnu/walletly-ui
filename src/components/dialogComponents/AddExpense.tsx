import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { SelectScrollable } from "../InputsAndSelect/SelectScrollable"

export function AddExpenseComponent() {
  return (
    <Tabs defaultValue="expense" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="expense">Expense</TabsTrigger>
        <TabsTrigger value="income">Income</TabsTrigger>
      </TabsList>
      <TabsContent value="expense">
        <Card>
          <CardHeader>
            <CardTitle>Expense</CardTitle>
            <CardDescription>
              Add your expense here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 mt-[-10px]">
            <div className="space-y-1">
              <Label htmlFor="name">Amount</Label>
              <Input id="name" defaultValue="0" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Type</Label>
              <SelectScrollable/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Add</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="income">
        <Card>
          <CardHeader>
            <CardTitle>Income</CardTitle>
            <CardDescription>
             Add your Income here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 mt-[-10px]">
            <div className="space-y-1">
              <Label htmlFor="name">Amount</Label>
              <Input id="name" defaultValue="0" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Type</Label>
              <SelectScrollable/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Add</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}