import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {
    static PropTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContacts: PropTypes.func.isRequired,
    }
    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }
    render () {
        const { query } = this.state
        const { contacts, onDeleteContacts } = this.props

        const showingContacts = query === ''
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))

        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input
                        className="search-contacts"
                        type="text"
                        placeholder="Search Contacts"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <ol className='contact-list' >
                    {showingContacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}
                            ></div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button 
                            onClick={() => onDeleteContacts(contact)} 
                            className='contact-remove'>
                                Remove
                            </button>                   
                        </li>
                    ))}
                </ol> 
            </div>  
        )
    }


}

export default ListContacts

// function ListContacts(props) {
//     return (
//         <ol className='contact-list' >
//         {props.contacts.map((contact) => (
//             <li key={contact.id} className='contact-list-item'>
//                 <div className='' style={{
//                     backgroundImage: `url(${contact.avatarURL})`
//                 }}
//                 ></div>
//                 <div className='contact-details'>
//                     <p>{contact.name}</p>
//                     <p>{contact.handle}</p>
//                 </div>
//                 <button 
//                 onClick={() => props.onDeleteContacts(contact)} 
//                 className='contact-remove'>
//                     Remove
//                 </button>                   
//             </li>
//         ))}
//     </ol>        
//     )
// }

// ListContacts.PropTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContacts: PropTypes.func.isRequired,
// }

//export default ListContacts

// function ListContacts(props) {
//     return (
//         <ol className='contact-list' >
//         {props.contacts.map((contact) => (
//             <li key={contact.id} className='contact-list-item'>
//                 <div className='' style={{
//                     backgroundImage: `url(${contact.avatarURL})`
//                 }}
//                 ></div>
//                 <div className='contact-details'>
//                     <p>{contact.name}</p>
//                     <p>{contact.handle}</p>
//                 </div>
//                 <button 
//                 onClick={() => props.onDeleteContacts(contact)} 
//                 className='contact-remove'>
//                     Remove
//                 </button>                   
//             </li>
//         ))}
//     </ol>        
//     )
// }

// ListContacts.PropTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContacts: PropTypes.func.isRequired,
// }

//export default ListContacts