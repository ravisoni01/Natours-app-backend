const Tour = require("../models/tourModels");

exports.checkId = (req, res, next, val) => {
  // if (val > tours.length) {
  //   return res.status(404).send({
  //     status: "fail",
  //     message: "Invalid ID",
  //   });
  // }
  next();
};

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).send({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).send({
      status: "fail",
      error: error,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const tourData = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: tourData,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

exports.singleTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: "Tour deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};
