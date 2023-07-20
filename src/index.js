import './styles/styles.css';

class Schiff {
  constructor(name, groesse) {
    this.name = name;
    this.groesse = groesse;
  }
}

class Spiel {
  constructor(gridSize, schiffe) {
    this.gridSize = gridSize;
    this.schiffe = schiffe;
    this.contentDiv = document.querySelector("#content");
    this.createPage();
    this.canPlay = false;
  }

  createPage() {
    this.createHeader();
    this.createMainContent();
    this.createResetButton();
    this.createRasterContainer();
    this.createRaster();
  }

  createHeader() {
    const header = document.createElement("h1");
    header.textContent = "Battleships";
    this.contentDiv.appendChild(header);
  }

  createMainContent() {
    const textElements = [
      "Place your Ships in the Grid",
      "Guess where the enemy ships are and try to hit them"
    ];

    textElements.forEach(text => {
      const p = document.createElement("p");
      p.textContent = text;
      this.contentDiv.appendChild(p);
    });
  }

  createResetButton() {
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Game";
    resetButton.addEventListener('click', () => this.resetGame());
    this.contentDiv.appendChild(resetButton);
  }

  createRasterContainer() {
    this.rasterContainer = document.createElement('div');
    this.rasterContainer.id = 'raster-container';
    this.contentDiv.appendChild(this.rasterContainer);
  }

  createRaster() {
    this.spielerRaster = this.createSpielerRaster('spieler-raster', [...this.schiffe], true);
    this.rasterContainer.appendChild(this.spielerRaster);
    this.computerRaster = this.createSpielerRaster('computer-raster', [...this.schiffe], false);
    this.rasterContainer.appendChild(this.computerRaster);
    this.spielerZellen = Array.from(this.spielerRaster.querySelectorAll('.zelle'));
    this.computerZellen = Array.from(this.computerRaster.querySelectorAll('.zelle'));
  }

  resetGame() {
    this.spielerRaster.remove();
    this.computerRaster.remove();
    this.createRaster();
    this.canPlay = false;
  }

  createSpielerRaster(id, schiffe, istSpieler) {
    const raster = document.createElement('div');
    raster.id = id;

    let zellen = new Array(this.gridSize);
    for (let i = 0; i < this.gridSize; i++) {
      zellen[i] = new Array(this.gridSize);
    }
    

    for (let zeile = 0; zeile < this.gridSize; zeile++) {
      for (let spalte = 0; spalte < this.gridSize; spalte++) {
        const zelle = document.createElement('div');
        zelle.className = 'zelle';
        zelle.dataset.zeile = zeile;
        zelle.dataset.spalte = spalte;
        zellen[zeile][spalte] = zelle;

        if (istSpieler) {
          zelle.addEventListener('click', () => this.schiffPlatzieren(zelle, schiffe, zellen));
        } else {
          zelle.addEventListener('click', () => {
            if (this.canPlay) {
              this.angreifen(zelle);
            }
          });
        }

        raster.appendChild(zelle);
      }
    }

    if (!istSpieler) {
      this.schiffeSetzen(schiffe, zellen);
    }

    return raster;
  }

  schiffeSetzen(schiffe, zellen) {
    schiffe.forEach(schiff => {
      let platziert = false;
      while (!platziert) {
        const zeile = Math.floor(Math.random() * this.gridSize);
        const spalte = Math.floor(Math.random() * this.gridSize);
        if (this.canPlace(schiff, zeile, spalte, zellen)) {
          for (let i = 0; i < schiff.groesse; i++) {
            const zielzelle = zellen[zeile][spalte + i];
            zielzelle.classList.add('schiffHidden');
          }
          platziert = true;
        }
      }
    });
  }
  

  schiffPlatzieren(zelle, schiffe, zellen) {
    if (zelle.classList.contains('schiff')) return;

    const schiff = schiffe.shift();
    if (!schiff) {
      this.canPlay = true;
      return;
    }

    const zeile = parseInt(zelle.dataset.zeile);
    const spalte = parseInt(zelle.dataset.spalte);

    if (this.canPlace(schiff, zeile, spalte, zellen)) {
      for (let i = 0; i < schiff.groesse; i++) {
        const zielzelle = zellen[zeile][spalte + i];
        zielzelle.classList.add('schiff');
      }
    } else {
      schiffe.unshift(schiff);
    }
  }

  canPlace(schiff, zeile, spalte, zellen) {
    if (spalte + schiff.groesse > this.gridSize) return false;

    for (let i = 0; i < schiff.groesse; i++) {
      const zielzelle = zellen[zeile][spalte + i];
      if (zielzelle && zielzelle.classList.contains('schiff')) return false;
    }

    return true;
  }

  angreifen(zelle) {
    if (zelle.classList.contains('hit') || zelle.classList.contains('miss')) {
      return;
    }

    if (zelle.classList.contains('schiffHidden')) {
      zelle.classList.add('hit');
      zelle.classList.remove('schiffHidden');
    } else {
      zelle.classList.add('miss');
    }

    if (!this.computerZellen.some(zelle => zelle.classList.contains('schiffHidden'))) {
      alert('Sie haben gewonnen!');
      this.resetGame();
    } else {
      this.computerAngreifen();
    }
  }

  computerAngreifen() {
    let zelle;
    do {
      const index = Math.floor(Math.random() * this.gridSize * this.gridSize);
      zelle = this.spielerZellen[index];
    } while (zelle.classList.contains('hit') || zelle.classList.contains('miss'));

    if (zelle.classList.contains('schiff')) {
      zelle.classList.add('hit');
      zelle.classList.remove('schiff');
    } else {
      zelle.classList.add('miss');
    }

    this.gameEnd();
  }

  gameEnd() {
    const spielerSchiffe = this.spielerRaster.querySelectorAll('.schiff').length;
    const computerSchiffe = this.computerRaster.querySelectorAll('.schiffHidden').length;

    if (spielerSchiffe === 0 || computerSchiffe === 0) {
      alert(spielerSchiffe === 0 ? 'Der Computer hat gewonnen!' : 'Sie haben gewonnen!');
      this.resetGame();
    }
  }
}

window.addEventListener('load', function() {
  const schiffe = [
    new Schiff('Zerstörer', 1),
    new Schiff('U-Boot', 2),
    new Schiff('Kreuzer', 3),
    new Schiff('Schlachtschiff', 4),
    new Schiff('Flugzeugträger', 5)
  ];

  new Spiel(10, schiffe);
});
