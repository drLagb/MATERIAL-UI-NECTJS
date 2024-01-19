"use client"
import { graphql, useLazyLoadQuery } from 'react-relay';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import { Container, ImageList, Typography, ImageListItem } from '@mui/material';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const userQuery = graphql`
  query pageUserQuery {
    currentUser {
      name
      avatarUrl
      userSkills {
        skill {
          name
        }
        experience
      }
      answers {
        url
      }
      profile {
        freelancerType {
          name
        }
      }
    }
  }
`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Page() {
  const data = useLazyLoadQuery(userQuery, {});
  const {name, avatarUrl, profile, userSkills, answers, id} = data.currentUser;
  const industry = profile.freelancerType.name;
  console.log(userSkills);
  return (
    <main style={{}}>
      <Grid sx={{paddingX:"3vw", marginTop:"0.1vh", width: "100%"}} container  spacing={{ xs: 1, sm:3, md: 5 }} >
        <Grid xs={12} sm={4} md={4} >
          <Stack spacing={1}>
            <div style={{display:"flex", justifyContent:"center"}}>
              <Avatar 
                src={avatarUrl} 
                alt={`${name}'s avatar`}
                sx={{width:"80%", height:"80%"}}/>
            </div>
            <Typography variant='h1'><span>{name}</span><span>{id}</span></Typography>
            <Typography variant='h3'>{industry}</Typography>
          </Stack>
        </Grid>
        <Grid xs={12} sm={7} md={8} 
          sx={{paddingX:"4vw"}}>
          <Container 
          sx={
            { 
              border:1, 
              height: "100%", 
              borderRadius:"20px", 
              minHeight:"50vh",
              paddingY:"3vh",
              width:"100%"
            }
            }>
            <ImageList sx={{ width: "100%" }} cols={4} rowHeight={164}>
              {answers.map((item, index)=>{
                return (
                  <ImageListItem key={index} sx={{width:"30vw", minWidth:"250px", minHeight:"200px"}}>
                    <video src={item.url} controls style={{width:"100%", height:"100%"}}></video>
                  </ImageListItem>
                );
              })}
            </ImageList>
            <Stack 
              direction="row" 
              spacing={1} 
              divider={<Divider orientation="vertical" flexItem />}
              flexWrap="wrap"
              useFlexGap
              justifyContent={"center"}>
              {userSkills.map((item)=>{
                return(
                  <Item>
                    <div>
                      <span>{item.skill.name} </span>
                      <span><strong>{item.experience}{(item.experience !== 1)?"yrs":"yr"}</strong></span>
                  </div>
                  </Item>
                  );
              })}
            </Stack>
          </ Container>
        </Grid>
      </Grid>
    </main>
  );
}
