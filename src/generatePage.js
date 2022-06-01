// manager card generator
const generateManager = manager => {
    return `
    <div class="card">
        <div class="card-content">
          <span class="icon"
            ><i class="fa-solid fa-people-roof fa-2xl"></i
          ></span>
          <h2>
            <b><span>${manager.getName()}</span></b>
          </h2>
          <p><b>Id:</b> <span>${manager.getId()}</span></p>
          <p><b>Email:</b> <a href="mailto:${manager.getEmail()}"><span>${manager.getEmail()}</span></a></p>
          <p><b>Office Number:</b> <span>${manager.getOfficeNumber()}</span></p>
          <p><b>Role:</b> <span>${manager.getRole()}</span></p>
        </div>
    </div>
    `
};

// engineer card generator
const generateEngineer = engineer => {
    return `
    <div class="card">
        <div class="card-content">
          <span class="icon"
            ><i class="fa-solid fa-laptop-code fa-2xl"></i
          ></span>
          <h2>
            <b><span>${engineer.getName()}</span></b>
          </h2>
          <p><b>Id:</b> <span>${engineer.getId()}</span></p>
          <p><b>Email:</b> <a href="mailto:${engineer.getEmail()}"><span>${engineer.getEmail()}</span></a></p>
          <p><b>Github:</b> <a href="https://github.com/${engineer.getGithub()}" target="blank"><span>${engineer.getGithub}</span></p>
          <p><b>Role:</b> <span>${engineer.getRole()}</span></p>
        </div>
    </div>
    `
};

// intern card generator
const generateIntern = intern => {
    return `
    <div class="card">
        <div class="card-content">
          <span class="icon"><i class="fa-solid fa-book fa-2xl"></i></span>
          <h2>
            <b><span>${intern.getName()}</span></b>
          </h2>
          <p><b>Id:</b> <span>${intern.getId()}</span></p>
          <p><b>Email:</b> <a href="mailto:${intern.getEmail()}"><span>${intern.getEmail()}</span></a></p>
          <p><b>School:</b> <span>${intern.getSchool()}</span></p>
          <p><b>Role:</b> <span>${intern.getRole()}</span></p>
        </div>
    </div>
    `
}

// putting together the whole template
const generatePage = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Builder</title>
        <link href="./stylesheets/style.css" rel="stylesheet" />
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
        href="https://fonts.googleapis.com/css2?family=Lora&family=Roboto:wght@700&display=swap"
        rel="stylesheet"
        />
        <!-- Font Awesome Icons -->
        <script
        src="https://kit.fontawesome.com/c67bd88601.js"
        crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="bg-primary">
        <h1>Team Builder</h1>
        </div>
        <div class="card-container">
            ${generateManager(team)}
            ${generateEngineer(team)}
            ${generateIntern(team)}
        </div>
    </body>
    </html>
    `
};

// exports
module.exports = { generatePage };