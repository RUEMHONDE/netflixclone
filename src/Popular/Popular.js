import React, { useState } from 'react';
import "./popular.css";
import interstellar from "../../src/interstellar.jpg";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { Link} from "react-router-dom";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function Popular() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [ishidden, sethidden] = useState("none");
  const [vol, changeVol] = useState(0);
  const [play, setplayback] = useState(true);
  const [videostate, setvideostate] = useState("Play")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false); 
    sethidden("none")
    setplayback(false);
  }
  const [val, setVal] = useState();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
  const navigateLeft = () =>{
    document.getElementById("user-cards").scroll({top:0, left: "100vw", behavior: "smooth"})
  };
  const navigateRight = () =>{
    document.getElementById("user-cards").scrollLeft += 100;
  }
  
  const handleHover = (e) =>{
    setplayback(true);
    sethidden("block");
    // console.log(e);
    // setVal(e);
    // setOpen(true);
  };
  const Popup = (props) =>{
    return (
      <div>
      <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {props.data}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
      <ReactPlayer 
      width="300px"
      height="200px"
      url="https://youtu.be/zAGVQLHvwOY" 
      volume={value/100}
        playing={play}
        controls={true}
        style={{marginLeft:"auto", marginRight:"auto"}}
        onSeek={(e)=> console.log("onSeek", e)
        }
        >
      </ReactPlayer>

      <button onClick={()=>{setplayback(!play);
      setvideostate(play?"Play": "Pause");
      }}>{videostate}</button>
      <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
            </Box>
    </Box>
     </div>
    )
    
  };
  return (
    <div>
      <h1 style={{color: "#fff", marginLeft: "25px"}}>Popular on Netflix</h1>
    <div className="user-cards-container">
        <div className='user-cards' id='user-cards'>
                 {arr.map((elem)=>{
            return (<>
            <Link to="player">
              {" "}
            <div className='user-card' 
            onMouseOver={handleHover}
            onMouseOut={handleClose}
            >
            {/* <img src={interstellar} className='thumbnail-card'/>
            <div style={{color:"orange"}}>{elem}</div> */}
            <ReactPlayer url="https://www.youtube.com/watch?v=C-KTC7wRtVk" 
         width='300px'
         height="200px"   
      volume={value/100}
        playing={play}
        controls={true}
        style={{marginLeft:"auto", marginRight:"auto"}}
        >
      </ReactPlayer>
      <button style={{display:"ishidden"}}>Watch Now</button>
            {/* {open && <Popup data={val}/>} */}
            </div>
            </Link>
            </>)
          })}
          <div className='overlay-button-left' onClick={navigateLeft}>
            <ArrowBackIosIcon style={{fontSize: "40px", cursor: "pointer"}}/>
            </div>
          <div className='overlay-button-right' onClick={navigateRight}>
            <ArrowForwardIosIcon style={{fontSize: "40px", cursor: "pointer"}}/>
            </div>
        </div>
                    
        </div>
    
    </div>
  )
};
