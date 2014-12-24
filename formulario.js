var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $button = $('.mostrar_form'),
    $list = $('#contenido'),
    $post = $('.item').first();

function agregarPost(){
    var url = $url.val(),
        titulo = $titulo.val(),
        $clone = $post.clone();
    
    $clone.find('.titulo_item a')
    .text(titulo)
    .attr('href', url);
    
    $clone.hide();
    
    $list.prepend($clone);
    $clone.fadeIn();
    
    //cancelar el evento
    return false;
}



function mostrarFormulario(){
    $form.slideToggle();
    //nos ayuda a prevent defaout event y ademas el stop bubbling
    return false;
}



//Eventos
$button.click(mostrarFormulario);
$form.on('submit', agregarPost);
