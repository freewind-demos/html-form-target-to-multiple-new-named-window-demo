const button1 = document.getElementById('button1')
button1.addEventListener('click', () => {
    const newTab = window.open('/b-1.html')
    const tabDoc = newTab.window.document;
    console.log("### tabDoc", {tabDoc})
})

const button2 = document.getElementById('button2')
button2.addEventListener('click', () => {
    const newTab = window.open('/c-1.html')
    const tabDoc = newTab.window.document;
    console.log("### tabDoc", {tabDoc})
})
