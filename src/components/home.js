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

const Home = () => {
    const [name, setName] = React.useState('tamer');

    const handleChange = (event) => {
        setName(event.target.value);
      };

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
      </div>
    );
}
export default Home