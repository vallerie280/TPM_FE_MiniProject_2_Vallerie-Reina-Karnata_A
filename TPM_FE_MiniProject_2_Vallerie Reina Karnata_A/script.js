const adding_skill = document.getElementById('add_text');
const adding_btn = document.getElementById('add_button');
const list_skill = document.querySelector('.skills');
// const tutup = document.getElementsByClassName('close');
// const old_skill = document.getElementsByClassName('skill');

adding_btn.addEventListener('click', () => {
  const new_text = adding_skill.value.trim();
  if (new_text) {
    const new_skill = document.createElement('div');
    new_skill.classList.add('skill');
    new_skill.textContent = new_text;
    const closing = document.createElement('span');
    closing.classList.add('close');
    closing.textContent = 'x';
    closing.addEventListener('click', () => {
      new_skill.remove();
    });
    new_skill.appendChild(closing);
    list_skill.appendChild(new_skill);
    adding_skill.value = '';
  }
});

tutup.addEventListener('click', bodyElement.removeChild(old_skill));