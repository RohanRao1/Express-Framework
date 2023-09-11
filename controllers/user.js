const User = require('../models/user')

exports.postNewUser = async (req, res, next) => {
  try {
    if (!req.body.phone) {
      throw new Error("Phone number is mandatory");
    }
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;

    // console.log('obj received', req.body)

    const data = await User.create({
      name: name,
      phone: phone,
      email: email,
    });

    res.status(201).json({ newUserDetails: data });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: err,
    });
  }
};

exports.getUsers = async (req, res, next) => {
    try {
        const data = await User.findAll();

//   console.log(data);
  res.status(200).json({ allUsers: data });
    }
  catch(err) {
    console.log('error in fetching users', JSON.stringify(err) )
    res.status(500).json({
        error : err
    })
  }
};


exports.deleteUser = async(req, res) => {
    // const id = req.params.userId;
    // console.log("received id is ", id);

    // const result = await User.findByPk(id);
    // await result.destroy();
    // res.sendStatus(200) // my method 

    try {
        if (req.params.userId == 'undefined') {
            console.log('ID not found')
            return res.status(400).json({err : 'no ID found'})
        }
        const uId = req.params.userId
    await User.destroy({where : { id : uId }})
    res.sendStatus(200)
    }
    catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
        
}