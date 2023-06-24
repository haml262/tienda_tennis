export default class Tabs {
    constructor(idElemento){
        this.tabs = document.getElementById(idElemento);
        this.nav = this.tabs.querySelector('.tabs');

        this.nav.addEventListener('click', (e) => {
            // Comprobamos que el elemente que clickeamos tanga la clase de tabs__link.
            if ([...e.target.classList].includes('tabs__button')) {
                // Obtenemos la tab que queremos mostrar.
                const tab = e.target.dataset.tab;

                // Quitamos la clase active de alguna otras tabs que lo tengan.
                if (this.tabs.querySelector('.tab--active')) {
                    this.tabs.querySelector('.tab--active').classList.remove('tab--active')
                }

                if (this.tabs.querySelector('.tabs__button--active')) {
                    this.tabs.querySelector('.tabs__button--active').classList.remove('tabs__button--active')
                }

                // Agregamos la clase activa al tab.
                this.tabs.querySelector(`#${tab}`).classList.add('tab--active');

                // Agregamos la clase activa al baton.
                e.target.classList.add('tabs__button--active');
            }
        })
    }
}