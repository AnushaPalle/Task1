function handleClick(){
  var pokemonName = document.getElementById('txtip').value;
  var pokemonImg = document.getElementById('pokeimg');
  var headingElement = document.querySelector('h1');

fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName).then((response)=>{


  if (!response.ok) {
        // make the promise be rejected if we didn't get a 2xx response
        headingElement.innerHTML="🧐404 Not Found<p>May Be a Typo in Pokemon name🥴, Enter Correct Spelling🤭</p>";
        pokemonImg.classList.add("hideImg");
        const err = new Error("Not 2xx response");
        err.response = response;
        throw err;
    } else {
         return response.json();
    }



}).then((data)=>{
  headingElement.innerHTML="Here is the "+pokemonName+" Image";
  console.log("Anu here is response");
  var imgUrl = data.sprites.front_default;
  pokemonImg.setAttribute("src",imgUrl);

  pokemonImg.classList.add("enlarge");
  pokemonImg.classList.remove("hideImg");
}).catch((err)=>{
  console.log("Anu here is error"+err);
});
}
