const mongoose = require("mongoose");
const Form = require("../models/formModel.js");

const addNewForm = async (req, res) => {
  const {
    worksOrder,
    headType,
    customerName,
    partsRecievedFrom,
    customerSupply,
    purchaseOrderNumber,
    compname,
    compname1,
    compname2,
    compname3,
    compname4,
    compname5,
    compname6,
    compname7,
    compname8,
    compname9,
    compname10,
    compname11,
    compname12,
    compname13,
    compname14,
    compname15,
    compname16,
    compname17,
    compname18,
    norecieved,
    norecieved1,
    norecieved2,
    norecieved3,
    norecieved4,
    norecieved5,
    norecieved6,
    norecieved7,
    norecieved8,
    norecieved9,
    norecieved10,
    norecieved11,
    norecieved12,
    norecieved13,
    norecieved14,
    norecieved15,
    norecieved16,
    norecieved17,
    norecieved18,
    compsize,
    compsize1,
    compsize2,
    compsize3,
    compsize4,
    compsize5,
    compsize6,
    compsize7,
    compsize8,
    compsize9,
    compsize10,
    compsize11,
    compsize12,
    compsize13,
    compsize14,
    compsize15,
    compsize16,
    compsize17,
    compsize18,
    storelocation,
    storelocation1,
    storelocation2,
    storelocation3,
    storelocation4,
    storelocation5,
    storelocation6,
    storelocation7,
    storelocation8,
    storelocation9,
    storelocation10,
    storelocation11,
    storelocation12,
    storelocation13,
    storelocation14,
    storelocation15,
    storelocation16,
    storelocation17,
    storelocation18,
    damagecheck,
    damagecheck1,
    damagecheck2,
    damagecheck3,
    damagecheck4,
    damagecheck5,
    damagecheck6,
    damagecheck7,
    damagecheck8,
    damagecheck9,
    damagecheck10,
    damagecheck11,
    damagecheck12,
    damagecheck13,
    damagecheck14,
    damagecheck15,
    damagecheck16,
    damagecheck17,
    damagecheck18,
    date,
    signature,
  } = req.body;
  const newForm = new Form({
    worksOrder,
    headType,
    customerName,
    partsRecievedFrom,
    customerSupply,
    purchaseOrderNumber,
    compname,
    compname1,
    compname2,
    compname3,
    compname4,
    compname5,
    compname6,
    compname7,
    compname8,
    compname9,
    compname10,
    compname11,
    compname12,
    compname13,
    compname14,
    compname15,
    compname16,
    compname17,
    compname18,
    norecieved,
    norecieved1,
    norecieved2,
    norecieved3,
    norecieved4,
    norecieved5,
    norecieved6,
    norecieved7,
    norecieved8,
    norecieved9,
    norecieved10,
    norecieved11,
    norecieved12,
    norecieved13,
    norecieved14,
    norecieved15,
    norecieved16,
    norecieved17,
    norecieved18,
    compsize,
    compsize1,
    compsize2,
    compsize3,
    compsize4,
    compsize5,
    compsize6,
    compsize7,
    compsize8,
    compsize9,
    compsize10,
    compsize11,
    compsize12,
    compsize13,
    compsize14,
    compsize15,
    compsize16,
    compsize17,
    compsize18,
    storelocation,
    storelocation1,
    storelocation2,
    storelocation3,
    storelocation4,
    storelocation5,
    storelocation6,
    storelocation7,
    storelocation8,
    storelocation9,
    storelocation10,
    storelocation11,
    storelocation12,
    storelocation13,
    storelocation14,
    storelocation15,
    storelocation16,
    storelocation17,
    storelocation18,
    damagecheck,
    damagecheck1,
    damagecheck2,
    damagecheck3,
    damagecheck4,
    damagecheck5,
    damagecheck6,
    damagecheck7,
    damagecheck8,
    damagecheck9,
    damagecheck10,
    damagecheck11,
    damagecheck12,
    damagecheck13,
    damagecheck14,
    damagecheck15,
    damagecheck16,
    damagecheck17,
    damagecheck18,
    date,
    signature,
  });

  try {
    await newForm.save();

    res.status(201).json(newForm);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getForms = async (req, res) => {
  try {
    const form = await Form.find();

    res.status(200).json(form);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getForm = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  try {
    const form = await Form.findById({ _id: id });

    res.status(200).json(form);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const UpdateForm = async (req, res) => {
  const { id } = req.params;
  const {
    worksOrder,
    headType,
    customerName,
    partsRecievedFrom,
    customerSupply,
    purchaseOrderNumber,
    compname,
    compname1,
    compname2,
    compname3,
    compname4,
    compname5,
    compname6,
    compname7,
    compname8,
    compname9,
    compname10,
    compname11,
    compname12,
    compname13,
    compname14,
    compname15,
    compname16,
    compname17,
    compname18,
    norecieved,
    norecieved1,
    norecieved2,
    norecieved3,
    norecieved4,
    norecieved5,
    norecieved6,
    norecieved7,
    norecieved8,
    norecieved9,
    norecieved10,
    norecieved11,
    norecieved12,
    norecieved13,
    norecieved14,
    norecieved15,
    norecieved16,
    norecieved17,
    norecieved18,
    compsize,
    compsize1,
    compsize2,
    compsize3,
    compsize4,
    compsize5,
    compsize6,
    compsize7,
    compsize8,
    compsize9,
    compsize10,
    compsize11,
    compsize12,
    compsize13,
    compsize14,
    compsize15,
    compsize16,
    compsize17,
    compsize18,
    storelocation,
    storelocation1,
    storelocation2,
    storelocation3,
    storelocation4,
    storelocation5,
    storelocation6,
    storelocation7,
    storelocation8,
    storelocation9,
    storelocation10,
    storelocation11,
    storelocation12,
    storelocation13,
    storelocation14,
    storelocation15,
    storelocation16,
    storelocation17,
    storelocation18,
    damagecheck,
    damagecheck1,
    damagecheck2,
    damagecheck3,
    damagecheck4,
    damagecheck5,
    damagecheck6,
    damagecheck7,
    damagecheck8,
    damagecheck9,
    damagecheck10,
    damagecheck11,
    damagecheck12,
    damagecheck13,
    damagecheck14,
    damagecheck15,
    damagecheck16,
    damagecheck17,
    damagecheck18,
    date,
    signature,
  } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedForm = {
    worksOrder,
    headType,
    customerName,
    partsRecievedFrom,
    customerSupply,
    purchaseOrderNumber,
    compname,
    compname1,
    compname2,
    compname3,
    compname4,
    compname5,
    compname6,
    compname7,
    compname8,
    compname9,
    compname10,
    compname11,
    compname12,
    compname13,
    compname14,
    compname15,
    compname16,
    compname17,
    compname18,
    norecieved,
    norecieved1,
    norecieved2,
    norecieved3,
    norecieved4,
    norecieved5,
    norecieved6,
    norecieved7,
    norecieved8,
    norecieved9,
    norecieved10,
    norecieved11,
    norecieved12,
    norecieved13,
    norecieved14,
    norecieved15,
    norecieved16,
    norecieved17,
    norecieved18,
    compsize,
    compsize1,
    compsize2,
    compsize3,
    compsize4,
    compsize5,
    compsize6,
    compsize7,
    compsize8,
    compsize9,
    compsize10,
    compsize11,
    compsize12,
    compsize13,
    compsize14,
    compsize15,
    compsize16,
    compsize17,
    compsize18,
    storelocation,
    storelocation1,
    storelocation2,
    storelocation3,
    storelocation4,
    storelocation5,
    storelocation6,
    storelocation7,
    storelocation8,
    storelocation9,
    storelocation10,
    storelocation11,
    storelocation12,
    storelocation13,
    storelocation14,
    storelocation15,
    storelocation16,
    storelocation17,
    storelocation18,
    damagecheck,
    damagecheck1,
    damagecheck2,
    damagecheck3,
    damagecheck4,
    damagecheck5,
    damagecheck6,
    damagecheck7,
    damagecheck8,
    damagecheck9,
    damagecheck10,
    damagecheck11,
    damagecheck12,
    damagecheck13,
    damagecheck14,
    damagecheck15,
    damagecheck16,
    damagecheck17,
    damagecheck18,
    date,
    signature,
    _id: id,
  };

  await Form.findByIdAndUpdate(id, updatedForm, { new: true });

  res.json(updatedForm);
};

const deleteForm = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Form.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
module.exports = {
  addNewForm,
  getForms,
  getForm,
  UpdateForm,
  deleteForm,
};
