import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

export async function loginUser(credentials = { email, password }) {
  // Según la API  se requiere esto:
  // method = post
  // body = {"email": "yull.timoteo.z@uni.pe","password": "yull23"}
  // header = {Content-Type: application/json}
  // Como es una solicitud que envia un body, solo es necesario incluir esta
  const { token } = await apiFetch("/login", { body: credentials });
  // apiFetch(endPoint,{ method, headers, body } = {});
  // console.log(user);
  sessionStorage.setItem(tokenKey, token);
  return credentials;
}

export async function logoutUser() {
  // Según la API  se requiere esto:
  // method = DELETE
  // body =
  // header = {Content-Type: application/json}
  // Como es una solicitud que envia un body, solo es necesario incluir esta
  await apiFetch("/logout", { method: "DELETE" });
  // apiFetch(endPoint,{ method, headers, body } = {});
  sessionStorage.removeItem(tokenKey);
}
