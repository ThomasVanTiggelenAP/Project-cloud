(() => {
    const uniqueResults = [];
    const apiUrl = 'https://randomuser.me/api/';
    const numberOfResults = 12;

    const fetchData = async () => {
        try {
            for (let i = 0; i < numberOfResults; i++) {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`Foutief ${response.status}`);
                }

                const data = await response.json();
                if (!isResultDuplicate(data)) {
                    displayData(data);
                } else {
                    console.log('Dit is idem');
                }
            }
        } catch (error) {
            console.error('Er is een probleem geladen:', error);
        }
    };

    const isResultDuplicate = (newData) => {
        const duplicate = uniqueResults.some(existingData => (
            existingData.results[0].name.first === newData.results[0].name.first &&
            existingData.results[0].name.last === newData.results[0].name.last
        ));

        if (!duplicate) {
            uniqueResults.push(newData);
        }

        return duplicate;
    };

const displayData = (data) => {
    
    const dataContainer = document.getElementById('klanten-container');

    const result = data.results[0];
    const { first: firstName, last: lastName } = result.name;
    const country = result.location.country;
    const avatar = result.picture.large;
    const title = result.name.title;

    const newDataSection = document.createElement('section');

    newDataSection.innerHTML = `<img src="${avatar}" alt="avatar">
        <p>${title} ${firstName} ${lastName}</p>
        <p>Country: ${country}</p>`;

    dataContainer.appendChild(newDataSection);
};

    document.addEventListener('DOMContentLoaded', fetchData);
})();
