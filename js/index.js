window.onload = function(){

    if(window.location.href=="http://localhost/APIHotel/APIHotelManagetment/hotel.html"){
        $.getJSON("resources/APIHotelManagement.json", function(data){
            
            // Muestra de los hoteles
            var hoteles = data.dbData[1]
            var hotel
            var contenedorHoteles = document.getElementById("contenedorHoteles")
            var divBorder = document.createElement('div')
            divBorder.setAttribute('style','border: solid 2px #000;')

            for (let i = 0; i < hoteles.length; i++) {
                hotel = hoteles[i]
                let hotelIndividual = document.createElement('div')
                hotelIndividual.setAttribute('style','background-color:#ECE5E5; border-radius:20px; margin: 30px; padding:20px;')
                let nombreHotel= document.createElement('h1')
                nombreHotel.setAttribute('style', 'color: #FF5722; font-weight: bold; text-align: center; padding: 30px 10px 10px 10px;')
                nombreHotel.innerText=hotel[3]
                let descripcionHotel= document.createElement('p')
                descripcionHotel.setAttribute('style', 'padding: 0px 50px; color:#3D5E73;')
                descripcionHotel.innerText=hotel[5]
                let direccionHotel= document.createElement('p')
                direccionHotel.setAttribute('style', 'padding: 0px 50px; color: #FF5722; font-weight: bold;')
                direccionHotel.innerText=hotel[7]
                let telefonoHotel= document.createElement('p')
                telefonoHotel.setAttribute('style', 'padding: 0px 50px; color: #FF5722;font-weight: bold;')
                telefonoHotel.innerText=hotel[9]
                let serviciosHotel= document.createElement('p')
                serviciosHotel.setAttribute('style', 'padding: 0px 50px; color: #FF5722;font-weight: bold;')
                serviciosHotel.innerText=hotel[11]
                
                let familiarHotel= document.createElement('p')
                familiarHotel.setAttribute('style', 'padding: 0px 50px 30px 50px; color: #FF5722;font-weight: bold;')
                familiarHotel.innerText='Familiar: '+hotel[15]
                let paginaHotel= document.createElement('a')
                paginaHotel.href = hotel[13]
                paginaHotel.innerText='Visit website'
                paginaHotel.setAttribute('style', 'padding: 10px 50px; color: #0367A6;font-weight: bold; text-decoration: underline;')

                hotelIndividual.appendChild(nombreHotel)
                hotelIndividual.appendChild(descripcionHotel)
                hotelIndividual.appendChild(direccionHotel)
                hotelIndividual.appendChild(telefonoHotel)
                hotelIndividual.appendChild(serviciosHotel)
                
                hotelIndividual.appendChild(familiarHotel)
                hotelIndividual.appendChild(paginaHotel)
                contenedorHoteles.appendChild(hotelIndividual)

            }

            // Muestra de los restaurantes
            var hoteles = data.dbData[3]
            var hotel
            console.log(hoteles)
            var contenedorHoteles = document.getElementById("contenedorRestaurantes")
            divBorder = document.createElement('div')
            divBorder.setAttribute('style','border: solid 2px #0A0;')

            for (let i = 0; i < hoteles.length; i++) {
                hotel = hoteles[i]
                console.log()
                let restauranteIndividual = document.createElement('div')
                restauranteIndividual.setAttribute('style','background-color:#B4D9D9; border-radius:20px; margin: 30px; padding:20px;')
                
                let nombrerRestaurante= document.createElement('h1')
                nombrerRestaurante.setAttribute('style', 'color: #0367A6; font-weight: bold; text-align: center; padding: 30px 10px 10px 10px;')
                nombrerRestaurante.innerText=hotel[3]
                let descripcionRestaurante= document.createElement('p')
                descripcionRestaurante.setAttribute('style', 'padding: 0px 50px; color:#3D5E73;')
                descripcionRestaurante.innerText=hotel[5]
                let paginaWebRestaurante= document.createElement('a')
                paginaWebRestaurante.href = hotel[9]
                paginaWebRestaurante.innerText = "Visit website"
                paginaWebRestaurante.setAttribute('style', 'padding: 0px 50px 30px 50px; color: #FF5722;font-weight: bold; text-decoration: underline;')
                let direccionRestaurante= document.createElement('p')
                direccionRestaurante.setAttribute('style', 'padding: 0px 50px; color: #0367A6;font-weight: bold;')
                direccionRestaurante.innerText=hotel[7]
                

                restauranteIndividual.appendChild(nombrerRestaurante)
                restauranteIndividual.appendChild(descripcionRestaurante)
                restauranteIndividual.appendChild(direccionRestaurante)
                restauranteIndividual.appendChild(paginaWebRestaurante)
                contenedorHoteles.appendChild(restauranteIndividual)

            }
            //convertToCsv('hoteles.csv', hoteles)
        });
    }
}



function getHoteles(){
    console.log('conecta')
    console.log(JsonWebTokenError)
    console.log(token)
}

function convertToCsv(fName, rows) {
    var csv = '';
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        for (var j = 0; j < row.length; j++) {
            var val = row[j] === null ? '' : row[j].toString();
            val = val.replace(/\t/gi, " ");
            if (j > 0)
                csv += '\t';
            csv += val;
        }
        csv += '\n';
    }

    // for UTF-16
    var cCode, bArr = [];
    bArr.push(255, 254);
    for (var i = 0; i < csv.length; ++i) {
        cCode = csv.charCodeAt(i);
        bArr.push(cCode & 0xff);
        bArr.push(cCode / 256 >>> 0);
    }

    var blob = new Blob([new Uint8Array(bArr)], { type: 'text/csv;charset=UTF-16LE;' });
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, fName);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) {
            var url = window.URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fName);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        }
    }
}

var hoteles



   

