const { randomUUID } = require('crypto')
const { writeContent } = require('../contactsActions.js')
const { listContacts } = require('./listContacts')

const addContact = async (body) => {
    const contacts = await listContacts()
    const newContact = {
        id: randomUUID(), ...body,
    }
    console.log(newContact);
    contacts.push(newContact)
    await writeContent(contacts)
    return newContact
}

module.exports = {
    addContact,
}