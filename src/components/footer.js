import React from "react"
import Styles from "./footer.module.scss"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import KitchenTwoToneIcon from '@material-ui/icons/KitchenTwoTone';
import { navigate } from "../../.cache/gatsby-browser-entry"

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const Footer = () =>{
  const goToUrl = (url) =>{
    navigate(url)
  }
  const classes = useStyles();
  const [value, setValue] = React.useState(0)
  return(
    <div className={Styles.footer}>
      <footer>
        <div className={Styles.menu}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label="About Me" icon={<EmojiPeopleIcon />} onClick={()  => goToUrl("/")}/>
            <BottomNavigationAction label="Gerardo Uses" icon={<ImportantDevicesIcon />}  onClick={()  => goToUrl("/uses")}/>
            <BottomNavigationAction label="Code Recipes" icon={<KitchenTwoToneIcon />} onClick={()  => goToUrl("/")}/>
          </BottomNavigation>
        </div>
        <div className={Styles.copyRights}>
          © <a href="mailto: jerry@codingwithjerry.com">Gerardo Jaramillo</a> {new Date().getFullYear()} Coder since 1996
        </div>
      </footer>
    </div>
  )
}

export default Footer
