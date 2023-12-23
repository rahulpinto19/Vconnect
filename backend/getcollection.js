const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function getUserCollection(year,mail,rollno) {
  try {
    await client.connect();
    const database = client.db('Vconnect');
    const userCollection = database.collection(`${year}`);
    const res = await userCollection.findOne({rollno:rollno,email:mail})
    if(res)
    {
        return true;
    }
    else
    {
        return false;
    }
  } catch(err)
  {
    console.log(err);
  }
}

module.exports = {
  getUserCollection
};
