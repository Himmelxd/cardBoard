function fit(e) {
    var i = 1000;
    e.style.fontSize = 100;
    while (i > 0 && (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight)) {
        i -= 1;
        e.style.fontSize = e.computedStyleMap().get('font-size').value - 5;
    }
    if (i == 0) console.error('too much')
}

colors = ['hsl(60, 100%, 87%)','hsl(0, 58%, 86%)','hsl(30, 58%, 86%)','hsl(120, 58%, 86%)','hsl(170, 58%, 86%)','hsl(200, 58%, 86%)','hsl(230, 58%, 86%)','hsl(290, 58%, 86%)'];