"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export function keycloakSessionLogOut() {
  try {
    fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
}

export default function Logout(props: any) {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status != "loading" && session && !session.user) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);
  if (status == "loading") {
    return <div className="my-3">Loading...</div>;
  } else{
    return (
      <div className="my-3">
        <button
          className="text-white hover:underline"
          onClick={() => {
            keycloakSessionLogOut()
            signOut({ callbackUrl: "/login" });
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}
