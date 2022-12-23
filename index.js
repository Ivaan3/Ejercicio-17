function initMap() {
    // console.log("iniciar mapa") SOLO PARA VER QUE FUNCIONA
    const posicion = {
        lat: -25.363,
        lng: 131.044,
    }
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })
    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "posicion inicial"
    })
    nuevoMarcador()
}

function nuevoMarcador() {
    marker = new google.maps.Marker({
        position: {
            lat: 25,
            lng: 43
        },
        map,
        title: "marcador 1"
    })
    marker = new google.maps.Marker({
        position: {
            lat: 46,
            lng: -60
        },
        map,
        title: "marcador 2"
    })
    marker = new google.maps.Marker({
        position: {
            lat: -25,
            lng: -43
        },
        map,
        title: "marcador 3"
    })
}