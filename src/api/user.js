
import { backendUrl } from "../config"

export const createUser = async (user) => {
  await fetch(`${backendUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  }).then((response) => response.json())
}