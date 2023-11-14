import {Button,Row,Col} from 'react-bootstrap';
import geodist from 'geodist';

import { FiMapPin,FiLogIn,FiLogOut } from "react-icons/fi";

const AvatarBox = (props:any) => {

    const coords = {lat:props.user.address.geo.lat, lon:props.user.address.geo.lng};
    const distance = geodist(props.home, coords, {exact: true, unit: 'km'}) 

    return(
        <Col xl={12} className='c_row'>
            <div className='status' 
                style={props.user.isLogged 
                ? {backgroundColor:'#99cc00'} 
                : {backgroundColor:'#BF047F'}}>
            </div>
            <div className='c_info'>
                <FiMapPin size={30} color='#99cc00' />
                <p>{distance.toFixed(0)}km</p>

                {
                    props.user.isLogged 
                        ? <FiLogOut size={30} color='#BF047F' /> 
                        : <FiLogIn size={30} color='#99cc00' />
                }

            </div>
        </Col>
    )
}

export default AvatarBox;