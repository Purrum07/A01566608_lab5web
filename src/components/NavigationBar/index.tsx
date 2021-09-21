import {Box, AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const NavigationBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color = "inherit" component = "div">
                        ChambaSoft Store
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavigationBar;