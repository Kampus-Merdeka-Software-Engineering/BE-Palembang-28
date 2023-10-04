import Poliklinik from "../models/poliklinikModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await Poliklinik.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await Poliklinik.findOne({
      where: {
        id_poliklinik: req.params.id_poliklinik,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};