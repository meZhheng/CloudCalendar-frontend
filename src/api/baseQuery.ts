import { message } from "antd";

export const baseUrl = "";

export const InterceptorsResponse = (res: any) => {
  try {
    const msg = res.message;
    switch (res.code) {
      case 200:
        return res;
      case 401:
        message.error(msg).then(() => {});
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject("error");
      case 500:
        message.error(msg).then(() => {});
        return Promise.reject(new Error(msg));
      default:
        message.error(msg).then(() => {});
        return Promise.reject("error");
    }
  } catch (error: any) {
    let { message } = error;
    if (message === "Network Error") {
      // message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      // message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      // message = "系统接口" + message.substring(message.length - 3) + "异常";
    }
    return Promise.reject(error);
  }
};