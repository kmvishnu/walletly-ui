import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MonthSelectorComponent.css"; // Import custom CSS for additional styling

const MonthSelectorComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const isFutureMonth = (date: Date) => {
    const today = new Date();
    return date > today;
  };

  return (
    <div className="flex justify-center items-center p-2 bg-dark-blue rounded-md shadow-md max-w-xs">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="MMMM yyyy"
        showMonthYearPicker
        className="w-[65%] p-1 border border-opacity-10 border-gray-300 rounded-md text-center text-sm bg-dark-blue text-cream-white transition-colors duration-300 focus:border-blue-500"
        placeholderText="Select Month and Year"
        maxDate={new Date()}
        renderCustomHeader={({ date, changeYear, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
          <div className="flex justify-between items-center px-2">
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="text-lg">
              {"<"}
            </button>
            <select
              value={date.getFullYear()}
              onChange={({ target: { value } }) => changeYear(parseInt(value))}
              className="p-1 border border-gray-300 rounded-md bg-gray-100"
            >
              {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled || isFutureMonth(date)} className="text-lg">
              {">"}
            </button>
          </div>
        )}
        // Disable manual input
        customInput={<input type="text" readOnly />}
      />
    </div>
  );
};

export default MonthSelectorComponent;