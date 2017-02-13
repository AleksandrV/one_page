window.onload = function () {
   // открытие select_field
    var ElemsClassSelect = document.getElementsByClassName('select');

    for (var i = 0; i < ElemsClassSelect.length; i++) {

        ElemsClassSelect[i].onclick = function(x) {

        return function (){
                ElemsClassSelect[x].firstElementChild.firstElementChild.classList.toggle('show_elem')

            };

        }(i);
    }
}