import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ViewListIcon from '@material-ui/icons/ViewList';
import AddIcon from '@material-ui/icons/Add';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Grid from '@material-ui/core/Grid';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const Home = () => {
    const [name, setName] = React.useState('tamer');
    const [image, setImage] = React.useState('')
    const handleChange = (event) => {
        setName(event.target.value);
      };
    
    const imageDrag = (e) => {
        setImage("https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123699837/original/93cf4c607c0578413ca4d5228fe339c2840ee070/help-you-in-electronic-circuit-design-analysis-simulation.jpg")
        console.log(image)
    }
    
    return (
        <div s>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
                <b>Power</b> build
            </Typography>
            <Typography variant="subtitle1" className="subtitle" >
                test  
            </Typography>
            <NavigateNextIcon className="next"/>
            <FormControl >
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                onChange={handleChange}
                disableUnderline 
                >
                <MenuItem value={"tamer"}>tamer</MenuItem>
                <MenuItem value={"mohamed"}>mohamed</MenuItem>
                <MenuItem value={"hossam"}>hossam</MenuItem>
                </Select>
            </FormControl>
          </Toolbar>
        <Toolbar className="seconedBar">
            <Typography className="active">
                Specs
            </Typography>
            <div className="diamond"></div>
            <Typography className="currentActive">
                SLD
            </Typography>
            <div className="diamond"></div>
            <Typography  className="inactive">
                Install
            </Typography>
            <div className="diamond"></div>
            <Typography  className="inactive">
                Config
            </Typography>
            <div className="diamond"></div>
            <Typography  className="inactive">
                Customization
            </Typography>
            <div className="diamond"></div>
            <Typography  className="inactive">
                Layout
            </Typography>
            <div className="diamond"></div>
            <Typography  className="inactive">
                Tech. Offer
            </Typography>
            <div className="diamond"></div>
            <Typography  className="inactive">
                Bom
            </Typography>
        </Toolbar>
        </AppBar>
        <p className="diagramTitle">Single Line Diagram of BlokSeT switchboard tamer</p>
        <Toolbar className="diagramBar">
            <Typography className="activeDiagramBarTitle">
                Incomer
            </Typography>
            <Typography className="diagramBarTitle">
                Bus Tie
            </Typography>
            <Typography  className="diagramBarTitle">
                FEEDER/ACB
            </Typography>
            <Typography  className="diagramBarTitle">
                FEEDER/MCCB
            </Typography>
            <Typography  className="diagramBarTitle">
                FEEDER/Motor
            </Typography>
            <Typography  className="diagramBarTitle">
                FEEDER/VSD-SS
            </Typography>
            <Typography  className="diagramBarTitle">
                PFC
            </Typography>

        </Toolbar>
        <Grid container>
            <Grid item sm={2} className="diagramSidebarParent">
                <Toolbar className="diagramSidebar">
                    <Typography className="diagramSidebarTitle">
                        <ViewListIcon /> From Library
                    </Typography>
                    <Typography className="diagramSidebarTitle">
                        <ImportExportIcon /> From Another Project
                    </Typography>
                    <Typography  className="diagramSidebarTitle">
                    <AddIcon /> From Scratch
                    </Typography>
                </Toolbar>
            </Grid>
            <Grid item sm={10} className="diagramSidebarImages">
                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123699837/original/93cf4c607c0578413ca4d5228fe339c2840ee070/help-you-in-electronic-circuit-design-analysis-simulation.jpg" onDragEnd={e => setImage("https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123699837/original/93cf4c607c0578413ca4d5228fe339c2840ee070/help-you-in-electronic-circuit-design-analysis-simulation.jpg")} className="circuitImage"></img>
                <img src="https://lh3.googleusercontent.com/proxy/NX7G4nbZn5XqT9Hazn1P-UMISsiTrMpd9rldfhZ_ggsjCgJAUZEL9hzDGD2rEIgYKO6FLesXmtDOR3cIf4eK4RGDb6_Ewhnuxr-AfBGM0t21NNQQ" onDragEnd={e => setImage("https://lh3.googleusercontent.com/proxy/NX7G4nbZn5XqT9Hazn1P-UMISsiTrMpd9rldfhZ_ggsjCgJAUZEL9hzDGD2rEIgYKO6FLesXmtDOR3cIf4eK4RGDb6_Ewhnuxr-AfBGM0t21NNQQ")} className="circuitImage"></img>
                <img src="https://cdn7.dissolve.com/p/D985_58_361/D985_58_361_1200.jpg" onDragEnd={e => setImage("https://cdn7.dissolve.com/p/D985_58_361/D985_58_361_1200.jpg")} className="circuitImage"></img>
            </Grid>
            <Grid container>
                <Grid sm={1}></Grid>
                <Grid sm={10}>
                <Zoom>
                <img src={image} className="zoomImage"></img></Zoom>
                </Grid>
                <Grid sm={1}></Grid>
            </Grid>
        </Grid>
      </div>
    );
}
export default Home