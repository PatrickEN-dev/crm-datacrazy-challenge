import "./globals.css";
import { UsersProvider } from "@/contexts/Users/users.context";
import { IChildrenProps } from "@/@types/context.global";
import ToastProvider from "@/contexts/Toast/toast.context";

export default function RootLayout({ children }: IChildrenProps) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <UsersProvider>{children}</UsersProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
