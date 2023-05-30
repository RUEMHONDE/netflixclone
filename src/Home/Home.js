import React from 'react';
import "./Home.css";
import logo from "../../src/logo.png";
import tv from "../../src/tv.png";
import up from "../../src/up.png";
import download from "../../src/download.png";
import kids from "../../src/kids.png";
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Home() {
  return (
    <div className='main-container'>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <div className='logo'><img src={logo} height="100px" width="200px"/>
        </div>
        <div className='buttons'>
            <select>
                <option>English</option>
                <option>Zulu</option>
            </select>
            <button className='signin'>Sign in</button>
        </div>
        </div>
        <div className='banner-text'>
            <h1>Unlimited Movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
        </div>
        <div className='banner-inputs'>
            <input type='text' className='email' placeholder='Email Address'></input>
            <button className='getstarted'>Get started</button>
        </div>
        <div className='sub-container'>
        <div className='cards-container'>
            <div className='cards'>
               <img src= {tv}></img>
               <h2>Enjoy on your Tv.</h2>
               <h3>Watch on Smart Tv,Playstations, Xbox, Chromecast, Apple Tv,Blu-Ray players and more</h3>
            </div>
            <div className='cards'>
            <img src= {up}></img>
            <h2>Watch anywhere.</h2>
               <h3>Stream Unlimited movies andTV shows on your phone, tablet, laptops and TV </h3>
            </div>
            <div className='cards'>
            <img src= {download}></img>
            <h2>Download your shows to watch online.</h2>
               <h3>Save your favourites easily and always have something to watch</h3>
            </div>
            <div className='cards'>
            <img src= {kids}></img>
            <h2>Create profiles for children.</h2>
               <h3>Send children on adventures with their favourite characters in space made for them </h3>
            </div>
            </div>
            <h1>Frequently Asked Questions</h1>
            
      <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <h2>Ready to watch? Enter your email to create or restart your membership</h2> 
      <div className='banner-inputs-below'>
            <input type='text' className='email' placeholder='Email Address'></input>
            <button className='getstarted'>Get started</button>
        </div>
        </div>
    </div>
  )
};
