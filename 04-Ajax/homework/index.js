
    $('#boton').click(() =>{   // al botón lo llame usando jquery sintaxis 
        // que se puede usar solamente porque la llame en <head> con el <script src=".../ajax/libs/jquery">
        var list = $('#lista') // me traigo ese ul con sintaxis de jquery
        // GET AJAX
        list.empty(); // sirve para vaciar lo que hay ahi dentro es decir el elemento que tiene la classe lista queda vacio
        // es para que cuando apreto por segunda vez el botón no vuelva a imprimir la lista. es sintaxis JQUERY
        $.get("http://localhost:5000/amigos", data => {
            // javascript
       for( let i = 0; i < data.length ; i++ ) {
       list.append(`<li>${data[i].name}</li>`);
       
       }
     })   
    })


    $('#search').click( () => {
     var id = $('#input').val();   // con esta sintaxis JQUERY estamos accediendo al valor del input y lo guardamos en esa variable
     $.get(`http://localhost:5000/amigos/${id}` , res =>{       // tengo que usar doble comillas porque con un backtic si ponemos doble / se comenta
           $('#amigo').text(res.name);
     })

    }
    )


    $('#delete').click(() => {
        var id = $('#inputDelete').val();
        $.ajax({
            url:`http://localhost:5000/amigos/${id}`,
            type: 'DELETE',
            success: () => {
             $('#success').text(`El amigo con el id : ${id} se ha borrado`)
            }
        })
    })
  