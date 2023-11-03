import "./globals.css";
import Aside from "@/components/Aside/aside";
import { IChildrenProps } from "@/@types/context.global";

export default function RootLayout({ children }: IChildrenProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
