import Jpg from "../assets/Jpg";
import Png from "../assets/Png";
import Svg from "../assets/Svg";
import Form from "../component/common/Form/Form";
import PrimaryButton from "../component/common/PrimaryButton";
import Header from "../component/user/defaultLayout/Header";
import Sidebar from "../component/user/defaultLayout/Sidebar";
import { Api } from "../config/Api";
import { DataService, doRequest, IMAGE_ENDPOINT } from "../config/DataService";
import { addEditComment, addEditPost, deleteComments, deletePost, editProfile, getAllNotifications, getAllPost, getAllUser, userLogin, userRegister } from "../redux/features/user/UserServices";
import { userLogout } from "../redux/features/user/UserSlice";
import { userLoginValidationSchema, userProfileValidationSchema, userRegisterValidationSchema } from "../validation/validation/UserValidation";
import Message from "./user/pages/message/Message";


export default{
    Header,
    Sidebar,
    Svg,
    PrimaryButton,
    Message,
    doRequest,
    DataService,
    Api,
    getAllPost,
    addEditPost,
    userLogin,
    userRegister,
    getAllNotifications,
    getAllUser,
    deletePost,
    editProfile,
    Form,
    IMAGE_ENDPOINT,
    addEditComment,userLoginValidationSchema,
    userRegisterValidationSchema,
    userProfileValidationSchema,
    userLogout
,Png,
deleteComments,
Jpg
}