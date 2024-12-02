const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/mongorelationshipDBdemo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));


const userSchema = new mongoose.schema ({
    First: String,
    Last: String,
    adress: [
        {
            Street: String,
            City: String,
            State: String,
            country: {
                type: String, 
                required: true
            }
        }
    ]
})

const User = mongoose.model('User',userSchema);

const makeUser = async () =>{
    const u = new user({
        First: Uyo,
        Last: oghene,
        adress: {
            Street: lagosstret,
            City: Kubwa,
            State: Function,
            Country: Nigeria

        }
    })
    const res = await u.save();
    console.log(res)
}