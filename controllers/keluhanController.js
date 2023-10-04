import Keluhan from "../models/keluhanModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await Keluhan.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await Keluhan.findOne({
      where: {
        id_keluhan: req.params.id_keluhan,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createKeluhan = async (req, res) => {
  try {
    await Keluhan.create(req.body);
    res.status(201).json({ msg: "Keluhan Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateKeluhan = async (req, res) => {
  try {
    await Keluhan.update(req.body, {
      where: {
        id_keluhan: req.params.id_keluhan,
      },
    });
    res.status(200).json({ msg: "Keluhan Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKeluhan = async (req, res) => {
  try {
    await Keluhan.destroy({
      where: {
        id_keluhan: req.params.id_keluhan,
      },
    });
    res.status(200).json({ msg: "Keluhan Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
