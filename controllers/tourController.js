const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/tours.json`)
);

exports.checkId = (req, res, next, val) => {
  if (val > tours.length) {
    return res.status(404).send({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.price || !req.body.name) {
    return res.status(404).send({
      status: "fail",
      message: "Missing price or name",
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).send({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/tours.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).send({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );

  // res.status(200).send({
  //   status: "success",
  //   results: tours.length,
  //   data: {
  //     tours,
  //   },
  // });
};

exports.singleTour = (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find((x) => x.id === id);
  res.status(200).send({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).send({
    status: "success",
    data: {
      tour: "<Updated tour here...>",
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(200).send({
    status: "success",
    message: "Tour deleted successfully",
  });
};
