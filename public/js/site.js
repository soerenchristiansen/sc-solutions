$(function() {
    "use strict";

    
});

function includeHTML() {
    var z = document.getElementsByTagName('*');
    for (let i = 0; i < z.length; i++) {
        const element = z[i];
        
        var htmlFile = element.getAttribute('include-html');

        if (htmlFile) {
            $(element).load(htmlFile);
        }
    }
}
