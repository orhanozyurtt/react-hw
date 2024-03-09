import axios from 'axios';
const getData = async (id) => {
  if (id) {
    const { data } = await axios(
      'https://jsonplaceholder.typicode.com/users/' + id
    );
    const post = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    console.log('user info ', data);
    console.log(post.data);
  } else {
    console.log('id bilgisi gerekli');
  }
};
getData(1);
