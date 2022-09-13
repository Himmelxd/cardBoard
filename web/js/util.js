function fit(e) {
    var i = 1000;
    e.style.fontSize = 100;
    while (i > 0 && (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight)) {
        i -= 1;
        e.style.fontSize = e.computedStyleMap().get('font-size').value - 5;
    }
    if (i == 0) console.error('too much')
}