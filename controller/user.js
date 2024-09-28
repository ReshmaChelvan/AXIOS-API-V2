const { model } = require("../Model/user");

exports.post = async (Req, Res) => {
  try {
    let name = Req.body.name;
    let username = Req.body.username;
    let email = Req.body.email;
    let address = Req.body.address;
    let userCreate = await model.create({
      name: name,
      address: {
        city: address,
      },
      email: email,
      username: username,
    });
    let JsonResponse = {
      Status: "Success",
      Message: "UserCreated",
    };
    Res.status(201).json(JsonResponse);
  } catch (err) {
    Res.status(404).json({
      Message: "Error",
      Message: err,
    });
  }
};

exports.get = async (Req, Res) => {
  try {
    let getUser = await model.find();
    Res.status(200).json({
      Status: "Success",
      Length: getUser.length,
      Data: getUser,
    });
  } catch (error) {
    Res.status(404).json({
      Status: "Error",
      Message: error,
    });
  }
};

exports.remove = async (Req, Res) => {
  try {
    const id = Req.params.Id;
    const DeletedData = await model.findByIdAndDelete(Req.params.Id);
    Res.status(201).json({
      Status: "Success",
      Messsage: "User Deleted Successfull",
    });
  } catch (error) {
    Res.status(404).json({
      Status: "Error",
      Message: error,
    });
  }
};

exports.edit = async (req, res) => {
  try {
    let request = req.body.ObjUser;
    let name = request.name;
    let username = request.username;
    let email = request.email;
    let address = request.address;
    let update = await model.findByIdAndUpdate(req.params.id, {
      name: name,
      username: username,
      email: email,
      address: { city: address },
    });
    res.status(200).json({
      Status: "success",
      Message: "UserUpdated Success",
    });
  } catch (error) {
    res.status(404).json({
      Status: "Error",
      Message: error,
    });
  }
};
