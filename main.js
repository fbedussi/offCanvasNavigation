document.getElementsByTagName('main')[0].addEventListener('click', function() {
    document.body.classList.add('navigationOn');
});

document.getElementsByTagName('nav')[0].addEventListener('click', function() {
    document.body.classList.remove('navigationOn');
});