var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $button = $('.mostrar_form'),
    $list = $('#contenido'),
    $post = $('.item').first(),
    $publicarNavLink = $('#publicar_nav a'),
    $aside = $('aside');

if(localStorage.getItem('autosave')){
    $titulo.val(sessionStorage.getItem('titulo'))
    $url.val(sessionStorage.getItem('url'))
}

var id = setInterval(function(){
    sessionStorage.setItem('titulo', $titulo.val());
    sessionStorage.setItem('url', $url.val())

}, 1000);


function agregarPost(e){
    e.preventDefault();

    var url = $url.val(),
        titulo = $titulo.val(),
        $clone = $post.clone();
    
    $clone.find('.titulo_item a')
    .text(titulo)
    .attr('href', url);
    
    $clone.hide();
    
    $list.prepend($clone);
    mostrarFormulario();
    $titulo.val("");
    $url.val("");
    $clone.slideDown();
    //cancelar el evento
    //return e.preventDefault();
}



function mostrarFormulario(e){
   // "use strict"; //Js de forma estricta
    if(e) e.preventDefault()

    $form.slideToggle('slow')
    $list.slideToggle('slow')
    $aside.slideToggle('slow')
    
    //nos ayuda a prevent defaout event y ademas el stop bubbling
    //return e.prevent;
}



//Eventos
$button.click(mostrarFormulario);
$form.on('submit', agregarPost)
    .find('#url')
    .on('focus', function(event) {
        event.preventDefault();
        /* Act on the event */
        if($url.val() == ''){
            $url.val('http://');
        }
    })
    .on('blur', function(event) {
        event.preventDefault();
        /* Act on the event */
        if($url.val() == 'http://'){
            $url.val('');
        }
    });
$publicarNavLink.click(function(event) {
    $(this).toggleClass('disabled');
});
