import { BASE_URI, tokenKey } from "../config.js";

export default async function apiFetch(
  endPoint,
  { method, headers, body } = {}
) {
  const token = sessionStorage.getItem(tokenKey);
  // Si existe un token, existe un asesión iniciada, entonces se procede a enviar el headers según la API
  if (token) {
    headers = {
      Authorization: `Token token=${token}`,
      // Según la API se coloca "Authorization: `Token token=${token}`" para peticiones donde se requiere un token.
      ...headers,
    };
  }
  // body existe por lo general en peticiones GET o POST
  if (body) {
    // Estas peticiones, según la API, poseen un encabezado ""Content-Type": "application/json"" , e algunos poseen tambien el encabezado "Authorization: `Token token=${token}`"
    /// Ejemplo de estas, son las solicitudes PATCH para edit contact y POST para create contact
    headers = {
      ...headers,
      "Content-Type": "application/json",
    };
  }

  // Hasta el momento se ha modificado el header
  // Para usar la función fetch, esta recibe como argumento la URL base
  // y las opciones, options = {method, body, headers}
  // Modificando options:
  const options = {
    method: method || (body ? "POST" : "GET"),
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  };
  // Realizando la solicitud a la API
  const response = await fetch(BASE_URI + "/" + endPoint, options);
  // Creo un flujo para la respuesta correcta e incorrecta de la solicitud
  let data;
  if (!response.ok) {
    try {
      // await para resolver la promesa
      data = await response.json();
    } catch (error) {
      // Obtengo error de solicitud
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }
  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }
  return data;
}
