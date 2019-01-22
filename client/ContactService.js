import axios from 'axios'

const url = 'http://localhost:8081/contact/';

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
  static.deleteContact(id) {
    return axios.delete(`${url}${id}`)
  }

}

export default ContactService
