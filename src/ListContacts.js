import React from 'react'
import PropTypes from 'prop-types'

function ListContacts(props) {
    return (
        <ol className='contact-list' >
        {props.contacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
                <div className='' style={{
                    backgroundImage: `url(${contact.avatarURL})`
                }}
                ></div>
                <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.handle}</p>
                </div>
                <button 
                onClick={() => props.onDeleteContacts(contact)} 
                className='contact-remove'>
                    Remove
                </button>                   
            </li>
        ))}
    </ol>        
    )
}

ListContacts.PropTypes = {
    contacts: PropTypes.array.isRequireda,
    onDeleteContacts: PropTypes.func.isRequired,
}

export default ListContacts