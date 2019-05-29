const codeText = document.getElementById('code-text')
const codeRender = document.getElementById('code-render')

document.getElementById('button').addEventListener('click', (e) => {
    const text = codeText.value
    if (text.trim().length > 0) formatCode(text)
})

const formatCode = (text) => {
    // let newText = '<pre>'
    // const selector = getSelector(text)
    // text = text.replace(selector, '')
    // newText += convertCharacter(selector, 'selector')
    // newText += selector

    // for (const character of text) {
    //     if (character == '{' || character == '}') newText += convertCharacter(character, 'bracket')
    //     else if (character == ';') newText += convertCharacter(character, 'semicolon')
    //     else if (character == ':') newText += convertCharacter(character, 'twoPoints')
    //     else newText += character
    // }

    getPropertyOrValue(text)

    //codeRender.innerHTML = newText + '</pre>'
}

const convertCharacter = (character, classname) => {
    if (classname == 'twoPoints') return `<span class=${classname}>${character}</span>`
    else if (classname == 'semicolon' || classname == 'bracket') return `<span class=${classname}>${character}</span><br>`
    else if (classname == 'selector') return `<span class=${classname}>${character}</span>`
}

const getSelector = (text) => {
    let selector = ''
    for (const character of text) {
        if (character == '.') {
            for (const letter of text) {
                if (letter != ' ') {
                    selector += letter
                } else break
            }
        }
    }
    return selector
}

const getPropertyOrValue = (text) => {
    let newText = ''
    console.log(text.split('}'))
}