const { listContacts } = require('./listContacts')

const getContactById = async (contactId) => {
    const contacts = await listContacts()
    const [contact] = contacts.filter((c) => c.id === contactId)
    console.log(contact);
    return contact ? contact : null
}

module.exports = { getContactById }