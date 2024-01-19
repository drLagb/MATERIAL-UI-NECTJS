"use client"
import { List, ListItem, ListItemButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Link } from 'next/link';
import {v4 as uuidv4} from "uuid";
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';
import { Typography } from '@mui/material';

const LINKS = [
    {
        link:"/",
        name:"Profile"
    },
    {
        link:"/jobs",
        name:"Jobs"
    }
];

export function Hotbar(){
    const path = usePathname();
    return(
        <AppBar position="static">
            <Box sx={{paddingX: "5vw"}}>
                <Typography variant='h2'>{LINKS[LINKS.findIndex((item)=>item.link === path)].name}</Typography>
            </Box>
            <List sx={
                {
                    display:"flex", 
                    marginX:"2vw",
                    paddingBottom: 0
                }
                }>
                {LINKS.map((item)=>{
                    const border = (item.link === path)?2:0;
                    return (
                    <ListItem key={uuidv4()} sx={
                        {
                            borderBottom:border,
                            minWidth:"50px",
                            maxWidth:"10rem", 
                            display:"flex",
                            justifyContent: "center",
                            maxHeight: "5vh",
                            minHeight: "30px"
                        }
                        }>
                        <ListItemButton component={Link} href={item.link}
                            sx={
                                {
                                    display:"flex",
                                    justifyContent:"center",
                                }
                            }
                            >
                            {item.name}
                        </ListItemButton>
                    </ListItem>);
                })}
            </List>
        </AppBar>
    );
}