const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://rahulyadav252424:Yf2dsv8HUUhuAmGh@cluster0.sw3322j.mongodb.net/vconnect";
const client = new MongoClient(uri);

async function getUserCollection(year,mail,rollno) {
  try {
    await client.connect();
    const database = client.db('vconnect');
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
