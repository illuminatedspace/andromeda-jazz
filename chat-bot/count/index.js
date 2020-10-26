import fs from "fs";
// import counts from "./count.json";

// const writeFileSync = (...args) =>
//   fs.writeFile(...args, (err, data) => {
//     if (err) {
//       console.error("Could not write file");
//       return Promise.reject(err);
//     }
//     console.log("Wrote file");
//     return Promise.resolve(data);
//   });

const readFileSync = (...args) =>
  fs.readFile(...args, (err, data) => {
    if (err) {
      console.error("Could not read file");
      return Promise.reject(err);
    }
    console.log("Read file");
    return Promise.resolve(data);
  });

export const handleCount = async (args, sayWithTarget, context) => {
  const file = await readFileSync("./count/count.json", {
    encoding: "utf-8",
  });
  console.log("NATU", file);
  //   const counts = JSON.parse(file);

  //   console.log("MAGNETRON", file);
};
