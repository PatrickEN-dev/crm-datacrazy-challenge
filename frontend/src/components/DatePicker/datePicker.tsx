"use client";

import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

export function DatePickerDemo() {
  const [date, setDate] = useState<Date>();

  console.log(date);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className={cn("border-none w-full justify-normal")}>
          {date ? format(date, "PPP") : <span>Escolha uma data</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
