const inputs = document.querySelectorAll('.input input, .input textarea');

function initFloatingLabels() {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    input.addEventListener('focus', function () {
      this.parentElement.classList.add('input-active');
    });

    input.addEventListener('blur', function () {
      if (this.value.trim() !== "" || this.tagName === 'TEXTAREA' || this.placeholder !== "") {
        this.parentElement.classList.add('input-filled');
      } else {
        this.parentElement.classList.remove('input-filled');
        this.parentElement.classList.remove('input-active');
      }
    });
  }
}

export { initFloatingLabels }; // Only exporting initFloatingLabels function
