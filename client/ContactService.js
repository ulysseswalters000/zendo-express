import axios from 'axios'

const url = '/contact';

class ContactService {
  // Get Contact List
  static getContacts() {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.get(url);
          const data = res.data;
          resolve(
            data.map(contact => ({
              ...contact,
            }))
          )
        } catch(err){
          reject(err);
        }
      })
  }

  // Create POST
  static insertContact(name, email, number, message) {
    return axios.post(url, {
      name,
      email,
      number,
      message
    })
  }

  // Delete Contact
  static deleteContact(id) {
    return axios.delete(`${url}${id}`)
  }

  static contactInitialState() {
    return {
      contacts: {
        name: '',
        email: '',
        number: '',
        message: ''
      }
    }
  }

}

export default ContactService
