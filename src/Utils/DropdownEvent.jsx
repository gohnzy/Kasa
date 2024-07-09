const handleClick = (event) => {
    let parent 
    parent = event.target.closest('li');

    if(event.target.getAttribute("id", "equipements-item")) {
        parent = event.target.closest('article')
    }
  
    if (parent) {
        const target = parent.classList.value;
        target === '' ? parent.classList.add("active") : parent.classList.remove("active");
    } else {
        parent = event.target.closest('article')
        const target = parent.classList.value;
        target === '' ? parent.classList.add("active") : parent.classList.remove("active");
    }
};

export default handleClick;
