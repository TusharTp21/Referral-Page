import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {FacebookShareButton , WhatsappShareButton} from 'react-share';
import {FacebookIcon, WhatsappIcon} from 'react-share';
import './App.css';


function App() {
  
  const [head, setHead] = useState(" ");
  const [change, setChange]= useState(false);
  


 
 function handleChange(){
    setChange(true)
     setHead(uuidv4().slice(0,7))
   
 }
  return (
  <div>
    
    <h1>Congratulations! You have successfully registered as Campus Ambassador</h1>
    
  
    <button className="main" onClick={handleChange}> Click Me </button>
    {change?<h2>You Unique Id is</h2>:<h2> </h2>}
    <h3> {head}</h3>
   

    <FacebookShareButton url={head} quote={head}>
      <FacebookIcon logoFillColor="white" round={true}>

      </FacebookIcon>
    </FacebookShareButton>
    <WhatsappShareButton url={head} quote={head}>
      <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
    </WhatsappShareButton>
  </div>
  
    )
}

export default App;
