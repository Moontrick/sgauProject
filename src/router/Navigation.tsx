import { useState } from "react";
import { generateRoutes } from "./utils";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { UserBlock } from "./components";
import ChevroneIcon from '../assets/icons/chevrone.svg'
import { Tooltip } from "@mui/material";
export function Navigation() {
  const routes = generateRoutes();
  const classes = useStyles()
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [currentEpanded, setCurrentExpanded] = useState(-1)
  const toggleMenu = (expand: number) => {
    if(expand === currentEpanded || currentEpanded === -1 || expand === -1){
    setExpanded(!expanded);
    }
    setCurrentExpanded(expand)
  };
  const handleLinkClick = (path: string) => {
      navigate(path);
  };

  return (
    <div style={{position:'fixed', width: expanded ? '100%' : '70px', zIndex:'4'}}>
    <div style={{ width: expanded ? '400px' : '70px', backgroundColor: '#efecec', height: '100vh', transition: '0.3s ease-in-out', display: 'flex'}}>

        <div className={classes.block}>
            <div>
            <UserBlock />
            {routes.map((item, index) => (
                <Tooltip title={item.title} key={index} placement="right" >
                <div onClick={() => toggleMenu(index)}
                    style={{ cursor: 'pointer', color: 'white', transition: '0.3s ease-in-out', width:'100%', height:'70px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: currentEpanded === index && expanded ? '#015291' : undefined,
                    }}>
                    <img src={item.icons} alt="logo" className={classes.icon}/>
                </div>
                </Tooltip>
            ))}
            </div>
             <Tooltip title={expanded ? 'Закрыть' : 'Открыть'} placement="right" onClick={() => toggleMenu(-1)} style={{cursor: 'pointer',}}>
        <img src={ChevroneIcon} alt="logo" 
        style={{   
            transform: expanded? 'rotate(180deg)' : 'rotate(0deg)',transition: '0.3s ease-in-out',
            width: '70px',
            height: '20px',
            marginBottom: '30px'}}/>
        </Tooltip>
        </div>
        {expanded && (
            <div className={classes.wrapperBlock}>
                <h1 style={{fontSize:'30px', marginBottom: '20px', display: 'flex'}}>{routes[currentEpanded]?.title}</h1>
                {routes[currentEpanded]?.items && routes[currentEpanded]?.items?.map((elem, index) => {return (
                    <button
                key={index} 
                className={classes.key}
                onClick={() => {
                if (elem?.href) {
                    handleLinkClick(elem.href)
                    toggleMenu(-1)
                }
                }}
            >
                <p style={{fontSize: '20px'}}>{elem?.title}</p>
            </button>

                )})}
            </div>
        )}
        
        </div>
       
        </div>
  );
}
