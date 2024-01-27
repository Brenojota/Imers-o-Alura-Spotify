
const searchInput = document.getElementById('search-input')
const resultsArtist = document.getElementById('result-artist')
const resultsPlaylist = document.getElementById('result-playlists')

document.addEventListener('input', function(){
    const searchValue = searchInput.value.toLowerCase()
    console.log("search = "+searchValue);
    if(searchValue === ''){
        resultsPlaylist.classList.remove('hidden');
        resultsArtist.classList.add('hidden');
        return
    }
    
    requestApi(searchValue)

})

function requestApi(value){
    var url = `http://localhost:3000/artists?name_like=${value}` 
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result){
    resultsPlaylist.classList.add('hidden');
    

    const artistName = document.getElementById('artist-name')
    const artistImg = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name
        artistImg.src = element.urlImg
    });

    resultsArtist.classList.remove('hidden');
}

