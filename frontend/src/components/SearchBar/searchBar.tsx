"use client";

import { Search } from "lucide-react";

const SearchBar = () => {
  // const router = useRouter();
  // const { register, handleSubmit } = useForm<IEditFormValues>();

  // const onSubmit: SubmitHandler<IEditFormValues> = (data) => {
  //   router.push("/", { query: { search: data.value } });
  // };

  return (
    <form className="relative">
      <input
        type="search"
        id="search-dropdown"
        className="w-72 p-3 border-2 rounded-full pl-10 sm:w-64 md:w-80"
        placeholder="Pesquisar notas"
      />
      <button className="absolute right-3 top-3" type="button">
        <Search />
      </button>
    </form>
  );
};
export default SearchBar;
