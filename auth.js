import { supabase } from "./supabaseClient.js";

export async function requireAuth() {
  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    location.href = "login.html";
  }
  return data.user;
}

export async function logout() {
  await supabase.auth.signOut();
  location.href = "login.html";
}
