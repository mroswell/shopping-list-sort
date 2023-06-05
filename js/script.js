function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
}

function copyText() {
    var inputBox = document.getElementById('right-input');
    inputBox.select();
    document.execCommand('copy');
}
