const { readContent } = require('../contactsActions.js')

const listContacts = async () => {
    return await readContent()
}

module.exports = { listContacts }