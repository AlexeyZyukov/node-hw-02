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

module.exports = { readContent, writeContent }