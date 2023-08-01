import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    
    {
        message:"type url of website",
        name:"URL"

    }
  ])
  .then((answers) => {
   
    const url = answers.URL;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));

fs.writeFile("url.txt",url,(err)=>{
  if(err)throw(err);
  console.log('file has been saved');
})
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log('error')
    } else {
      // Something else went wrong
      
    }
  });