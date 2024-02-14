const linksURL = "https://alangonzalez87.github.io/wdd230/chamber/data/member.json"
const cards = document.querySelector('#cards');

async function getMembers(){
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        displayEnterprises(data.empresas)
    } catch (error) {
        console.error('Error:', error);
    }
} 

getMembers();

function displayEnterprises(empresas) {
    empresas.forEach((empresa) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('p'); // fill in the blank
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${empresa.nombre}`; // fill in the blank

        
        portrait.setAttribute('src', empresa.imageurl);
        portrait.setAttribute('alt', `Portrait of ${empresa.nombre}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        
        card.appendChild(fullName); 
        card.appendChild(portrait);

        cards.appendChild(card);
    }); 
}