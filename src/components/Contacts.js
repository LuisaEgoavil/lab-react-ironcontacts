import React, {Component} from 'react';
import contactsJson from "../contacts.json";
import ContactsDetails from './ContactsDetails'

class Contacts extends Component {
    state = {
        contacts: contactsJson.slice(0,5)
        }

//----------------------------------------------------
//RANDOM CONTACTS

        handleAddContact = () => {
            let randomIndex = Math.floor(Math.random() * contactsJson.length)
            let randomContact = contactsJson[randomIndex]

            this.setState({
                contacts: [...this.state.contacts, randomContact]
            })
        }
//----------------------------------------------------
//SORT CONTACTS by name

        handleSortContactName = () => {
            let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
            clonedContacts.sort((first, second) => {
                if(first.name > second.name) {
                    return 1
                }
                else if(first.name < second.name) {
                    return -1
                }
                else {
                    return 0
                }
            })
            this.setState ({
                contacts: clonedContacts
            })
        }
//----------------------------------------------------
//SORT CONTACTS by popularity

        handleSortContactPopularity = () => {
            let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
            clonedContacts.sort((first, second) => {
                if(first.popularity > second.popularity) {
                    return -1
                }
                else if(first.popularity < second.popularity) {
                    return 1
                }
                else {
                    return 0
                }
            })
            this.setState ({
                contacts: clonedContacts
            })
        }
//----------------------------------------------------
//DELETE CONTACTS

        handleDeleteContact = (contactId) => {
            let filteredContacts = this.state.contacts.filter((singleContact) => {
                return singleContact.id !== contactId
            })
            this.setState({
                contacts: filteredContacts
            })
        }
//----------------------------------------------------
    render() {
        return (
            <div>
            <h1>IronContacts</h1>
            <button onClick={this.handleAddContact}>Add Random</button>
            <button onClick={this.handleSortContactName}>Sort by name</button>
            <button onClick={this.handleSortContactPopularity}>Sort by popularity</button>
                <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    </thead>
                    <tbody>
            {this.state.contacts.map((singleContact, index) => {
                  return <ContactsDetails 
                  key={index}
                  name={singleContact.name}
                  picture={singleContact.pictureUrl}
                  popularity={singleContact.popularity}
                  id={singleContact.id}
                  onDelete={this.handleDeleteContact}
                  />
              })
            }
            </tbody>
            </table>
            </div>
        )
    }
}


export default Contacts