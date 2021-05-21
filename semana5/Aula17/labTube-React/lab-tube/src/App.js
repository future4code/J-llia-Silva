
import './App.css';


function App() {
  const reproduzVideo = () => {
    alert("Seu vídeo foi clicado")
  }
  return (
    <div className="App">
      <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" clasName="campoDeBusca" />
      </header>
      <div className="body">
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <hr />
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
          </ul>
        </nav>
        <main>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
            <img src={"https://picsum.photos/400/400?a=1"} alt="video um "/>
              <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
            <img src={"https://picsum.photos/400/400?a=2"} alt="video dois"/>

              <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
            <img src={"https://picsum.photos/400/400?a=3 "} alt="video três"/>
              <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
            <img src={"https://picsum.photos/400/400?a=4 "} alt="video quatro"/>
              <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
            <img src={"https://picsum.photos/400/400?a=5 "} alt="video cinco"/>
              <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
            <img src={"https://picsum.photos/400/400?a=6 "} alt="video seis"/>
              <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
            <img src={"https://picsum.photos/400/400?a=7 "} alt="video sete"/>
              <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
            <img src={"https://picsum.photos/400/400?a=8 "} alt="video oito"/>
              <h4>Título do vídeo</h4>
            </div>
          </section>
        </main>
      </div>
      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>


    </div >
  );
}
export default App;
