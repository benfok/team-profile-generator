// this is the html that will render the page. The cards variable marks the position for the cards html to be inserted
const pageHtml = (company, cards) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/64c90fc5f5.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>Team Profile | ${company}</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
        <p>${company}</p>
    </header>
    <main>
        <section id="contact-cards">
        <p>Your team's contact information, convenietly in one place.</p>
        <!-- cards added here -->${cards}
        </section>
    </main>
    <footer>Tidy Lines LLC</footer>
</body>
</html>`;
};

// this is the html for the cards that can be replicated as many times as desired and jopined together into a string to pass into the html above
const contactCard = (role, employeeName, id, email, icon, roleKey, keyValue) => {
return `           
            <article class="card">
                <div class="card-hdr">
                    <h2>${employeeName}</h2>
                    ${icon}<h3>${role}</h3>
                </div>
                <div class="details">
                    <ul>
                        <li>ID: ${id}</li>
                        <li>Email: <a href="mailto:${email}">${email}</a></li>
                        <li>${roleKey}${keyValue}</li>
                    </ul>
                </div>
            </article>`
};

module.exports = { pageHtml, contactCard };
