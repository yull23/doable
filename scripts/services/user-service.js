import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

export async function createUser(credentials = { email, password }) {
  const { token } = await apiFetch("signup", { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  // Entrada segun API

  // {
  // 	"email": "yull0.timoteo.z@uni.pe",
  // 	"password": "yull23"
  // }

  // Retorno
  // {
  // 	"token": "4YmLhmy4CNkBRBP5BAq9KdBe"
  // }
}

export async function deleteUser() {
  await apiFetch("profile", { method: "DELETE" });
  sessionStorage.removeItem(tokenKey);
  // la API obtiene el token actual, y con ello realiza la soliitud
  // la función retorna el estado 204.
}
