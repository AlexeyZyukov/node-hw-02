const fs = require('fs/promises')
const path = require('path')
const contactsDB = require('./const.js')

const readContent = async () => {
  const content = await fs.readFile(path.join(__dirname, contactsDB), 'utf8')
  // console.log(content);
  const result = JSON.parse(content)
  return result
}

const writeContent = async (data) => {
  await fs.writeFile(
    path.join(__dirname, contactsDB),
    JSON.stringify(data, null, 2),
  )
}

const listContacts = async () => {
  return await readContent()
}

const getContactById = async (contactId) => {
  const contacts = await listContacts()
  const [contact] = contacts.filter((c) => c.id === contactId)
  console.log(contact);
  return contact ? contact : null
}

const removeContact = async (contactId) => {
  const contacts = await listContacts()
  const index = contacts.findIndex((c) => c.id === contactId)
  if (index !== -1) {
    const [contact] = contacts.slice(index, 1)
    console.log(contact);
    await writeContent(contacts)
    return contact
  }
  return null
}

const addContact = async (body) => {
  await writeContent(body)
}

const updateContact = async (contactId, body) => { }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
