"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function AuthStatus() {
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
      <Link href="perfil" className="text-white hover:underline">
        Perfil
      </Link>
    );
  }

  return (
    <a
      className="text-white hover:underline"
      onClick={() => signIn("keycloak", { callbackUrl: '/dashboard/perfil' })}
    >
      Login
    </a>
  );
}
