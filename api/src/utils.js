const fs = require('fs');

const saveImage = (image) => {
  const imageId = Date.now();
  const path = __dirname + '/images/' + imageId;
  console.log(path);
  const base64Data = image.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  fs.writeFileSync(path, base64Data, {encoding: 'base64'});
  return imageId;
}

const getImage = (imageId) => {
  const path = __dirname + '/images/' + imageId;
  console.log(path);
  const bitmap = fs.readFileSync(path);
  return new Buffer(bitmap).toString('base64');
}

exports.saveImage = saveImage;
exports.getImage = getImage;
