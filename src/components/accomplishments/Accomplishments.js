import classes from "./Accomplishments.module.css"
import content from "./../../Content/Content.js"
const Accomplishments = (props) => {

    const colorlist = ["rgb(231, 189, 74)", "brown", "rgb(231, 189, 74)", "brown"];
    let colorlistindex = 0;
    let listitems = content.accomplishments["list"].map((item)=>{
        const color = colorlist[colorlistindex];
        colorlistindex = (colorlistindex+1) % colorlist.length;
        return <li key={item.id} style={{"border-left":"5px "+color+" solid"}}>{item.text}</li>
    })
    return(
        <div className={classes.accomplishments}>
            <h1>Accomplishments</h1>
            {content.accomplishments["description"].isEnabled ? <h3>{content.accomplishments["description"].text}</h3> : ""}
            <ul>
                {listitems}
            </ul>
        </div>
    )
}

export default Accomplishments