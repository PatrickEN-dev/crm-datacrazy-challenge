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

function NewHeader() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const { searchUsersMostOld, searchUsersMostRecent } = useUsers();

  const handleSearchUsersMostOldClick = () => {
    router.push(`?orderBy=asc`);
    searchUsersMostOld();
  };

  const handleSearchUsersMostRecentClick = () => {
    router.push(`?orderBy=desc`);
    searchUsersMostRecent();
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

            <div className="w-full justify-start gap-2">
              <Calendar size={16} />
              <DatePickerDemo />
            </div>
            <h2 className="w-full text-center px-2">Até</h2>

            <div className="w-full justify-start gap-2">
              <Calendar size={16} />
              <DatePickerDemo />
            </div>

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
