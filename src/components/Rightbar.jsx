import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const Rightbar = () => {
    return (
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          {/* <Typography variant="h6" fontWeight={100}>
            Online Bookworms
          </Typography>
          <AvatarGroup max={7}>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/6.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
          </AvatarGroup> */}
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Trending Picks
          </Typography>
          <ImageList cols={3} rowHeight={160} gap={6}>
            <ImageListItem>
              <img
                src="https://image.ebooks.com/previews/209/209954/209954936/209954936.jpg"
                alt="The Invisible Life of Addie Larue"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449.jpg"
                alt=" The love Hypothesis"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611963786l/56882122.jpg"
                alt="Not a happy family"
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Reviews
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="" src="https://www.penguin.co.uk/content/dam/prh/books/107/1071070/9781784162122.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="The Book Thief"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Lisa Kennedy
                </Typography>
                {" -- I absolutely loved it. Yes, I did cry. I've read a lot of positive and negative reviews for this book..."}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524322945l/34499221._SY475_.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="To Kill a Kingdom"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Cindy
                </Typography>
                {" —  Fantasy is not the genre I prefer but a book about mythology and sirens and pirates is right up my alley. I truly enjoyed this book, it was a very strong debut novel, but it contained its faults..."}
              </React.Fragment>
            }
          />
        </ListItem>
        {/* <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem> */}
      </List>
        </Box>
      </Box>
    );
  };
  
  export default Rightbar;