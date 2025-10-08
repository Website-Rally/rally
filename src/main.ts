import './style.css'
import icon from "/sword_placeholder.png";

function createMainPage() {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div class="heading">
      <div>
        <img class="logo" src="${icon}" alt="Rally Logo"/>
      </div>
        <h1>Welcome to Rally!!</h1>
      <div>
        <p>A community project where everyone adds their own touch to the website</p>
      </div>
      <div class="button">
        <button onclick="document.location='./links.html'">To the pages!!!</button>
     </div>
      <div class="credits">
        <h4>Credits!</h4>
        <br>
        <p>Youthack - Infrastructure and Hosting<br>
        KittyCat - Site logo <br>
        Noololly - Site design and organiser<br>
        Lenny - organiser<br>
        Mattsoh - organiser<br>
        </p>
      </div>
      </div>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    createMainPage();
})

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        window.location.reload();
    }
});
