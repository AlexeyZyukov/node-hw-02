// const { listContacts } = require('./index')
const { listContacts } = require('./listContacts')
const { writeContent } = require('../contactsActions.js')

const removeContact = async (contactId) => {
    const contacts = await listContacts()
    const index = contacts.findIndex((c) => c.id === contactId)
    if (index !== -1) {
        const [contact] = contacts.splice(index, 1)
        console.log(contact);
        await writeContent(contacts)
        return contact
    }
    return null
}

module.exports = {
    removeContact,
}