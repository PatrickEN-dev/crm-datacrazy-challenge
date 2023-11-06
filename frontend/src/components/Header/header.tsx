"use client";

import { MenuIcon, HomeIcon, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { DatePickerDemo } from "../DatePicker/datePicker";
import SearchBar from "../SearchBar/searchBar";
import { useUsers } from "@/hooks/useUsers";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function NewHeader() {
  const router = useRouter();

  const {
    searchUsersMostOld,
    searchUsersMostRecent,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    fetchDataByDate,
  } = useUsers();

  const handleSearchUsersMostOldClick = () => {
    router.push(`?orderBy=asc`);
    searchUsersMostOld();
  };

  const handleSearchUsersMostRecentClick = () => {
    router.push(`?orderBy=desc`);
    searchUsersMostRecent();
  };

  const handleSearchUserByDateClick = () => {
    if (!startDate || !endDate) {
      toast.error("Por favor, selecione ambas as datas", {
        position: "top-right",
        autoClose: 3500,
        theme: "light",
        pauseOnHover: false,
      });
      return;
    }

    if (startDate >= endDate) {
      toast.error("A data final deve ser maior que a data inicial", {
        position: "top-right",
        autoClose: 2500,
        theme: "light",
        pauseOnHover: false,
      });
      return;
    }

    const startDateParam = startDate.toISOString();
    const endDateParam = endDate.toISOString();

    setStartDate(startDate);
    setEndDate(endDate);

    router.push(`?date?createdAt-gte=${startDateParam}&createdAt-lte=${endDateParam}`);

    fetchDataByDate();
  };

  return (
    <Card className="flex justify-between p-[1.875rem] items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" type="button">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>

          <nav className=" mt-4 flex flex-col gap-3">
            <SheetClose asChild>
              <Link href="/">
                <Button variant="outline" className="w-full justify-start gap-2" type="button">
                  <HomeIcon size={16} />
                  Início
                </Button>
              </Link>
            </SheetClose>

            <SheetHeader className="text-left text-lg font-semibold">Filtros</SheetHeader>

            <SheetTrigger asChild>
              <h1>Por período</h1>
            </SheetTrigger>

            <div className="flex flex-col">
              <div className="w-[80%] justify-start gap-2 flex items-center">
                <Calendar size={16} />
                <DatePickerDemo selectedDate={startDate} onDateSelect={setStartDate} />
              </div>

              <h2 className="w-full text-center px-2">Até</h2>

              <div className="w-[80%] justify-start gap-2 flex items-center">
                <Calendar size={16} />
                <DatePickerDemo selectedDate={endDate} onDateSelect={setEndDate} />
              </div>
            </div>

            <Button className="px-5 mb-5" onClick={handleSearchUserByDateClick}>
              Aplicar
            </Button>

            <SheetTrigger asChild>
              <h1>Por ordenação</h1>
            </SheetTrigger>

            <SheetClose asChild>
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                type="button"
                onClick={handleSearchUsersMostRecentClick}
              >
                usuários mais recentes
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                type="button"
                onClick={handleSearchUsersMostOldClick}
              >
                usuários mais antigos
              </Button>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>

      <div>
        <SearchBar />
      </div>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">CRM</span> Contacts
        </h1>
      </Link>
    </Card>
  );
}

export default NewHeader;
