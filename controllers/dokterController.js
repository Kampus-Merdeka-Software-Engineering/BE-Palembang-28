import Dokter from "../models/dokterModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await Dokter.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await Dokter.findOne({
      where: {
        id_dokter: req.params.id_dokter,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
