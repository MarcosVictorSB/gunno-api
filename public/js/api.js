const form = document.querySelector('#sheetdb-form');
const btn = document.querySelector('.sheetdb-form-btn');
const input = document.querySelector('#sheetdb-form-input');
const inputDate = document.querySelector('#sheetdb-form-input-date');
/*
  Primeiro Formulario
*/

function changeContentBtn(value) {
  btn.textContent = value;
}

function clearInput() {
  input.value = '';
}

async function fetchSheetDB() {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: input.value,
      }),
    };

    await fetch(form.action, options);
  } catch (error) {
    console.log({ error });
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  changeContentBtn('Enviando ...');
  inputDate.value = new Date();
  setTimeout(async () => {
    await fetchSheetDB();
    changeContentBtn('Enviar');
    clearInput();
  }, 2000);
});

/*
  Secondo Formulario
*/

const formSecond = document.querySelector('#sheetdb-form-2');
const btnSecond = document.querySelector('.sheetdb-form-btn-second');
const inputSecond = document.querySelector('#sheetdb-form-input-second');
const inputDateSecond = document.querySelector('#sheetdb-form-input-date-second');

function changeContentBtnSecond(value) {
  btnSecond.textContent = value;
}

function clearInputSecond() {
  inputSecond.value = '';
}

async function fetchSheetDBSecond() {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputSecond.value,
      }),
    };

    await fetch(form.action, options);
  } catch (error) {
    console.log({ error });
  }
}

formSecond.addEventListener('submit', (e) => {
  e.preventDefault();
  changeContentBtnSecond('Enviando ...');
  inputDateSecond.value = new Date();
  setTimeout(async () => {
    await fetchSheetDBSecond();
    changeContentBtnSecond('Enviar');
    clearInputSecond();
  }, 2000);
});
