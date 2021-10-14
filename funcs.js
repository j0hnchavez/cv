async function render_md(f){
    txt = await fetch(f + ".md").then(res => res.text())
    div = document.getElementsByClassName(f)[0]
    div.innerHTML = marked(txt, {breaks: true})
}