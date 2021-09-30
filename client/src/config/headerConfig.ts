import { baseUrl } from "./paths";

export const apiHeaderConfig = (endpoint?: string) => {
    return {
      'Authorization': '',
      'Access-Control-Allow-Headers': 'Accept',
    'Target-URL': `${baseUrl}${endpoint}`
  }
}