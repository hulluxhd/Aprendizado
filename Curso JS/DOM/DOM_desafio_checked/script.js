(function(){
const check = document.querySelector("input[id='checkbox']")
const btn = document.querySelector(".btn")
btn.disabled = true
check.onclick = () => {
    btn.disabled = !check.checked
}
})()
