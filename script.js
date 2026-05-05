const contact=document.getElementById('contact-me');
contact.addEventListener('click', function(e) {
    e.preventDefault();
    const user = "pavantejb134";
    const domain = "gmail.com";
    window.location.href = `mailto:${user}@${domain}`;
});
