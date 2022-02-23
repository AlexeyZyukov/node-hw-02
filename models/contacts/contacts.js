// const { randomUUID } = require('crypto')
// const { writeContent } = require('../contactsActions.js')
// const { listContacts } = require('./index')

// const getContactById = async (contactId) => {
//   const contacts = await listContacts()
//   const [contact] = contacts.filter((c) => c.id === contactId)
//   console.log(contact);
//   return contact ? contact : null
// }

// const removeContact = async (contactId) => {
//   const contacts = await listContacts()
//   const index = contacts.findIndex((c) => c.id === contactId)
//   if (index !== -1) {
//     const [contact] = contacts.splice(index, 1)
//     console.log(contact);
//     await writeContent(contacts)
//     return contact
//   }
//   return null
// }

// const addContact = async (body) => {
//   const contacts = await listContacts()
//   const newContact = {
//     id: randomUUID(), ...body,
//   }
//   console.log(newContact);
//   contacts.push(newContact)
//   await writeContent(contacts)
//   return newContact
// }

// const updateContact = async (contactId, body) => {
//   const contacts = await listContacts()
//   const index = contacts.findIndex((c) => c.id === contactId)
//   if (index !== -1) {
//     contacts[index] = { ...contacts[index], ...body }
//     await writeContent(contacts)
//     return contacts
//   }
//   return null
// }

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// }
