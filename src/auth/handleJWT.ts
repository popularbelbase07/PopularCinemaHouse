import { authenticationResponse, claim } from "./auth.models.d";

const tokenKey = 'token';
const expirationKey = 'token-expiration';
export function saveToken(authData: authenticationResponse) {
  // storing the data in local storage
  localStorage.setItem(tokenKey, authData.token);
  localStorage.setItem(expirationKey, authData.expiration.toString());
}

export function getClaims(): claim[] {
  const token = localStorage.getItem(tokenKey);

  if (!token) {
    return [];
  }

  const expiration = localStorage.getItem(expirationKey)!;
  const expirationDate = new Date(expiration);

  if (expirationDate <= new Date()) {
    logout();
    return []; // The token has expire
  }
  // Middle part of the jwt token contains claim [1]
  const dataToken = JSON.parse(atob(token.split('.')[1]));
  const response: claim[] = [];
  for (const property in dataToken) {
    response.push({ name: property, value: dataToken[property]});
  }
  return response;
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(expirationKey);
}
// Get JWT TOKEN
export function getToken(){
  return localStorage.getItem(tokenKey);
}
