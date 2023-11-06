import CreateUserButton from "@/components/CreateUserButton/createUserButton";
import UserCardList from "@/components/card/UserCardList/userCardList";
import NewHeader from "@/components/newHeader/newHeader";

export default function Home() {
  return (
    <div>
      <NewHeader />

      <main className="flex flex-col items-center h-full w-full">
        <div className="h-full mt-5">
          <CreateUserButton />
        </div>

        <UserCardList />
      </main>
    </div>
  );
}
