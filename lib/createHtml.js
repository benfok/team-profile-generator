const roleData = [
    ['Manager', '<i class="fa-solid fa-clipboard-list-check"></i>', 'Office Number: '],
    ['Engineer', '<i class="fa-solid fa-square-terminal"></i>', 'GitHub: '],
    ['Intern', '<i class="fa-solid fa-graduation-cap"></i>', 'School: ']
];

const html =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/64c90fc5f5.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
        <p>Your team's contact information, convenietly in one place.</p>
    </header>
    <main>
        <section id="contact-cards">
        </section>
    </main>
    <footer>Tidy Lines LLC</footer>
</body>
</html>`;

const contactCard = (role, employeeName, id, email, icon, roleKey, keyValue) => {
return `           
            <article class="card">
                <div class="card-hdr">
                    <h2>${employeeName}</h2>
                    <i>${icon}</i><h3>${role}</h3>
                </div>
                <div class="details">
                    <ul>
                        <li>ID: ${id}</li>
                        <li>Email: ${email}</li>
                        <li>${roleKey}${keyValue}</li>
                    </ul>
                </div>
            </article>`
};

module.exports = { roleData, html, contactCard };
