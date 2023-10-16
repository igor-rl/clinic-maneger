import { getServerSession } from "next-auth"
import { getIdToken } from "@/utils/sessionTokenAccessor";
import { authOptions } from "../[...nextauth]/route";

export async function GET(res:any) {
  const session = await getServerSession(authOptions);

  if (session) {
    const idToken = await getIdToken();

    // this will log out the user on Keycloak side
    const url = `${process.env.KEYCLOAK_LOGOUT_URL}?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(process.env.NEXTAUTH_URL as string)}`;

    try {
      const resp = await fetch(url, { method: "GET" });
      if (!resp.ok) {
        console.error(`Failed to logout from Keycloak. Status: ${resp.status}`);
        res.status(500).json({ error: "Failed to logout from Keycloak" });
        return;
      }

      // Destroy the session in NextAuth
      res.setHeader("Set-Cookie", "next-auth.session-token=; Max-Age=0; Path=/; HttpOnly");
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred during logout" });
      return;
    }
  }

  res.status(200).json({ message: 'Logged out successfully' });
}
