const listPokemon = document.querySelectorAll('.cartao');
const arrowLeft = document.querySelector('.btn-voltar');
const arrowRight = document.querySelector('.btn-avancar');

const selectedClass = 'selecionado';
const inactiveClass = 'inativo';
const disabledAttribute = 'disabled';

let indexPokemon = 0;
const lengthPokemons = listPokemon.length - 1;

const addAttributes = (arrow) => {
  arrow.setAttribute(disabledAttribute, '');
  arrow.classList.add(inactiveClass);
}

const removeAttributes = (arrow) => {
  arrow.removeAttribute(disabledAttribute);
  arrow.classList.remove(inactiveClass);
};

const toggleArrowState = () => {
  if (indexPokemon === 0) {
    addAttributes(arrowLeft);
  } else if (indexPokemon === lengthPokemons) {
    addAttributes(arrowRight);
  }

  if (indexPokemon > 0 && arrowLeft.hasAttribute(disabledAttribute)) {
    removeAttributes(arrowLeft);
  } else if (
    indexPokemon < lengthPokemons &&
    arrowRight.hasAttribute(disabledAttribute)
  ) {
    removeAttributes(arrowRight);
  }
};
toggleArrowState();

const showCard = () => {
  listPokemon[indexPokemon].classList.add(selectedClass);
};

const changePokemon = () => {
  const cardSelected = document.querySelector('.selecionado');
  cardSelected.classList.remove(selectedClass);
  showCard();
  toggleArrowState();
};

arrowLeft.addEventListener('click', () => {
  indexPokemon -= 1;
  changePokemon();
});

arrowRight.addEventListener('click', () => {
  indexPokemon += 1;
  changePokemon();
});
