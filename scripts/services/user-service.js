import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

export async function createUser(credentials = { email, password }) {
  const { token } = await apiFetch("signup", { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  return credentials;
}

export async function deleteUser() {
  await apiFetch("profile", { method: "DELETE" });
  sessionStorage.removeItem(tokenKey);
}
