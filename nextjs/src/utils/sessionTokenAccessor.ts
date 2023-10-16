import { getServerSession } from "next-auth";
import { decrypt } from "./encryption";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getAccessToken() {
  const session = await getServerSession(authOptions);  
  if(session){    
    const accessTokenDecrypted = decrypt(session.access_token)    
    return accessTokenDecrypted;
  }
  return null;
}

export async function getIdToken() {
  const session = await getServerSession(authOptions);  
  if(session){    
    const idTokenDecrypted = decrypt(session.id_token)    
    return idTokenDecrypted;
  }
  return null;
}

export async function getUserId() {
  const session = await getServerSession(authOptions);  
  if(session && session.id){    
    return session.roles; // Como o id não é criptografado, não precisamos descriptografá-lo
  }
  return null;
}