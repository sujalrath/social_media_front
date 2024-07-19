const POST="post"
const COMMENT="comment"
const USER="user"
export const Api={
    User:{
      Auth:{  userLogin: "user/user-login",
      forgotPassword: "/user/forgot-password",
      verifyOtp: "user/verify-otp",
      resetPassword: "user/reset-password",
      userRegister: "user/register",}
    },
    Pages:{
      // POST
        GET_ALL_POST:`${POST}/get-all-posts`,
        GET_SINGLE_POST:`${POST}/get-single-post`,
        ADD_EDIT_POST:`${POST}/create-post`,
        DELETE_POST:`${POST}/delete-post`,

        // COMMENT
        ADD_EDIT_COMMENT:`${COMMENT}/create-comment`,
        DELETE_COMMENT:`${COMMENT}/delete-comment`,

        // USER
        GET_ALL_USERS:`${USER}/get-all-users` ,
        GET_ALL_NOTIFICATIONS:`${USER}/get-all-notifications`,
        EDIT_PROFILE:`${USER}/edit-profile`
    }
}

