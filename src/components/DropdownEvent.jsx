const handleClick = (event) => {
    const parent = event.target.parentNode
    const target = parent.classList.value
    target === '' ? parent.classList.add("active") : parent.classList.remove("active")
};

export default handleClick