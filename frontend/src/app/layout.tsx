import "./globals.css";
import { UsersProvider } from "@/contexts/Users/users.context";
import { IChildrenProps } from "@/@types/context.global";

export default function RootLayout({ children }: IChildrenProps) {
  return (
    <html lang="en">
      <body>
        <UsersProvider>{children}</UsersProvider>
      </body>
    </html>
  );
}
