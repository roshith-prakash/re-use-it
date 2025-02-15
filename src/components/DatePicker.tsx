import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const DatePicker = ({
  onDateSelect,
  className,
}: {
  onDateSelect: (date: Date | null) => void;
  className?: string;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth(),
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear(),
  );

  // Get the number of days in the current month
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay();
  };

  // Handle date click
  const handleDateClick = (day: number) => {
    const newSelectedDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newSelectedDate);
    setIsCalendarOpen(false);
    onDateSelect(newSelectedDate); // Pass the selected date back to the parent
  };

  // Handle month change (previous or next)
  const handleMonthChange = (direction: "prev" | "next") => {
    if (direction === "next") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  };

  // Get the dates to be displayed in the calendar
  const getCalendarDays = (): (number | null)[] => {
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const days: (number | null)[] = [];

    // Fill the first empty days of the month (if the month doesn't start on Sunday)
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Fill the days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  // Render the custom date picker
  return (
    <div className="relative">
      {/* Input field */}
      <input
        type="text"
        readOnly
        value={selectedDate ? selectedDate.toLocaleDateString() : ""}
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        className={`dark:placeholder:text-grey/50 placeholder:text-darkbg/50 text-md border-darkbg/50 mt-3 min-h-8 w-full cursor-pointer rounded-lg border-2 bg-transparent px-4 py-2 placeholder:text-sm focus:outline-none dark:border-white/50 ${className}`}
        placeholder="Select a date"
      />

      {/* Calendar dropdown */}
      {isCalendarOpen && (
        <div
          className={`dark:bg-darkbg absolute z-10 mt-2 min-w-72 rounded-lg border-2 border-gray-300 bg-white shadow-lg ${className}`}
        >
          <div className="bg-cta/90 flex items-center justify-between rounded-t-lg px-4 py-2 text-white">
            <button
              className="cursor-pointer"
              onClick={() => handleMonthChange("prev")}
            >
              <MdKeyboardArrowLeft />
            </button>
            <span>
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              className="cursor-pointer"
              onClick={() => handleMonthChange("next")}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 px-2 py-2">
            {/* Weekdays */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, index) => (
                <div key={index} className="text-center font-semibold">
                  {day}
                </div>
              ),
            )}
            {/* Calendar days */}
            {getCalendarDays().map((day, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-lg py-1 text-center transition-all ${day === null ? "text-transparent" : "hover:bg-cta/20 dark:hover:bg-white/20"} ${
                  selectedDate?.getDate() === day &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear &&
                  "bg-cta text-white"
                }`}
                onClick={() => day && handleDateClick(day)}
              >
                {day || ""}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
