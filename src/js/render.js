const codeText = document.getElementById('code-text')
const codeRender = document.getElementById('code-render')

document.getElementById('button').addEventListener('click', (e) => {
    const text = codeText.value
    if (text.trim().length > 0) formatCode(text)
})

const formatCode = (text) => {
    let newText = '<pre>'

    for (const character of text) {
        if (character == '{' || character == '}') newText += convertCharacter(character, 'bracket')
        else if (character == ';') newText += convertCharacter(character, 'semicolon')
        else if (character == ':') newText += convertCharacter(character, 'twoPoints')
        else newText += character
    }

    codeRender.innerHTML = newText + '</pre>'
}

const convertCharacter = (character, classname) => `<span class=${classname}>${character}</span>`