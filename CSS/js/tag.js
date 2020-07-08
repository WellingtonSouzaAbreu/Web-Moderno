const colors = {
    p: 'red',
    div: 'blue',
    span: 'green',
    section: 'pink',
    ul: 'gray',
    ol: 'white',
    header: 'orange',
    nav: 'yellow',
    padrao: '#616161',

    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)
    //Se o noLabel não estiver presente
    if (!elemento.classList.contains('noLabel')) { // ClassList armazena a lista de classes aplicadas a determinado elemento  
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0]) // Insere antes do primeiro elemnto dentro do box
    }
})



