import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

// Según la API  se requiere esto:
// method = POST
// body = {"email": "yull.timoteo.z@uni.pe","password": "yull23"}
// header = {Content-Type: application/json}
// Como es una solicitud que envia un body, solo es necesario incluir esta apiFetch(endPoint,{ method, headers, body } = {});
export async function loginUser(credentials = { email, password }) {
  const { token } = await apiFetch("login", { body: credentials });

  sessionStorage.setItem(tokenKey, token);
  return credentials;
  // Entrada segun API

  // {
  // 	"email": "yull.timoteo.z@uni.pe",
  // 	"password": "yull23"
  // }

  // Retorno
  // {
  // 	"token": "DNmUDLf6MANXybATZu6hYqmJ"
  // }
}

// Según la API  se requiere esto:
// method = DELETE
// body =
// header = {Content-Type: application/json}
// Como es una solicitud que envia un body, solo es necesario incluir esta
// apiFetch(endPoint,{ method, headers, body } = {});
export async function logoutUser() {
  await apiFetch("logout", { method: "DELETE" });
  sessionStorage.removeItem(tokenKey);
  // la API obtiene el token actual, y con ello realiza la soliitud
  // la función retorna el estado 204.
}
