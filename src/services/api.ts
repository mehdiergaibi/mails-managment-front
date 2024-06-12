import { CourierArr } from "@/Types/CourierArr";
import { CourierDep } from "@/Types/CourierDep";
import { User } from "@/Types/User";
import axios, { AxiosError } from "axios";

const URL = import.meta.env.VITE_URI_API;
// auth
export const auth = async (dataUser: User) => {
  try {
    const response = await axios.post(`${URL}user/login`, dataUser);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
};
// get couriers depart
export const getMailDep = async () => {
  try {
    const response = await axios.get(`${URL}courier-depart`);
    //console.log(response.data);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
};
// get courier arrive
export const getMailArr = async () => {
  try {
    const response = await axios.get(`${URL}courier-arr`);
    //console.log(response.data);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
};
// get types
export const getTypes = async () => {
  try {
    const response = await axios.get(`${URL}type`);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
}
// get divisios
export const getDvisions = async () => {
  try {
    const response = await axios.get(`${URL}division`);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
}
// add Maildep
export const addMailDep = async (data: CourierDep) => {
  try {
    const response = await axios.post(
      `${URL}courier-depart/add-mail-dep`,
      data
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
};
//add mail arr
export const addMailArr = async (data: CourierArr) => {
  try {
    const response = await axios.post(`${URL}courier-arr/add-mail-arr`, data);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
};
// delete MailDep
export const deleteMailDep = async (id: string) => {
  try {
    const response = await axios.delete(
      `${URL}courier-depart/delete-mail/${id}`
    );
    //console.log(response.data);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.message || err.message);
    } else {
      throw new Error("Unexpected Error");
    }
  }
};
// delete mail arr
export const deleteMailArr = async (id: string) => {
  try {
    const response = await axios.delete(`${URL}courier-arr/delete-mail/${id}`);
    //console.log(response.data);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.message || err.message);
    } else {
      throw new Error("Unexpected Error");
    }
  }
};
// update Mail Dep
export const updateMailDep = async (
  id: string | undefined,
  data: CourierDep
) => {
  try {
    const response = await axios.patch(
      `${URL}courier-depart/update-mail/${id}`,
      data
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.message || err.message);
    } else {
      throw new Error("Unexpected Error");
    }
  }
};
// update mail arr
export const updateMailArr = async (
  id: string | undefined,
  data: CourierArr
) => {
  try {
    const response = await axios.patch(
      `${URL}courier-arr/update-mail/${id}`,
      data
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.message || err.message);
    } else {
      throw new Error("Unexpected Error");
    }
  }
};
