"use client";

import { IEditFormValues } from "@/@types/form.globals";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { Search } from "lucide-react";

const SearchBar = () => {
  const { register, handleSubmit } = useForm<IEditFormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<IEditFormValues> = (data) => {
    console.log(data);
    router.push("/", { query: { search: data.value } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="relative md:w-[300px]">
          <input
            type="search"
            id="search-dropdown"
            className="block p-3 w-full border-[2px]"
            placeholder="Pesquisar notas"
            {...register("value")}
            style={{
              paddingRight: "40px",
            }}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-slate-300"
          >
            <Search />
          </button>
        </div>
      </div>
    </form>
  );
};
export default SearchBar;
