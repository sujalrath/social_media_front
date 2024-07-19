import { createAsyncThunk } from "@reduxjs/toolkit";
import PagesIndex from "../../../container/PagesIndex";

export const userLogin=createAsyncThunk('user/userlogin',async (data,rejectWithValue)=>{
    try {
        const response = await PagesIndex.doRequest({method:"post",url:PagesIndex.Api.User.Auth.userLogin, data});
    if (response?.data?.status === 200) {

      return response.data;
    }
    else {
      return rejectWithValue(response?.data);
    }
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
})

export const userRegister=createAsyncThunk('user/userRegister',async (data,rejectWithValue)=>{
  try {
      const response = await PagesIndex.doRequest({method:"post",url:PagesIndex.Api.User.Auth.userRegister, data});
  if (response?.data?.status === 201) {

    return response.data;
  }
  else {
    return rejectWithValue(response?.data);
  }
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Something went wrong');
  }
})


export const getAllPost = createAsyncThunk(
  "user/getAllPost",
  async (data, {rejectWithValue}) => {
    try {
      const response = await PagesIndex.doRequest({
        method: "get",
        url: PagesIndex.Api.Pages.GET_ALL_POST,
        showToast:false
      });
      
      if (response?.data?.status === 200) {
        return response.data;
      } else {
        return rejectWithValue(response?.data);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

  
export const addEditPost = createAsyncThunk(
  "user/addEditPost",
  async (data, {rejectWithValue}) => {
    try {
      const response = await PagesIndex.doRequest({
        method: "post",
        url: PagesIndex.Api.Pages.ADD_EDIT_POST,
        data:data,
        query:data?.id,
        showToast:false
      });
      
      if (response?.data?.status === 200) {
        return response.data;
      } else {
        return rejectWithValue(response?.data);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
export const addEditComment = createAsyncThunk(
  "user/addEditPost",
  async (data, {rejectWithValue}) => {
    try {
      const response = await PagesIndex.doRequest({
        method: "post",
        url: PagesIndex.Api.Pages.ADD_EDIT_COMMENT,
        data:data,
        query:data?.id,
        showToast:false
      });
      
      if (response?.data?.status === 200) {
        return response.data;
      } else {
        return rejectWithValue(response?.data);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);



// user 

export const getAllUser = createAsyncThunk(
  "user/getAllUser",
  async (data, {rejectWithValue}) => {
    try {
      const response = await PagesIndex.doRequest({
        method: "get",
        url: PagesIndex.Api.Pages.GET_ALL_USERS,
        showToast:false
      });
      
      if (response?.data?.status === 200) {
       
        return response.data;
      } else {
        return rejectWithValue(response?.data);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const getAllNotifications = createAsyncThunk(
  "user/getAllNotifications",
  async (data, {rejectWithValue}) => {
    try {
      const response = await PagesIndex.doRequest({
        method: "post",
        url: PagesIndex.Api.Pages.GET_ALL_NOTIFICATIONS,
        // query:data
        data:data,
        showToast:false,
       
      });
      
      if (response?.data?.status === 200) {
       
        return response.data;
      } else {
        return rejectWithValue(response?.data);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
export const deleteComments = createAsyncThunk(
  "user/deleteComments",
  async (data, {rejectWithValue}) => {
    try {
      const response = await PagesIndex.doRequest({
        method: "post",
        url: PagesIndex.Api.Pages.DELETE_COMMENT,
        // query:data
        data:data,
        showToast:false,
       
      });
      
      if (response?.data?.status === 200) {
       
        return response.data;
      } else {
        return rejectWithValue(response?.data);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const deletePost = createAsyncThunk(
  "user/deleteComments",
  async (data, {rejectWithValue}) => {
    try {
      const response = await PagesIndex.doRequest({
        method: "post",
        url: PagesIndex.Api.Pages.DELETE_POST,
        // query:data
        data:data,
        // showToast:false,
       
      });
      
      if (response?.data?.status === 200) {
       
        return response.data;
      } else {
        return rejectWithValue(response?.data);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const editProfile = createAsyncThunk(
  "user/editProfile",
  async (data, {rejectWithValue}) => {
    try {
      const response = await PagesIndex.doRequest({
        method: "post",
        url: PagesIndex.Api.Pages.EDIT_PROFILE,
        // query:data
        data:data,
        showToast:false,
       
      });
      
      if (response?.data?.status === 200) {
       
        return response.data;
      } else {
        return rejectWithValue(response?.data);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
