import CreateUserButton from "@/components/CreateUserButton/createUserButton";
import UserCardList from "@/components/card/UserCardList/userCardList";
import NewHeader from "@/components/newHeader/newHeader";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <NewHeader />

      <main className="flex flex-col items-center h-full">
        <div className="h-full mt-5">
          <CreateUserButton />
        </div>

        <UserCardList />
      </main>
    </div>
  );
}
