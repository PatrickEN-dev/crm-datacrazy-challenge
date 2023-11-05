import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface IDatePickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date | null) => void;
}

export function DatePickerDemo({ selectedDate, onDateSelect }: IDatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={cn("border-none w-full justify-normal")}>
          {selectedDate ? format(selectedDate, "PPP") : <span>Escolha uma data</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate as any}
          onSelect={onDateSelect as any}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
