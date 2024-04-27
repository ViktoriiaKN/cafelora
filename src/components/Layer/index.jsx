export const Layer = (props) => {
return (<div className="layer">
<div className="layer__color" style={{ backgroundColor: props.color }} />
<div className="layer__label">{props.label}</div>
</div>)
}
