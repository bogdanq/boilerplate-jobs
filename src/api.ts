import axios, { AxiosInstance } from "axios";
import cookies from "browser-cookies";
let baseUrl =
  "https://cors-anywhere.herokuapp.com/https://uxcandy.com/~shapoval/test-task-backend/v2/";

class Api {
  protected token: string | null;
  protected request: AxiosInstance;
  constructor(protected url: string) {
    this.url = url;
    this.token = cookies.get("token");
    this.request = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "multipart/form-data",
        token: this.token,
      },
    });
  }

  get(url: string) {
    return this.request.get(url);
  }

  post(url: string, data: any) {
    return this.request.post(url, data);
  }
}

export default new Api(baseUrl);
