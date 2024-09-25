window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Variáveis do loop
    let loopNum = 0;
    let isDeleting = false;
    const toRotate = ["meu portifólio"];
    let text = '';
    let delta = 300 - Math.random() * 100;
    const period = 2000;
    const wrapElement = document.querySelector('.wrap'); // Seleciona o span onde o texto vai aparecer

    function tick() {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        text = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        wrapElement.innerHTML = text; // Atualiza o conteúdo do span

        if (isDeleting) {
            delta /= 2;
        }

        if (!isDeleting && text === fullText) {
            isDeleting = true;
            delta = period;
        } else if (isDeleting && text === '') {
            isDeleting = false;
            loopNum++;
            delta = 100;
        }

        setTimeout(tick, delta); // Chama a função novamente após um intervalo
    }

    // Inicia a função tick
    tick();

});