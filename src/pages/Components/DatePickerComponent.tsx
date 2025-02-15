import { useEffect, useState } from "react";
import { CodeBlock, DatePicker } from "../../components";

const DatePickerCode = `import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const DatePicker = ({
  value,
  onDateSelect,
  className,
}: {
  value?: Date;
  onDateSelect: (date: Date | null) => void;
  className?: string;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? value : null,
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth(),
  );
  const [scrollYear, setScrollYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [isYearPickerOpen, setIsYearPickerOpen] = useState<boolean>(false);
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);

  // Close the dropdown if clicked outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
        setIsMonthPickerOpen(false);
        setIsYearPickerOpen(false);
        setScrollYear(currentYear);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // Handle arrow click (previous or next)
  const handleArrowClick = (direction: "prev" | "next") => {
    // Change the year options in the picker, but do not update currentYear
    if (isYearPickerOpen) {
      handleYearScroll(direction, 12);
    }
    // Change month if year picker is not open
    else {
      if (direction === "next") {
        if (currentMonth === 11) {
          setCurrentMonth(0);
          handleYearChange("next");
        } else {
          setCurrentMonth(currentMonth + 1);
        }
      } else {
        if (currentMonth === 0) {
          setCurrentMonth(11);
          handleYearChange("prev");
        } else {
          setCurrentMonth(currentMonth - 1);
        }
      }
    }
  };

  // Handle year change (previous or next) for the year picker only
  const handleYearChange = (direction: "prev" | "next") => {
    // In case the year picker is not open, this will not affect the actual year
    if (direction === "next") {
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentYear(currentYear - 1);
    }
  };

  const handleYearScroll = (direction: "prev" | "next", number = 1) => {
    if (isYearPickerOpen) {
      if (direction === "next") {
        setScrollYear(scrollYear + number);
      } else {
        setScrollYear(scrollYear - number);
      }
    }
  };

  // Toggle Year Picker
  const toggleYearPicker = () => {
    setIsYearPickerOpen(!isYearPickerOpen);
    setIsMonthPickerOpen(false);
  };

  // Toggle Month Picker
  const toggleMonthPicker = () => {
    setIsMonthPickerOpen(!isMonthPickerOpen);
    setIsYearPickerOpen(false);
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
    <div ref={ref} className="relative">
      {/* Input field */}
      <input
        type="text"
        readOnly
        value={selectedDate ? selectedDate.toLocaleDateString() : ""}
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        className={\`dark:placeholder:text-grey/50 placeholder:text-darkbg/50 text-md border-darkbg/50 mt-3 min-h-8 w-full cursor-pointer rounded-lg border-2 bg-transparent px-4 py-2 placeholder:text-sm focus:outline-none dark:border-white/50 \${className}\`}
        placeholder="Select a date"
      />

      {/* Calendar dropdown */}
      {isCalendarOpen && (
        <div
          className={\`dark:bg-darkbg absolute z-10 mt-2 min-w-72 overflow-hidden rounded-lg border-2 border-gray-300 bg-white shadow-lg \${className}\`}
        >
          {/* Top bar */}
          <div className="bg-cta/90 dark:bg-hovercta/90 flex items-center justify-between px-4 py-2 text-white">
            {/* Month Picker Toggle */}
            <div className="flex items-center space-x-2">
              <button className="cursor-pointer" onClick={toggleMonthPicker}>
                {new Date(currentYear, currentMonth).toLocaleString("default", {
                  month: "long",
                })}
              </button>
            </div>

            {/* Year Picker Toggle */}
            <div className="flex items-center space-x-2">
              <button className="cursor-pointer" onClick={toggleYearPicker}>
                {currentYear}
              </button>
            </div>
          </div>

          {/* Year Picker (Scroller) */}
          {isYearPickerOpen && (
            <div className="grid grid-cols-3 gap-2 px-2 py-2">
              {[...Array(12)].map((_, index) => {
                const yearOption = scrollYear - 6 + index;
                return (
                  <div key={yearOption} className="flex justify-center">
                    <button
                      className={\`hover:bg-cta/20 w-14 cursor-pointer rounded-lg py-1 text-center transition-all dark:hover:bg-white/20 \${currentYear == yearOption && "bg-cta dark:bg-hovercta text-white"}\`}
                      onClick={() => {
                        setCurrentYear(yearOption);
                        setIsYearPickerOpen(false);
                      }}
                    >
                      {yearOption}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Month Picker (Grid) */}
          {isMonthPickerOpen && (
            <div className="grid grid-cols-3 gap-2 px-2 py-2">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((month, index) => (
                <div className="flex justify-center" key={month}>
                  <button
                    className={\`hover:bg-cta/20 w-14 cursor-pointer rounded-lg py-1 text-center transition-all dark:hover:bg-white/20 \${currentMonth == index && "bg-cta dark:bg-hovercta text-white"}\`}
                    onClick={() => {
                      setCurrentMonth(index);
                      setIsMonthPickerOpen(false);
                    }}
                  >
                    {month}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Calendar Days */}
          {!isYearPickerOpen && !isMonthPickerOpen && (
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
                  className={\`cursor-pointer rounded-lg py-1 text-center transition-all \${
                    day === null
                      ? "text-transparent"
                      : "hover:bg-cta/20 dark:hover:bg-white/20"
                  } \${
                    selectedDate?.getDate() === day &&
                    selectedDate.getMonth() === currentMonth &&
                    selectedDate.getFullYear() === currentYear &&
                    "bg-cta dark:bg-hovercta text-white"
                  }\`}
                  onClick={() => day && handleDateClick(day)}
                >
                  {day || ""}
                </div>
              ))}
            </div>
          )}

          {/* Previous and Next Buttons for Month & year Navigation */}
          {!isMonthPickerOpen && (
            <div className="flex justify-between p-2 text-xl">
              <button
                className="hover:text-cta dark:hover:text-darkmodeCTA cursor-pointer transition-all"
                onClick={() => handleArrowClick("prev")}
              >
                <MdKeyboardArrowLeft />
              </button>
              <button
                className="hover:text-cta dark:hover:text-darkmodeCTA cursor-pointer transition-all"
                onClick={() => handleArrowClick("next")}
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
`;

