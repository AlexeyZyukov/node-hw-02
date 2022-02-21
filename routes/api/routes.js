const express = require('express')
const router = express.Router()
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../models/contacts')
const { schemaCreateContact, schemaPutContact } = require('./contactsValidators')
const { validateBody } = require('../../middlewares/validation')

router.get('/', async (req, res, next) => {
  const contacts = await listContacts()
  res.json({ status: 'success', code: 200, payload: { contacts } })
})

router.get('/:contactId', async (req, res, next) => {
  const contact = await getContactById(req.params.contactId)
  if (contact) {
    res.json({ status: 'success', code: 200, payload: { contact } })
  }
  return res
    .status(404)
  // .json({
  //   status: 'error', code: 404,
  //   message: 'Not found'
  // })
})

router.post('/', validateBody(schemaCreateContact), async (req, res, next) => {
  const contact = await addContact(req.body)
  res.status(201).json({ status: 'success', code: 201, payload: { contact } })
})

router.delete('/:contactId', async (req, res, next) => {
  const contact = await removeContact(req.params.contactId)
  if (contact) {
    res.json({ status: 'success', code: 200, payload: { contact } })
  }
  return res
    .status(404)
  // .json({
  //   status: 'error', code: 404,
  //   message: 'Not found'
  // })
})

router.put('/:contactId', validateBody(schemaPutContact), async (req, res, next) => {
  const contact = await updateContact(req.params.contactId, req.body)
  if (contact) {
    res.json({ status: 'success', code: 200, payload: { contact } })
  }
  return res
    .status(404)
  // .json({ status: 'error', code: 404, message: 'Not Found' })
})

module.exports = router
