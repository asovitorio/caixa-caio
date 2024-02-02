import { produtos } from './produtos.mjs'

let cartao = document.getElementById('cartao');
let codigo = document.getElementById('codigo');
let tabela = document.getElementById('tabela');
let totalPagar = document.getElementById('total-pagar');
let total = 0
let contador = 0
codigo.addEventListener('change', (e) => {

    let texto = String(e.target.value)
    let item =
        e.target.value = ''
    if (texto.includes('*')) {
        item = texto.split('*')
        let [produto] = produtos.filter(produto => produto.codeBar === Number(item[1]));
        // style="background-color: #272626;"
        tabela.innerHTML += `
            <tr ${contador % 2 != 0 ? 'style="background-color: #272626;"' : ''}>
                <td>${produto.codeBar}</td>
                <td>${produto.description}</td>
                <td>${item[0]}</td>
                <td>R$ ${produto.valor.toFixed(2)}</td>
                <td>R$ ${(Number(item[0]) * Number(produto.valor)).toFixed(2)}</td>
            </tr>`
        total += Number(item[0]) * Number(produto.valor)
        console.log(total);
        contador++
    } else {
        item = texto
        let [produto] = produtos.filter(produto => produto.codeBar === Number(item));
        tabela.innerHTML += `
        <tr ${contador % 2 != 0 ? 'style="background-color: #272626;"' : ''}>
            <td>${produto.codeBar}</td>
            <td>${produto.description}</td>
            <td>${1}</td>
            <td>R$ ${produto.valor.toFixed(2)}</td>
            <td>R$ ${(1 * Number(produto.valor)).toFixed(2)}</td>
        </tr>`
        total += Number(produto.valor)
        console.log(total);
        contador++
    }
totalPagar.innerText=`R$ ${total.toFixed(2)}` 



})

