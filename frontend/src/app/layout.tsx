import "./globals.css";
import { UsersProvider } from "@/contexts/Users/users.context";
import { IChildrenProps } from "@/@types/context.global";
import NewHeader from "@/components/newHeader/newHeader";

export default function RootLayout({ children }: IChildrenProps) {
  return (
    <html lang="en">
      <body>
        <UsersProvider>{children}</UsersProvider>
      </body>
    </html>
  );
}
