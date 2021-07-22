    let btnCalc = document.querySelector('#calcularPreco')
    btnCalc.addEventListener('click', calcularPreco)

    function calcularPreco() {
        let quantidade = Number(document.getElementById('quantidade').value)
        let produto = document.getElementById('produto').value
        let preco = Number(document.getElementById('preco').value)
        let resultado = document.getElementById('resultado')

        total = quantidade * preco

        console.log(total)

            resultado.innerHTML = `<p>Você comprou ${produto}, no total de  R$${total},00 </b></p>`

        console.log(typeof (peso))
        console.log(typeof (altura))
        console.log(typeof (total))
    }

    let btnZerar = document.querySelector('#btnZerarCalc')
    btnZerar.addEventListener('click', btnZerarCalc)

    function btnZerarCalc() {
        document.getElementById('quantidade').value = ''
        document.getElementById('preco').value = ''
        document.getElementById('resultado').innerHTML = ''
    }