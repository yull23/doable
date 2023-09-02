import apiFetch from "./api-fetch.js";

export function listTasks() {
  return apiFetch("/tasks");
  // Return :

  // [
  // 	{
  // 		"id": 931,
  // 		"title": "Edited",
  // 		"due_date": "2021-10-01",
  // 		"important": true,
  // 		"completed": true,
  // 		"user_id": 216,
  // 		"created_at": "2023-08-31T01:45:11.760Z",
  // 		"updated_at": "2023-09-02T07:36:57.942Z"
  // 	},...
  // ]
}

export function showTask(id) {
  return apiFetch(`tasks/${id}`);
  // Entrada de showTask(contentEdit) segun API es el ID

  // Retorno :

  // {
  // 	"id": 931,
  // 	"title": "Edited",
  // 	"due_date": "2021-10-01",
  // 	"important": true,
  // 	"completed": true,
  // 	"user_id": 216,
  // 	"created_at": "2023-08-31T01:45:11.760Z",
  // 	"updated_at": "2023-09-02T07:36:57.942Z"
  // }
}

export function createTask(task) {
  return apiFetch("tasks", { body: task });
  // Entrada segun API

  // {
  //   title: "New task",
  //   due_date: "2021-09-30",
  // };

  /// Retorno

  // {
  // 	"id": 1080,
  // 	"title": "New task",
  // 	"due_date": "2021-09-30",
  // 	"important": false,
  // 	"completed": false,
  // 	"user_id": 216,
  // 	"created_at": "2023-09-02T07:33:49.243Z",
  // 	"updated_at": "2023-09-02T07:33:49.243Z"
  // }
}

export function editTask(id, contentEdit) {
  return apiFetch(`tasks/${id}`, { method: "PATCH", body: contentEdit });
  // Entrada segun API

  // {
  // 	"title": "Edited",
  // 	"due_date": "2021-10-01",
  // 	"important": true,
  // 	"completed": true
  // }

  /// Retorno

  // {
  // 	"user_id": 216,
  // 	"title": "Edited",
  // 	"due_date": "2021-10-01",
  // 	"completed": true,
  // 	"important": true,
  // 	"id": 931,
  // 	"created_at": "2023-08-31T01:45:11.760Z",
  // 	"updated_at": "2023-09-02T07:36:57.942Z"
  // }
}

export function deleteTask(id) {
  apiFetch(`tasks/${id}`, { method: "DELETE" });
  // Entrada segun API es el ID
  // la función retorna el estado 204.
}
