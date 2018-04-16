document.body.addEventListener("click", e => { // Note: if use querySelector, only returns the first element been found
    
    // click edit
    if (e.target.className === 'edit'){

        // create textarea
        let editTextarea = document.createElement('textarea');
        let content = e.target.parentNode.nextElementSibling;
        editTextarea.className = 'content';
        editTextarea.innerText = content.innerText;
        editTextarea.setAttribute('placeholder', 'Leave your message here');
        editTextarea.setAttribute('required', ''); // Note: setAttribute() - 2 arguments required
        // replace content with editTextarea
        content.outerHTML = editTextarea.outerHTML;
        /* another method (not very good)
        e.target.parentNode.parentNode.insertBefore(editTextarea, content);
        content.style.display = 'none';
        */

        // edit button => submit button
        e.target.innerText = 'submit';
        e.target.className = 'edit__done';
    };
    
    // click submit (finish editing)
    if (e.target.className === 'edit__done'){
        let content = e.target.parentNode.nextElementSibling;
        let commentId = content.nextElementSibling;
        if (content.value !== ''){};
    };
    
    
    // click delete
    if (e.target.className === 'delete'){};

});






