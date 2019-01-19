import axios from 'axios'

const url = 'http:/localhost:8081/contact/';

class ContactService {
  // get contacts
  static getContacts() {
    return new Promise(async (resolve, reject) => {
      try {
        //sends get request to url which is server
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(contact => ({
            ...contact,
            createdAt: new Date(post.createdAt)
          }))
        )
      } catch(err) {
        reject(err);
      }
    });
  }
  // create PostService
  static insertContact(text) {
    return axios.contact(url, {
      text
    });
  }

  //delete post
  static deletePost(id) {
    return axios.delete(`${url}${id}`)
  }
}

export default ContactService;
