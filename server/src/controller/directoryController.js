

const fs = require('fs');
const { getFormattedData } = require('./utils.js');

/**
* @description <api get all directories>
* @param <paramname> <>
* @returns <formatedData> <read data from file && format it && return it as json format && optional filter> 
* @author <ibtihal el maghraoui>
*/
const getAllDirectories = async (req, res, next) => {
  // variables
  const dataPath = './src/data/directory.json';
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const formatedData = getFormattedData(JSON.parse(data));
    if (req.query.term) {
      const filtredData = formatedData.filter(obj =>
        [obj.size].includes(parseInt(req.query.term))
        ||
        [obj.name, obj.date].includes(req.query.term)

      );
      res.send(filtredData);
    }
    else { res.send(formatedData); }
  });

};
module.exports = {
  getAllDirectories,
};
