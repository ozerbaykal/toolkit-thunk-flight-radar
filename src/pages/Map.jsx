import { MapContainer, TileLayer,Marker,Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from 'react-redux';
import { Icon, icon } from 'leaflet';
import { Polyline } from 'react-leaflet';
import { setPath } from '../redux/slices/flight';



const Map = ({setDetailId}) => {
  const {flights,path} = useSelector((store)=>store.flightReducer)
  const dispatch= useDispatch();
// marker için kendi iconumuzu oluşturalım
const planeicon =icon({
  iconUrl:"./public/plane-icon.png",
  iconSize:[30,30],
});

  
  return (
    <div><MapContainer   center= {[39,35]} zoom={6} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {flights.map((flight)=>(
      <Marker key ={flight.id} icon={planeicon}  position={[flight.enlem,flight.boylam]}>
      <Popup>
       <div className='popup'>
        <span>Kod:{flight.code}</span>
        <button 
        onClick={()=>( setDetailId(flight.id))
        

        } >detay</button>
        {path.length >1 && <button onClick={()=>dispatch(setPath([]))}>Rotayı Temizle</button>}
       
       </div>
      </Popup>
    </Marker>
    ))}
    <Polyline  positions={path} />
 
  </MapContainer></div>
  )
}

export default Map