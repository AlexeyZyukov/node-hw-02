const express = require('express')
const router = express.Router()
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../models/contacts')

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
    .json({ status: 'error', code: 404, message: 'Not found' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'POST message' })
})

router.delete('/:contactId', async (req, res, next) => {
  const contact = await removeContact(req.params.contactId)
  if (contact) {
    res.json({ status: 'success', code: 200, payload: { contact } })
  }
  return res
    .status(404)
    .json({ status: 'error', code: 404, message: 'Not found' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'PUT message' })
})

module.exports = router
