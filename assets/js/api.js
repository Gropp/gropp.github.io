// fazendo uma fetch no github para ler um arquivo json

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Gropp/gropp.github.io/main/data/profile.json';
    const fetching = await fetch(url)
    // retorna um json
    return await fetching.json()
}