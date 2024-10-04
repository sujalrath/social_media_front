
import React, { useEffect, useState } from "react";
import Index from "../../../Index";
import { Avatar, Skeleton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PagesIndex from "../../../PagesIndex";
import { toast } from "react-toastify";
import { Delete } from "@mui/icons-material";

const Dashboard = () => {
  const dispatch = Index.useDispatch();
  const user = Index.useSelector((state) => state.user.userData);
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showCommentId, setShowCommentId] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [content, setContent] = useState("");
  const [selectedComments, setSelectedComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [editPostId, setEditPostId] = React.useState("");
  const open = Boolean(anchorEl);

  const handleClick = (event, postId) => {
    setEditPostId(postId);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const clearImagePreview = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleShowComment = (id) => {
    setShowCommentId(id);
    setShowComment(!showComment);
  };

  const handleAddEditPost = async () => {
    setDisabled(true);
    try {
      const urlencoded = new FormData();
      urlencoded.append("content", content);
      urlencoded.append("postImage", image);
      urlencoded.append("author", user?.id);
      if (editPostId) {
        urlencoded.append("postId", editPostId);
      }
      if (image) {
        const response = await dispatch(PagesIndex.addEditPost(urlencoded));
        if (response?.payload?.status === 201 || response?.payload?.status === 200) {
          setContent("");
          setImage(null);
          setEditPostId("");
          setImagePreview("");
          setDisabled(false);
          getAllUserPost();
        }
      } else {
        setTimeout(() => {
          setDisabled(false);
        }, 2000);
        toast.error("Please select an image.");
      }
    } catch (error) {
      setTimeout(() => {
        setDisabled(false);
      }, 2000);
      console.error("Error:", error);
    }
  };

  const handleAddComment = async (postId, userId) => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("content", commentText);
    urlencoded.append("postId", postId);
    urlencoded.append("commentedBy", user?.id);
    urlencoded.append("userId", userId);
    if (commentText) {
      const response = await dispatch(PagesIndex.addEditComment(urlencoded));
      if (response?.payload?.status === 201) {
        setCommentText("");

        setPostList((prevPostList) => {
          const updatedPostList = prevPostList.map((post) => {
            if (post._id === postId) {
              return {
                ...post,
                comments: [
                  {
                    content: commentText,
                    author: {
                      _id: user?.id,
                      userName: user?.userName,
                    },
                    createdAt: new Date().toISOString(),
                  },
                  ...post.comments,
                ],
              };
            }
            return post;
          });
          return updatedPostList;
        });
      }
    }
  };

  const getAllUserPost = async () => {
    setLoading(true);
    try {
      const response = await dispatch(PagesIndex.getAllPost());
      if (response?.payload?.status === 200) {
        setPostList(response.payload.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const handleEdit = (postId) => {
    const postToEdit = postList.find((post) => post._id === postId);
    if (postToEdit) {
      setContent(postToEdit.content);
      if (postToEdit.postImage.length > 0) {
        setImagePreview(`${PagesIndex.IMAGE_ENDPOINT}${postToEdit.postImage[0]}`);
        setImage(postToEdit.postImage[0]);
      }
      setAnchorEl(null); 
    }
  };

  const toggleCommentSelection = (commentId) => {
    setSelectedComments((prevSelected) => {
      if (prevSelected.includes(commentId)) {
        return prevSelected.filter((id) => id !== commentId);
      } else {
        return [...prevSelected, commentId];
      }
    });
  };

  const handleDeleteSelectedComments = async (postId) => {
    if (selectedComments.length === 0) {
      toast.warning("Select comments to delete");
      return;
    }
    const dataToSend = {
      postId: postId,
      commentIds: selectedComments,
    };

    const response = await dispatch(PagesIndex.deleteComments(dataToSend));
    if (response?.payload?.status === 200) {
      setPostList((prevPostList) => {
        return prevPostList.map((post) => {
          if (post._id === postId) {
            return {
              ...post,
              comments: post.comments.filter((comment) => !selectedComments.includes(comment._id)),
            };
          }
          return post;
        });
      });
      toast.success("Comments deleted successfully");
    } else {
      toast.error("Failed to delete comments");
    }

    setSelectedComments([]);
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await dispatch(PagesIndex.deletePost({ postId: postId }));
      if (response?.payload?.status === 200) {
        setEditPostId("");
        setAnchorEl(null);
        getAllUserPost();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getAllUserPost();
  }, []);

  return (
    <Index.Box className="user-centre-main">
      <Index.Box className="user-centre-inner-main">
        <Index.Box className="user-center-header-main">
          <Index.Card className="user-center-header-card">
            <Index.Box className="user-center-header-card-upper">
              {user.profile? 
                <img  
                className="header-img"
                alt="jaiho"
                src={`${PagesIndex.IMAGE_ENDPOINT}${user?.profile}`}
/>
              :<Index.Avatar />}
            
              
              <Index.Box className="form-group">
                <Index.TextField
                  className="form-control"
                  fullWidth
                  value={content}
                  placeholder="Write something...?"
                  onChange={(e) => setContent(e.target.value)}
                />
              </Index.Box>
            </Index.Box>
            {imagePreview && (
              <Index.Box className="image-preview">
                <img src={imagePreview} alt="Preview" />
                <button className="close-button" onClick={clearImagePreview}>
                  <Index.Close />
                </button>
              </Index.Box>
            )}
            <Index.Box className="user-center-header-card-lower">
              <Index.Box className="user-center-header-card-lower-left">
                <label htmlFor="imageUpload" className="custom-file-upload">
                  <Index.CloudUpload className="upload-icon" />
                  <Index.Typography>Photos</Index.Typography>
                </label>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </Index.Box>
              <Index.Box className="user-center-header-card-lower-right">
                <PagesIndex.PrimaryButton
                  btnLabel="Post"
                  loading={disabled}
                  classname="post-upload-btn"
                  onClick={handleAddEditPost}
                />
              </Index.Box>
            </Index.Box>
          </Index.Card>
        </Index.Box>
        {postList &&
          postList.map((item) => (
            <Index.Card key={item._id} className="user-post-card-main">
              <Index.CardHeader
                avatar={
                  loading ? (
                    <Skeleton
                      animation="wave"
                      variant="circular"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Avatar
                      alt="Avatar"
                      src={`${PagesIndex.IMAGE_ENDPOINT}${item?.author?.profile}`}
                    />
                  )
                }
                action={
                  loading ? null : (
                    item?.author?._id !== user.id ? null : (
                      <Index.IconButton
                        aria-label="settings"
                        onClick={(e) => handleClick(e, item?._id)}
                      >
                        <MoreVertIcon />
                      </Index.IconButton>
                    )
                  )
                }
                title={
                  loading ? (
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="80%"
                      style={{ marginBottom: 6 }}
                    />
                  ) : (
                    item?.author?.userName
                  )
                }
              />
              {loading ? (
                <Skeleton
                  sx={{ height: 190 }}
                  animation="wave"
                  variant="rectangular"
                />
              ) : (
                <Index.CardMedia
                  component="img"
                  height="400"
                  className="user-post"
                  image={`${PagesIndex.IMAGE_ENDPOINT}${item.postImage[0]}`}
                  alt="post"
                />
              )}
              <Index.CardContent>
                {loading ? (
                  <>
                    <Skeleton
                      animation="wave"
                      height={10}
                      style={{ marginBottom: 6 }}
                    />
                    <Skeleton animation="wave" height={10} width="80%" />
                  </>
                ) : (
                  <Index.Typography
                    variant="body2"
                    color="text.secondary"
                    component="p"
                    sx={{ textWrap: "nowrap", overflow: "hidden" }}
                  >
                    {item.content || ""}
                  </Index.Typography>
                )}
              </Index.CardContent>
              <Index.Divider />
              <Index.Box className="post-icon-main-box">
                <Index.Box className="post-icon-main">
                  <Index.IconButton
                    className="comment-icon"
                    onClick={() => handleShowComment(item._id)}
                  >
                    <Index.Comment />
                  </Index.IconButton>
                </Index.Box>
                <Index.Typography variant="body2" className="comment-count">
                  {item.comments.length > 0
                    ? `commented by ${item?.comments?.[0]?.author?.userName} ${item?.comments?.length>1 ? ("and "+ (item?.comments?.length-1)+" others"):""}`
                    : ""}
                </Index.Typography>
              </Index.Box>
              <Index.CardContent>
                {showComment && showCommentId === item._id && (
                  <Index.Box
                    sx={{ marginTop: 2, display: "flex" }}
                    className="form-group"
                  >
                    <Index.Divider />
                    <Index.TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Add a comment..."
                      value={commentText}
                      className="form-control comment-control"
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <Index.Button
                      onClick={() => handleAddComment(item._id, item?.author?._id)}
                      color="secondary"
                    >
                      <Index.Send />
                    </Index.Button>
                  </Index.Box>
                )}
                <Index.Box
                  className={`${showComment && showCommentId === item._id ? "comment-box" : ""}`}
                >
                  {showComment && showCommentId === item._id
                    ? item.comments.length > 0
                      ? item.comments.map((comment, index) => (
                          <Index.Box
                            key={index}
                            className={`main-comment-box ${
                              selectedComments.includes(comment._id) ? "selected-comment" : ""
                            }`}
                            onClick={() => 
                            {  if(item.author?._id===user?.id){
                              toggleCommentSelection(comment._id)
                            }}}
                            // onDoubleClick={() => toggleCommentSelection(comment._id)}
                          >
                            <Index.Box className="main-comment-upper">
                              <Index.Box className="comment-profile">
                                <img
                                  src={
                                    comment?.author?.profile
                                      ? PagesIndex.IMAGE_ENDPOINT + comment.author.profile
                                      : PagesIndex.Jpg.dummyImage
                                  }
                                  alt="Profile"
                                />
                              </Index.Box>
                              <Index.Typography className="comment-name">
                                {comment?.author?.userName}
                              </Index.Typography>
                            </Index.Box>
                            <Index.Box className="main-comment-lower">
                              <Index.Typography
                                variant="body2"
                                className="comment-content"
                              >
                                {comment.content}
                              </Index.Typography>
                              <Index.Typography
                                variant="body2"
                                sx={{ marginTop: 1 }}
                              >
                                {Index.moment(comment.createdAt).format(
                                  "DD/MM/YYYY hh:mm A"
                                )}
                              </Index.Typography>
                            </Index.Box>
                          </Index.Box>
                        ))
                      : "No comments yet"
                    : ""}
                </Index.Box>
                {selectedComments.length > 0 && (
                  <Delete
                    className="delete-comment-icon"
                    onClick={() => handleDeleteSelectedComments(item._id)}
                  />
                )}
              </Index.CardContent>
            </Index.Card>
          ))}
      </Index.Box>
      <Index.Menu
        className="drop-header-menu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Index.MenuItem onClick={() => handleEdit(editPostId)} className="drop-header-menuitem">
          Edit
        </Index.MenuItem>
        <Index.MenuItem onClick={() => handleDeletePost(editPostId)} className="drop-header-menuitem">
          Delete
        </Index.MenuItem>
      </Index.Menu>
    </Index.Box>
  );
};

export default Dashboard;
