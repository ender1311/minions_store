import fs from 'fs';

// Define an array of file paths
const fileNames = ['toys.json', 'electronics.json', 'tools.json'];

// Define an empty object to store the combined data
const combinedData = fileNames.reduce((data, file) => {
    const contents = fs.readFileSync(file, 'utf8');
    return data + contents.trim().slice(1, -1) + ',';
  }, '');
  
  const combinedFile = `[
    ${combinedData.slice(0, -1)}
  ]`;
  
  fs.writeFileSync('./combined.json', combinedFile);
