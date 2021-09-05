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
                let nombreHotel= document.createElement('h1')
                nombreHotel.innerText=hotel[3]
                let descripcionHotel= document.createElement('p')
                descripcionHotel.innerText=hotel[5]
                let direccionHotel= document.createElement('p')
                direccionHotel.innerText=hotel[7]
                let telefonoHotel= document.createElement('p')
                telefonoHotel.innerText=hotel[9]
                let serviciosHotel= document.createElement('p')
                serviciosHotel.innerText=hotel[11]
                let paginaHotel= document.createElement('p')
                paginaHotel.innerText=' Página web:'+hotel[13]
                let familiarHotel= document.createElement('p')
                familiarHotel.innerText=hotel[15]

                divBorder.appendChild(nombreHotel)
                divBorder.appendChild(descripcionHotel)
                divBorder.appendChild(direccionHotel)
                divBorder.appendChild(telefonoHotel)
                divBorder.appendChild(serviciosHotel)
                divBorder.appendChild(paginaHotel)
                divBorder.appendChild(familiarHotel)
                contenedorHoteles.appendChild(divBorder)

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
                
                let nombrerRestaurante= document.createElement('h1')
                nombrerRestaurante.innerText=hotel[3]
                let descripcionRestaurante= document.createElement('p')
                descripcionRestaurante.innerText=hotel[5]
                let direccionRestaurante= document.createElement('p')
                direccionRestaurante.innerText=hotel[7]
                let paginaWebRestaurante= document.createElement('p')
                paginaWebRestaurante.innerText=' Página web:'+hotel[9]

                divBorder.appendChild(nombrerRestaurante)
                divBorder.appendChild(descripcionRestaurante)
                divBorder.appendChild(direccionRestaurante)
                divBorder.appendChild(paginaWebRestaurante)
                contenedorHoteles.appendChild(divBorder)

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



   

