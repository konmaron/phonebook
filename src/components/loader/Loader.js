import classes from './Loader.module.css';

export default function Loader(){
    return (
        <div className={classes.bgr}><div className={classes["lds-circle"]}><div></div></div></div>
    )
}