import Logout from "@/components/logout";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinic Manager - Painel",
  description: "Clinic Manager Dashboard",
};
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen h-screen">
      <div className="hidden md:block md:w-2/5 lg:w-1/4 h-screen bg-slate-950">
        <h1 className="text-3xl">Clinic-Manager</h1>
        <Logout/>
        <Link href='/dashboard'>Home</Link> <br/>
        <Link href='/dashboard/plano'>Plano</Link>
      </div>
      <div className="flex-grow h-screen container mx-auto px-4">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