const usingCode = `import  DatePicker  from "./DatePicker";
import { useState } from "react"

const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
  <>
    <DatePicker onDateSelect={handleDateSelect} />
  </> );
}`;

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Date Picker | Re-Use-it!";
  }, []);

  console.log(selectedDate);

  // Handle selected date
  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
    console.log("Selected date:", date ? date.toLocaleDateString() : "None");
  };

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Date Picker</h1>
      <h2 className="py-5">A styled & customizable Date Picker component.</h2>
      <div className="mx-auto my-20 flex flex-col items-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <DatePicker onDateSelect={handleDateSelect} />
      </div>

      {/* Installation */}
      <div>
        <p className="mt-10 text-2xl font-semibold">Installation</p>
        <div className="my-10 flex gap-5">
          <button
            onClick={() => setCodeWindow(false)}
            className={`${!codeWindow ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-4 py-2 transition-all`}
          >
            CLI
          </button>
          <button
            onClick={() => setCodeWindow(true)}
            className={`${codeWindow ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-4 py-2 transition-all`}
          >
            Manual
          </button>
        </div>
        {codeWindow ? (
          <div>
            <h3 className="py-2 pl-1 italic">
              Copy and save the component as DatePicker.tsx
            </h3>
            <CodeBlock code={DatePickerCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add DatePicker`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            {" "}
            <b>value (Date, required):</b> The value for the Date Picker
            element.
          </li>
          <li>
            {" "}
            <b>onDateSelect (function, required):</b> The function to be
            executed when the value in the date picker is changed.
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override default styles.
          </li>
        </ul>
      </div>

      {/* Usage */}
      <p className="text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default DatePickerComponent;
