const button = document.getElementById('button')
button.addEventListener('click', () => {
    console.log("### click")
    const newTab = window.open('/b-1.html')
    const tabDoc = newTab.window.document;
    console.log("### tabDoc", {tabDoc})
})
