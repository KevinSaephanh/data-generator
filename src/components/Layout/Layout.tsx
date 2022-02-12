import { FC, ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  console.log(children);

  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen">
      <Navbar />
      <main className="flex-grow w-screen bg-blue-200">{children}</main>
      <Footer />
    </div>
  );
};
