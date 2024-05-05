import { useState } from "react";
import { generateRoutes } from "./utils";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { UserBlock } from "./components";

export function Navigation() {
  const routes = generateRoutes();
  const classes = useStyles()
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [currentEpanded, setCurrentExpanded] = useState(0)
  const toggleMenu = (expand: number) => {
    setExpanded(!expanded);
    setCurrentExpanded(expand)
  };
  const handleLinkClick = (path: string) => {
    
      navigate(path);
  };
  return (
    <div style={{position:'absolute'}}>
    <div style={{ width: expanded ? '400px' : '70px', backgroundColor: '#7799F1', height: '100vh', transition: 'width 0.3s ease-in-out', display: 'flex' }}>
        <div className={classes.block}>
            <UserBlock />
            {routes.map((item, index) => (
                <div onClick={() => toggleMenu(index)} key={index}
                    style={{ cursor: 'pointer', color: 'white', transition: 'transform 0.3s ease-in-out' }}>
                    <img src={item.icons} alt="logo" className={classes.icon}/>
                </div>
            ))}
        </div>
        {expanded && (
            <div className={classes.wrapperBlock}>
                <h1 style={{fontSize:'20px'}}>{routes[currentEpanded].title}</h1>
                {routes[currentEpanded]?.items && routes[currentEpanded]?.items?.map((elem, index) => {return (
                    <button
                key={index} 
                className={classes.key}
                onClick={() => {
                if (elem?.href) {
                    handleLinkClick(elem.href)
                    toggleMenu(0)
                }
                }}
            >
                {elem?.title}
            </button>

                )})}
            </div>
        )}
        </div>
        </div>
  );
}
