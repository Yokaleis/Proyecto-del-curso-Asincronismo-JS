//Clase 18: Consumiendo API

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCwTzSoE5LnwmpUcmc7zK-1A&part=snippet%2Cid&order=date&maxResults=5';

const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '816f3c3fc7msh456b553e9143bc2p1b2580jsn5e26fab4b8f3',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

//Creamos una funcion
async function fetchData(API){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//Creamos la funcion que se envoca a si misma
(async () => {
    try {
        const videos = await fetchData(API);
        //Creamos un template
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.default.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
      `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
        
    } catch (error) {
        console.log(error);
    }
});