import { fetchOpenid, saveUserInfo } from "./service";

export async function getOpenid(formData) {
  const { data } = await fetchOpenid(formData);
  return data;
}

export async function saveUser(formData) {
  const response = await saveUserInfo(formData);
  return response;
}
