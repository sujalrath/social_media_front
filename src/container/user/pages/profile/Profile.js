import React, { useState } from 'react'
import PagesIndex from '../../../PagesIndex'
import Index from '../../../Index'
import { updateProfile } from '../../../../redux/features/user/UserSlice'

const Profile = () => {

    const navigate = Index.useNavigate()

  const dispatch = Index.useDispatch()
  const user = Index.useSelector((state) => state.user.userData)

  const [loading, setLoading] = useState(false)

    const initialValues = {
        email: user?.email?user?.email:"",
        userName: user?.userName?user?.userName:"",
        profile:user?.profile?user?.profile:""
      };
    const fields = [
        { name: 'profile', label: 'profile', type: 'file', className: 'form-control-file' }, 
        { name: 'email', label: 'Email', type: 'text', className: 'form-control' },
        { name: 'userName', label: 'User Name', type: 'text', className: 'form-control',
          customOnChange: (e, setFieldValue) => {
            const newValue = e.target.value.replace(/[^a-zA-Z]/g, '');
            setFieldValue('userName', newValue);
          },
         },
      
      ];
      const handleSubmit = async (values) => {
        setLoading(true)
        const data=new FormData()
        data.append("email",values.email)
        data.append("userName",values.userName)
        data.append("profile",values.profile)
        try {
          const response = await dispatch(PagesIndex.editProfile(data))
          console.log(response, 2000);
          if (response.payload.status === 200) {
            dispatch(updateProfile(response.payload.data))
            navigate("/user/dashboard")
        
            setLoading(false)
          } else {
            setTimeout(() => {
              setLoading(false)
    
            }, 2000);
    
          }
    
        } catch (error) {
          setTimeout(() => {
            setLoading(false)
    
          }, 2000); console.log(error, "error");
        }
    
    
    
      };
  return (
<Index.Box className="user-centre-main">
<Index.Box className="user-centre-inner-main profile-inner-main">
    
<PagesIndex.Form
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={PagesIndex.userProfileValidationSchema}
          fields={fields}
          loading={loading}
          type="login"
          btnLabel="Submit"
        />
    
    </Index.Box></Index.Box>
  )
}

export default Profile