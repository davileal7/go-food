function clickMenu01() {
    if (menu01.style.display == 'flex') {
        menu01.style.display = 'none'
    } else {
        menu01.style.display = 'flex'
    } 
    if (menu02.style.display == 'flex') {
        menu02.style.display = 'none'
    }
    if (menu03.style.display == 'flex') {
        menu03.style.display = 'none'
    } 
    
}

function clickMenu02() {
    if (menu02.style.display == 'flex') {
        menu02.style.display = 'none'
    } else {
        menu02.style.display = 'flex'
    }
    
    if (menu01.style.display == 'flex') {
        menu01.style.display = 'none'
    }
    if (menu03.style.display == 'flex') {
        menu03.style.display = 'none'
    } 
}

function clickMenu03() {
    if (menu03.style.display == 'flex') {
        menu03.style.display = 'none'
    } else {
        menu03.style.display = 'flex'
    }
    if (menu01.style.display == 'flex') {
        menu01.style.display = 'none'
    }
    if (menu02.style.display == 'flex') {
        menu02.style.display = 'none'
    }
}

function clickPedido() {
    if (pedidos.style.display == 'flex') {
        pedidos.style.display = 'none'

    } else {
        pedidos.style.display = 'flex'
    }
    if (botao.style.display == 'flex') {
        botao.style.display = 'none'
    }
    else {
        botao.style.display = 'flex'
    } 
}

function conf() {
    alert("Pedidos enviados com sucesso!")
    const clear = document.querySelector("#pedidos")
    clear.innerHTML = ""
}

function deletar() {
    const delet = document.querySelector(".lan01")
    delet.innerHTML =""
}
function deletar2() {
    const delet = document.querySelector(".lan02")
    delet.remove()
}
function deletar3() {
    const delet = document.querySelector(".lan03")
    delet.remove()
}
function deletar4() {
    const delet = document.querySelector(".lan04")
    delet.remove()
}
function deletar5() {
    const delet = document.querySelector(".ref1")
    delet.remove()
}
function deletar6() {
    const delet = document.querySelector(".ref2")
    delet.remove()
}
function deletar7() {
    const delet = document.querySelector(".ref3")
    delet.remove()
}
function deletar8() {
    const delet = document.querySelector(".ref4")
    delet.remove()
}
function deletar9() {
    const delet = document.querySelector(".sobre01")
    delet.remove()
}
function deletar10() {
    const delet = document.querySelector(".sobre02")
    delet.remove()
}
function deletar11() {
    const delet = document.querySelector(".sobre03")
    delet.remove()
}
function deletar12() {
    const delet = document.querySelector(".sobre04")
    delet.remove()
}

//LANCHES
function x_bacon() {
    alert("X-Bacon adicionado ao Carrinho")
    //const pedidos = document.querySelector("#lan01")
    //pedidos.innerHTML += "X-Bacon"
    var div = document.createElement("div")
    div.classList = "lan01"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var lan01 = document.querySelector(".lan01")
    var span1 = document.createElement("span")
    var xbacon = document.createTextNode("X-Bacon")
    span1.appendChild(xbacon)
    lan01.appendChild(span1)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar()")
    lan01.appendChild(imgDelete) 
}

function x_frango() {
    alert("X-Frango adicionado ao Carrinho")
    var div = document.createElement("div")
    div.classList = "lan02"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var lan02 = document.querySelector(".lan02")
    var span2 = document.createElement("span")
    var xfrango = document.createTextNode("X-Frango")
    span2.appendChild(xfrango)
    lan02.appendChild(span2)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar2()")
    lan02.appendChild(imgDelete) 
}

function x_salada() {
    alert("X-Salada adicionado ao Carrinho")
    var div = document.createElement("div")
    div.classList = "lan03"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var lan03 = document.querySelector(".lan03")
    var span3 = document.createElement("span")
    var xsalada = document.createTextNode("X-Salada")
    span3.appendChild(xsalada)
    lan03.appendChild(span3)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar3()")
    lan03.appendChild(imgDelete) 
}

