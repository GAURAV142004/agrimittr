// Sample data for government schemes
const governmentSchemes = [
    {
        name: "Pradhan Mantri Fasal Bima Yojana",
        category: "Crop Insurance",
        description: "A comprehensive crop insurance scheme to provide financial support to farmers in case of crop failure.",
        link: "https://pmfby.gov.in/",
    },
    {
        name: "Mukhyamantri Krishi Sanjivani Yojana",
        category: "Irrigation",
        description: "An irrigation scheme aimed at rejuvenating agricultural land by providing adequate water supply.",
        link: "https://krishi.maharashtra.gov.in/en/irrigation",
    },
    {
        name: "Pradhan Mantri Kisan Samman Nidhi",
        category: "Financial Assistance",
        description: "A direct income support scheme for farmers, providing financial assistance of Rs. 6,000 per year.",
        link: "https://pmkisan.gov.in/",
    },
    // Add more schemes as needed
];

// Function to load government schemes
function loadSchemes() {
    const schemesList = document.getElementById("government-schemes-list");

    governmentSchemes.forEach((scheme) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <a href="${scheme.link}" target="_blank" rel="noopener noreferrer">Learn More</a>
            <button onclick="showMore('${scheme.name}')">Show More</button>
        `;
        schemesList.appendChild(listItem);
    });
}

// Function to show more details for a scheme
function showMore(schemeName) {
    // Add logic to display more details or redirect to a detailed page if needed
    alert(`More details for ${schemeName}`);
}

// Initial load of schemes
loadSchemes();
