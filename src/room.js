import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './component/room/AppBar';
import Creation from './component/room/creation'
import HotelDetails from './component/room/hotelDetails'
import BasicRates from './component/room/basicRates'
import SeasonRates from './component/room/seasonRates'
import Discount from './component/room/discounts'
import BookingRules from './component/room/bookingRules'
import Instruction from './component/room/instruction'
import Channels from './component/room/channel'
import Footer from "react-footer-comp";
const styles = {
    footer:{
        position:"fixed",
        bottom:0,
        width:"100%",
        height:"85px"
    },
    insideFooter:{
    },
    RoomInsideFooter2:{
        
        // height:""
    }
  };
class Room extends React.Component{
    state = {
        new:true,
        indexing:0
    }
    
    handleOption = (index) =>{
        this.setState({new:false,indexing:index})
        
    }
    showOption = () =>{
        if(this.state.new===false && this.state.indexing===0){
            
            return true;
        }
    }
    render(){
        const { classes } = this.props;
        return (
            <div className="App">
                <div>
                    <AppBar  onSelectOption={this.handleOption}/>
                </div>
                <div style={{marginLeft: "22%",marginBottom: "15%",marginRight: "15%"}}>
                {(this.showOption(this.state))?
                        <HotelDetails/>:(this.state.indexing ===1)?
                        <Creation/>:(this.state.indexing ===2 )?
                        <BasicRates/>:(this.state.indexing ===3)? 
                        <SeasonRates/>:(this.state.indexing ===4)? 
                        <Discount/>:(this.state.indexing===5)?
                        <BookingRules/>:(this.state.indexing===6)?
                        <Instruction/>:(this.state.indexing===7)?
                        <Channels/>:null
                }
                </div>
                <div className={classes.footer}>
                    <Footer className={classes.insideFooter} style={{height:"20px"}} text={"Maintained by Codingmart."}  bgColor={"#332e43"}><div><p>sCodingmart</p></div></Footer>
                </div>
            </div>
        )
    }


}

export default withStyles(styles)(Room);