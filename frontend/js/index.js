document.getElementById('buttons').addEventListener('click', function(e) {  
    let li = e.target.closest('li[data-endpoint]');
    if (li) {
        const endpoint = li.getAttribute('data-endpoint');
        window.location.href = endpoint; 
    }
});