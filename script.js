const breed = document.querySelector('#breed');
const facts = document.querySelector('#facts');
const breedRes = document.querySelector('#bredRes');
const factsRes = document.querySelector('#factsRes');

//Facts
const getFactData = async () => {
    try {
        const res = await axios.get('https://catfact.ninja/fact')
        return res.data.fact
    } catch (e) {
        console.log('Error', e)
        return 'No facts at the moment'
    }
};

const factText = async () => {
    const factData = await getFactData()
    factsRes.append(factData)
};


facts.addEventListener('click', () => {
    factsRes.style.display = 'block';
    breedRes.style.display = 'none';
    factText()
    factsRes.innerText = ''
});

//Breeds

const getBreedData = async () => {
    try {
        const res = await axios.get('https://catfact.ninja/breeds?limit=98')
        let randomNum = Math.floor(Math.random() * 98)
        return res.data.data[randomNum]
    } catch (e) {
        console.log('Error', e)
        return 'There are no breeds for the moment'
    }
};

const breedText = async () => {
    const breedData = await getBreedData()
    const breed = breedData.breed;
    const country = breedData.country;
    const origin = breedData.origin;
    const coat = breedData.coat;
    const pattern = breedData.pattern;

    const catsInnerHTML = `
        <div class="rows">
            Breed: ${breed}
        </div>
        <div class="rows">
            Country: ${country}
        </div>
        <div class="rows">
            Origin: ${origin}
        </div>
        <div class="rows">
            Coat: ${coat}
        </div>
        <div class="rows">
            Pattern: ${pattern}
        </div>
    `
    breedRes.innerHTML = catsInnerHTML;
};

breed.addEventListener('click', () => {
    breedRes.style.display = 'block';
    factsRes.style.display = 'none';
    breedText()
    breedRes.innerText = ''
});