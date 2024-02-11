const url = "https://github.com/alangonzalez87/wdd230";
const linksURL = "https://alangonzalez87.github.io/wdd230/data/link.json"


async function getLinks() {
    try {
        const response = await fetch('https://alangonzalez87.github.io/wdd230/data/link.json');
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        displayLinks(data.weeks)
    } catch (error) {
        console.error('Error:', error);
    }
}

// Función para manejar el evento click en los enlaces
function displayLinks(weeks) {
    const linksList = document.getElementById('linksList');

// Iterar sobre el JSON y agregar los enlaces al HTML
    weeks.forEach(week => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = week.links[0].url; // Suponiendo que cada semana tiene solo un enlace
    a.textContent = `${week.week}: ${week.links[0].title}`;
    a.addEventListener('click', displayLinks);
    li.appendChild(a);
    linksList.appendChild(li);
});
   
}

getLinks();
