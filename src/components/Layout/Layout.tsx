import { FC, ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  console.log(children);

  return (
    <div className="flex items-center justify-center flex-col w-screen min-h-screen overflow-hidden">
      <Navbar />
      <main className="flex-grow w-screen">{children}</main>
      <Footer />
    </div>
  );
};
