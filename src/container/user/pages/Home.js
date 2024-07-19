import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  TextField,
  Divider,
  InputAdornment,
} from '@mui/material';
import {
  Search,
  FilterList,
  Favorite,
  Comment,
  Share,
  PersonAdd,
  Person,
} from '@mui/icons-material';

const Socialkick = () => {
  return (
    <Box className="demo" sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    //   backgroundColor: '#f2f2f2',
    }}>
      <Box sx={{
        backgroundColor: '#fff',
        padding: 2,
      }}>
        <Typography variant="h5" sx={{
          fontWeight: 'bold',
        }}>Socialkick</Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 1,
        }}>
          <TextField
            placeholder="Search for creators, Inspirations and Projects"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <IconButton>
            <Person />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{
        padding: 2,
      }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{
                fontWeight: 'bold',
                marginBottom: 1,
              }}>Activity</Typography>
              <Typography variant="subtitle1" sx={{
                marginBottom: 1,
              }}>Stories about you</Typography>
              <Typography variant="body2" sx={{
                marginBottom: 2,
              }}>Mentions</Typography>
              <Typography variant="body2">2 Stories mentioned you</Typography>
              <Divider />
              <Typography variant="h6" sx={{
                fontWeight: 'bold',
                marginBottom: 1,
                marginTop: 2,
              }}>New</Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sonaamjad started following you"
                    secondary="1 minute ago"
                  />
                  <IconButton>
                    <PersonAdd />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sonaamjod liked your photo"
                    secondary="2 minutes ago"
                  />
                  <IconButton>
                    <Favorite />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Solma liked your photo"
                    secondary="5 minutes ago"
                  />
                  <IconButton>
                    <Favorite />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Katherine storted following you"
                    secondary="10 minutes ago"
                  />
                  <IconButton>
                    <PersonAdd />
                  </IconButton>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card sx={{
            marginTop: 2,
          }}>
            <CardContent>
              <Typography variant="h6" sx={{
                fontWeight: 'bold',
                marginBottom: 1,
              }}>Explore</Typography>
              <Typography variant="subtitle1" sx={{
                marginBottom: 1,
              }}>See all</Typography>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Typography variant="body2">Product</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">Website</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">Designing</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{
                marginTop: 1,
              }}>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://images.unsplash.com/photo-1534309077273-a7cf29707d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    title="Product"
                  />
                </Grid>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://images.unsplash.com/photo-1557405896-159284b7f122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    title="Website"
                  />
                </Grid>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://images.unsplash.com/photo-1498329641545-7b1c376b506f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    title="Designing"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{
                marginTop: 1,
              }}>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://images.unsplash.com/photo-1534309077273-a7cf29707d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    title="Product"
                  />
                </Grid>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://images.unsplash.com/photo-1557405896-159284b7f122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    title="Website"
                  />
                </Grid>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://images.unsplash.com/photo-1498329641545-7b1c376b506f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    title="Designing"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{
                fontWeight: 'bold',
                marginBottom: 1,
              }}>Your Story</Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 1,
              }}>
                <Grid container spacing={1} sx={{
                  marginTop: 1,
                }}>
                  <Grid item xs={3}>
                    <CardMedia
                      component="img"
                      height="80"
                      image="https://images.unsplash.com/photo-1534309077273-a7cf29707d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                      title="Your Story"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <CardMedia
                      component="img"
                      height="80"
                      image="https://images.unsplash.com/photo-1557405896-159284b7f122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                      title="all basti09"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <CardMedia
                      component="img"
                      height="80"
                      image="https://images.unsplash.com/photo-1498329641545-7b1c376b506f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                      title="azharnoki"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <CardMedia
                      component="img"
                      height="80"
                      image="https://images.unsplash.com/photo-1534309077273-a7cf29707d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                      title="armannpokni"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Divider />
              <Card sx={{
                marginTop: 2,
              }}>
                <CardContent>
                  <Typography variant="h6" sx={{
                    fontWeight: 'bold',
                    marginBottom: 1,
                  }}>Sorah Nichols</Typography>
                  <Typography variant="body2">New York City, NY</Typography>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://images.unsplash.com/photo-1534309077273-a7cf29707d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    title="Sorah Nichols"
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 1,
                  }}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                      <IconButton>
                        <Favorite />
                      </IconButton>
                      <IconButton>
                        <Comment />
                      </IconButton>
                      <IconButton>
                        <Share />
                      </IconButton>
                    </Box>
                    <Typography variant="body2">Liked by Annonmated and 238 others</Typography>
                  </Box>
                  <Divider />
                  <Typography variant="h6" sx={{
                    fontWeight: 'bold',
                    marginBottom: 1,
                    marginTop: 2,
                  }}>Andrew Nick</Typography>
                  <Typography variant="body2">New York City, NY</Typography>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{
                fontWeight: 'bold',
                marginBottom: 1,
              }}>Messages</Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 1,
              }}>
                <TextField
                  placeholder="Search messages"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <FilterList />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </Box>
              <Divider />
              <Typography variant="subtitle1" sx={{
                marginBottom: 1,
              }}>Primary</Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Arman Rajokni"
                    secondary="Active 10 min ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sona Javed"
                    secondary="Active 30 min ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sarah Nichols"
                    secondary="Active 1 hour ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Joshua Jack"
                    secondary="Active 2 hours ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Nicki Bella"
                    secondary="Active 3 hours ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Josh Hick"
                    secondary="Active 5 hours ago"
                  />
                </ListItem>
              </List>
              <Divider />
              <Typography variant="subtitle1" sx={{
                marginBottom: 1,
              }}>General</Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Arman Rajokni"
                    secondary="Active 10 min ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sona Javed"
                    secondary="Active 30 min ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sarah Nichols"
                    secondary="Active 1 hour ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Joshua Jack"
                    secondary="Active 2 hours ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Nicki Bella"
                    secondary="Active 3 hours ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Josh Hick"
                    secondary="Active 5 hours ago"
                  />
                </ListItem>
              </List>
              <Divider />
              <Typography variant="subtitle1" sx={{
                marginBottom: 1,
              }}>Requests(2)</Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Arman Rajokni"
                    secondary="Active 10 min ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sona Javed"
                    secondary="Active 30 min ago"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card sx={{
            marginTop: 2,
          }}>
            <CardContent>
              <Typography variant="h6" sx={{
                fontWeight: 'bold',
                marginBottom: 1,
              }}>Suggested for you</Typography>
              <Typography variant="subtitle1" sx={{
                marginBottom: 1,
              }}>See all</Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="ajpackin"
                    secondary="Recently"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="johndowre"
                    secondary="Suggested for you"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="optonline"
                    secondary="Suggested for you"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Socialkick;
