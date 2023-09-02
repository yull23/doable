import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

//
export function listTasks() {
  return apiFetch("/tasks");
}
