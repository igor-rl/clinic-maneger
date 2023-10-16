"use client";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function AccountDetail() {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status != "loading" && session && !session.user) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);

  if (status == "loading") {
    return <div className="my-3">Loading...</div>;
  } else if (session && session.user) {
    return (
      <>
        <p>nome: {session.user.name}</p>
        <p>email: {session.user.email}</p>
      </>
    );
  }
  return null;
}
