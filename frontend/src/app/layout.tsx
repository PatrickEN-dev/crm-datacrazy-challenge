import { UsersProvider } from "@/contexts/Users/users.context";
import "./globals.css";
import { IChildrenProps } from "@/@types/context.global";
import { ModalProvider } from "@/contexts/Modal/modal.context";

export default function RootLayout({ children }: IChildrenProps) {
  return (
    <html lang="en">
      <body>
        <UsersProvider>
          <ModalProvider>{children}</ModalProvider>
        </UsersProvider>
      </body>
    </html>
  );
}
