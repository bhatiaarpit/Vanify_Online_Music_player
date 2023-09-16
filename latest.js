


window.addEventListener('load', bootUpApp)

function bootUpApp(){
  fetchAndRenderAllSections();
}

function fetchAndRenderAllSections(){
  //fetch all sections data
  fetch('/assests/js/gaana.json')
  .then(res=>res.json())
  .then(res=>{
    console.table('response',res);
    const {cardbox} = res;
    if (Array.isArray(cardbox) && cardbox.length){
      cardbox.forEach(section =>{
        const {songsbox,songscards} = section;
        renderSection(songsbox, songscards);
      })
    }
  })
  .catch(()=>{
    alert('error failing data');
  })
}

function renderSection(data){
  makeSectionDom(data);
}

function makeSectionDom(){

}