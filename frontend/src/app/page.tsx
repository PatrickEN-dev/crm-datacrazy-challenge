import CreateUserButton from "@/components/CreateUserButton/createUserButton";
import UserCardList from "@/components/card/UserCardList/userCardList";
import NewHeader from "@/components/Header/header";

export default function Home() {
  return (
    <div>
      <NewHeader />

      <main className="flex flex-col items-center h-full w-full dark:bg-slate-600">
        <div className="h-full mt-5">
          <CreateUserButton />
        </div>

        <UserCardList />
      </main>
    </div>
  );
}
