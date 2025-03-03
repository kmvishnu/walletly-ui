import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectScrollable() {
  return (
    <Select >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select an Expense" />
      </SelectTrigger>
      <SelectContent>
  <SelectGroup>
    <SelectLabel>Groceries</SelectLabel>
    <SelectItem value="vegetables">Vegetables</SelectItem>
    <SelectItem value="fruits">Fruits</SelectItem>
    <SelectItem value="dairy">Dairy</SelectItem>
    <SelectItem value="meat">Meat</SelectItem>
    <SelectItem value="bakery">Bakery</SelectItem>
    <SelectItem value="snacks">Snacks</SelectItem>
  </SelectGroup>

  <SelectGroup>
    <SelectLabel>Transportation</SelectLabel>
    <SelectItem value="fuel">Fuel</SelectItem>
    <SelectItem value="public_transport">Public Transport</SelectItem>
    <SelectItem value="taxi">Taxi</SelectItem>
    <SelectItem value="parking">Parking</SelectItem>
  </SelectGroup>

  <SelectGroup>
    <SelectLabel>Entertainment</SelectLabel>
    <SelectItem value="movies">Movies</SelectItem>
    <SelectItem value="games">Games</SelectItem>
    <SelectItem value="concerts">Concerts</SelectItem>
    <SelectItem value="streaming_services">Streaming Services</SelectItem>
  </SelectGroup>

  <SelectGroup>
    <SelectLabel>Restaurants</SelectLabel>
    <SelectItem value="fast_food">Fast Food</SelectItem>
    <SelectItem value="fine_dining">Fine Dining</SelectItem>
    <SelectItem value="delivery">Delivery</SelectItem>
    <SelectItem value="takeout">Takeout</SelectItem>
  </SelectGroup>

  <SelectGroup>
    <SelectLabel>Utilities</SelectLabel>
    <SelectItem value="electricity">Electricity</SelectItem>
    <SelectItem value="water">Water</SelectItem>
    <SelectItem value="internet">Internet</SelectItem>
    <SelectItem value="mobile">Mobile</SelectItem>
  </SelectGroup>

  <SelectGroup>
    <SelectLabel>Shopping</SelectLabel>
    <SelectItem value="clothing">Clothing</SelectItem>
    <SelectItem value="electronics">Electronics</SelectItem>
    <SelectItem value="home_goods">Home Goods</SelectItem>
    <SelectItem value="furniture">Furniture</SelectItem>
    <SelectItem value="books">Books</SelectItem>
  </SelectGroup>

  <SelectGroup>
    <SelectLabel>Health & Fitness</SelectLabel>
    <SelectItem value="gym">Gym</SelectItem>
    <SelectItem value="medicine">Medicine</SelectItem>
    <SelectItem value="healthcare">Healthcare</SelectItem>
    <SelectItem value="sports">Sports</SelectItem>
  </SelectGroup>
</SelectContent>

    </Select>
  )
}
