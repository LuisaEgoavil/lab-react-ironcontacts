import React from 'react' 

function ContactsDetails(props) {
    return (
<div>
    <img width='100' height='auto'  alt="img" src={props.picture} />
    <p>{props.name}</p>
    <p>{props.popularity}</p>
    <button onClick={() => {props.onDelete(props.id)}}>Delete</button>
</div>
    )
}

export default ContactsDetails