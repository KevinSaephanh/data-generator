import { FC, ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center flex-col w-full min-h-screen">
      <Navbar />
      <main role="main" className="w-full md:max-w-7xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};
