const codeText = document.getElementById('code-text')
const codeRender = document.getElementById('code-render')

let newText=''


document.getElementById('button').addEventListener('click', (e)=>{
    const text = codeText.value
    if(text.trim().length >0) formatCode(text)
    console.log(newText)
})

const formatCode = (text) =>{
    newText += getSelector(text)
    newText += getComas(text)
    newText += getSemicolons(text)
    newText += getwoPoints(text)

}

const getSelector = (text) =>text.substring(0,text.indexOf('{')).replace(text,`<span class>${text}</span>`)
const getComas = (text) => text.replace(',', `<span class="coma">,</span>`)
const getSemicolons = (text) => text.replace(';', `<span class="semicolon">;</span>`)
const getwoPoints = (text) => text.replace(':', `<span class="two-points">:</span>`)