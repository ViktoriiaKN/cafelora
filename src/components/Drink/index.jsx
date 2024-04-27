import { Layer } from "../Layer"

export const Drink = (props) => {
return (<div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={props.image} />

                </div>
                <div className="drink__info">
                  <h3>{props.name}</h3>
                  {props.layers.map(layer => (
                  <Layer key={layer.label} color={layer.color} label={layer.label}/>
                  ))}
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="1" />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>)}
