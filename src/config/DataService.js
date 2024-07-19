import axios from "axios";
import { toast } from "react-toastify";


const API_ENDPOINT = "http://localhost:3032/api/";
export const IMAGE_ENDPOINT="http://localhost:3032/profile/"
export const DataService=axios.create({
    baseURL:API_ENDPOINT
})

export const doRequest = async ({ method, url, data, query,showToast=true }) => {
    try {
      const config = {
        method,
        url,
        data,
        params: query,
        
      };
      const response = await DataService(config);
      return handleResponse(response,showToast);
    } catch (error) {
      handleError(error,showToast);
    }
  };
  
  const handleResponse = (response,showToast) => {
    if (response?.data?.status === 201 || response?.data?.status === 200) {
        if(showToast){
            toast.success(response?.data?.message, { autoClose: 2000 });
        }
       
      return response;
    }
    if(showToast){
        toast.error(response?.data?.message, { autoClose: 2000 });
    }
    
    return null;
  };
  
  const handleError = (error,showToast) => {
    if(showToast){
        toast.error(error?.response?.data?.message, { autoClose: 2000 });

    }
    console.error("Request failed:", error);
  };