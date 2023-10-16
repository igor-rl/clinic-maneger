import { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinic Manager",
  description: "Clinic Manager Dashboard",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {/* navbar desktop */}
          <div className="hidden lg:block bg-blue-500 lg:fixed w-full top-0 z-50">
            <div className="container mx-auto">
              <div className="py-2 flex justify-between items-center">
                <div className="text-white font-bold">Logo</div>
                <nav>
                  <ul className="flex space-x-4">
                    <li>
                      <a href="#" className="text-white hover:underline">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white hover:underline">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white hover:underline">
                        Services
                      </a>
                    </li>
                    <li>
                      <Link href="login" className="text-white hover:underline">
                        Login
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <main>{children}</main>
          {/* nav mobile */}
          <div className="bg-slate-400 fixed w-full bottom-0 z-50 md:block lg:hidden">
            <div className="container mx-auto py-2 flex justify-around items-center">
              <a href="#" className="text-white hover:underline">
                Home
              </a>
              <a href="#" className="text-white hover:underline">
                About
              </a>
              <a href="#" className="text-white hover:underline">
                Services
              </a>
              <Link href="login" className="text-white hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
