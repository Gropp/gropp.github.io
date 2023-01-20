// guardamos a referencia do elemento HTML acordem e trigger na constante
const acordeonTrigger = document.querySelectorAll('.acordeon .trigger')

// percorremos o objeto criado
// quando o objeto trigger for true (for clicado) ele dispara a proxima arrow function
acordeonTrigger.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        // debugger
        // aqui descontruimos o objeto pegando os valores das classes ligados a classe acordeon
        const acordeon = trigger.parentElement
        // aqui verificamos se dentro dessa classe existe outra classe chamada open
        const isOpen = acordeon.classList.contains('open')

        // se existir a classe é removida e altera o css
        if(isOpen) {
            acordeon.classList.remove('open')
        // se nao existir a classe é adicionada fazendo com que o css para a classe open entre em cena
        } else {
            acordeon.classList.add('open')
        }
    })
})