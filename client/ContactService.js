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
    let self = this;
    return axios.post(url, {
      name,
      email,
      number,
      message
    })
    .then(function(response){
      const status = JSON.parse(response.data.response.status);
      if(status == '204') {
        self.$router.push('/gibbi');
      } else {
        self.$router.push('/gibbins');
      }
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