function hot_dog() {
    alert("Hot Dog adicionado ao Carrinho")
    var div = document.createElement("div")
    div.classList = "lan04"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var lan04 = document.querySelector(".lan04")
    var span4 = document.createElement("span")
    var hotdog = document.createTextNode("Hot Dog")
    span4.appendChild(hotdog)
    lan04.appendChild(span4)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar4()")
    lan04.appendChild(imgDelete) 
}

//REFRIGERANTES
function refri01() {
    alert("Coca cola adicionado ao Carrinho")
    var div = document.createElement("div")
    div.classList = "ref1"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var ref1 = document.querySelector(".ref1")
    var span5 = document.createElement("span")
    var coca = document.createTextNode("Coca-Cola")
    span5.appendChild(coca)
    ref1.appendChild(span5)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar5()")
    ref1.appendChild(imgDelete) 
}

function refri02() {
    alert("Guarána adicionado ao Carrinho")
    var div = document.createElement("div")
    div.classList = "ref2"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var ref2 = document.querySelector(".ref2")
    var span6 = document.createElement("span")
    var guar = document.createTextNode("Guarána")
    span6.appendChild(guar)
    ref2.appendChild(span6)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar6()")
    ref2.appendChild(imgDelete) 
}

function refri03() {
    alert("Fanta adicionado ao Carrinho")
    var div = document.createElement("div")
    div.classList = "ref3"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var ref3 = document.querySelector(".ref3")
    var span7 = document.createElement("span")
    var fanta = document.createTextNode("Fanta")
    span7.appendChild(fanta)
    ref3.appendChild(span7)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar7()")
    ref3.appendChild(imgDelete) 
}

function refri04() {
    alert("Pepsi adicionado ao Carrinho")
    var div = document.createElement("div")
    div.classList = "ref4"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var ref4 = document.querySelector(".ref4")
    var span8 = document.createElement("span")
    var pepsi = document.createTextNode("Pepsi")
    span8.appendChild(pepsi)
    ref4.appendChild(span8)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar8()")
    ref4.appendChild(imgDelete) 
}

//SOBREMESAS
function sobremesa01() {
    alert("Açai adicionado ao Carrinho")
    var div = document.createElement("div")
    div.classList = "sobre01"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var sobrem01 = document.querySelector(".sobre01")
    var span9 = document.createElement("span")
    var acai = document.createTextNode("Açai")
    span9.appendChild(acai)
    sobrem01.appendChild(span9)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar9()")
    sobrem01.appendChild(imgDelete) 
}
function sobremesa02() {
    alert("Mousse Creme adicionado ao Carrinho")
    var div = document.createElement("div")
    div.classList = "sobre02"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var sobrem02 = document.querySelector(".sobre02")
    var span10 = document.createElement("span")
    var Mousse = document.createTextNode("Mousse Creme")
    span10.appendChild(Mousse)
    sobrem02.appendChild(span10)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar10()")
    sobrem02.appendChild(imgDelete) 
}

function sobremesa03() {
    alert("Sorvete adicionado ao Carrinho")
    var div = document.createElement("div")
    div.classList = "sobre03"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var sobrem03 = document.querySelector(".sobre03")
    var span11 = document.createElement("span")
    var sorvete = document.createTextNode("Sorvete")
    span11.appendChild(sorvete)
    sobrem03.appendChild(span11)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar11()")
    sobrem03.appendChild(imgDelete) 
}
function sobremesa04() {
    alert("Mousse Chocolate adicionado ao Carrinho")
    var div = document.createElement("div")
    div.classList = "sobre04"
    var pedidos = document.querySelector("#pedidos")
    pedidos.appendChild(div)

    var sobrem04 = document.querySelector(".sobre04")
    var span12 = document.createElement("span")
    var mousChocolate = document.createTextNode("Mousse Chocolate")
    span12.appendChild(mousChocolate)
    sobrem04.appendChild(span12)

    //icone DEL
    let imgDelete = document.createElement("img")
    imgDelete.classList = "imgDel"
    imgDelete.src += "imagens/remove_branco.png"
    imgDelete.setAttribute("onclick", "deletar12()")
    sobrem04.appendChild(imgDelete) 
}
