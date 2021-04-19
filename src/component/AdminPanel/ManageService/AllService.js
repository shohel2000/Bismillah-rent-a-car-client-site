import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const AllService = ({ events }) => {
    const boxMaintain = {
        padding: '10px'
    }
    const handleDelete = (id) => {
        fetch(`https://hidden-escarpment-22929.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('are you sure?');
                    window.location.reload(false);
                }
            })
    }
    return (
        <div className="container">
            <div style={boxMaintain} className="row">
                <div className="col-md-4" >{events.name}</div>
                <div className="col-md-4" >{events.fee}</div>
                <div className="col-md-4"><button onClick={() => handleDelete(events._id)} className="btn btn-danger" ><FontAwesomeIcon icon={faTrashAlt} /></button></div>
            </div>
        </div>
    );
};

export default AllService;