import ReactDOM from "react-dom/client";

const Countries = (props) =>
{   
    return(
        <>
            <option value={props.Country}>{props.Country}</option>
        </>
    )   
}
export default Countries;