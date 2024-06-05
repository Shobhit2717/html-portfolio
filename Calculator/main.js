(function () {
    let forms = document.querySelector('#forms')
    let screen = document.querySelector('.screen')
    let button = document.querySelectorAll('.btn')
    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.btn-equal')

    for (let btn of button) {
        btn.addEventListener('click', (e) => {
            let value = e.target.dataset.num
            screen.value += value
        })
    }

    equal.addEventListener('click', (e) => {
        if (screen.value === '') {
            screen.value = ''
        }
        else {
            let answer = eval(forms.elements.expression.value)
            screen.value = answer
        }
    })

    clear.addEventListener('click', (e) => {
        screen.value = ''
    })
})()