import "./content.css"

export default function Content(props) {
    return (<p className="content" style={{ color: props.color, background:props.bg }}>{props.text}</p>);
  }
  