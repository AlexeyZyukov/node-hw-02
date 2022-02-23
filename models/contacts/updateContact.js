const { writeContent } = require('../contactsActions.js')
// const { listContacts } = require('./index')
const { listContacts } = require('./listContacts')

const updateContact = async (contactId, body) => {
    const contacts = await listContacts()
    const index = contacts.findIndex((c) => c.id === contactId)
    if (index !== -1) {
        contacts[index] = { ...contacts[index], ...body }
        await writeContent(contacts)
        return contacts
    }
    return null
}

module.exports = {
    updateContact,
}