// site.js


// Year End Calendar fix
// changes the page title & text header (h3) to the correct year calendar on page load where text is 'bookingThisYear' or 'bookingNextYear'
// therefore it only corrects the menu (nav a) on most pages but on the booking pages it changes the title and hearder text
$('title, a, h3').contents().filter(function () {
    return this.nodeType === 3;
}).each(function () {
    this.textContent = this.textContent.replace('bookingThisYear', '2018 Calendar');
    this.textContent = this.textContent.replace('bookingNextYear', '2019 Calendar');
});