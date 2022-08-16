let div = document.getElementById('list');
let ul = document.createElement('ul');
let body = document.body;
div.appendChild(ul);

let delSelected = document.createElement('input');
delSelected.setAttribute('type', 'button');
delSelected.setAttribute('style', ' visibility: hidden;');
delSelected.value = 'Удалить';
body.appendChild(delSelected);

let performedSelected = document.createElement('input');
performedSelected.setAttribute('type', 'button');
performedSelected.setAttribute('style', ' visibility: hidden;');
performedSelected.value = 'Выполненно';
body.appendChild(performedSelected);

let chooseAll = document.createElement('input');
chooseAll.value = 'Выбрать всё';
chooseAll.setAttribute('type', 'button');
body.appendChild(chooseAll);

let clearSelection = document.createElement('input');
clearSelection.setAttribute('type', 'button');
clearSelection.setAttribute('style', ' visibility: hidden;');
clearSelection.value = 'Очистить выбор';
body.appendChild(clearSelection);

clearSelection.onclick = function () {
  let allCheck = document.getElementsByClassName('delete');
  for (let check of allCheck) {
    check.checked = false;
  }
};

chooseAll.onclick = function () {
  let allCheck = document.getElementsByClassName('delete');
  for (let check of allCheck) {
    check.checked = true;
    clearSelection.setAttribute('style', ' visibility: none;');
    delSelected.setAttribute('style', ' visibility: none;');
    performedSelected.setAttribute('style', ' visibility: none;');
  }
};

delSelected.onclick = function () {
  let allCheck = document.getElementsByClassName('delete');

  for (let i = 0; i < allCheck.length; i++) {
    if (allCheck[i].checked) {
      allCheck[i].parentElement.remove();
      i = i - 1;
    }
  }
};

performedSelected.onclick = function () {
  let allCheck = document.getElementsByClassName('delete');
  for (let i = 0; i < allCheck.length; i++) {
    if (allCheck[i].checked) {
      allCheck[i].parentElement.setAttribute(
        'style',
        ' text-decoration-line: line-through'
      );
    }
  }
};

qq.onclick = function () {
  let text = document.getElementById('input').value;
  if (text === '') {
    alert('Нельзя создать пустую задачу');
  } else {
    let li = document.createElement('li');
    li.innerHTML = text;
    ul.appendChild(li);

    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('class', 'delete');
    li.appendChild(check);
    check.onclick = function () {
      if (this.checked) {
        clearSelection.setAttribute('style', ' visibility: none;');
        delSelected.setAttribute('style', ' visibility: none;');
        performedSelected.setAttribute('style', ' visibility: none;');
      }
    };

    let del = document.createElement('input');
    del.setAttribute('type', 'button');
    del.setAttribute('value', 'del');
    li.appendChild(del);
    del.onclick = function () {
      this.parentElement.remove('');
    };
  }
};
