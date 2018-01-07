

$(document).ready(function () {
        var tr;
        for (var i = 0; i < podaci.length; i++) {

            tr = document.createElement('tr');

            for (var j = 0 ; j < 7; j++)
                tr.appendChild(document.createElement('td'));

            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.className = "cb";
            var pom = i+1;
            checkbox.id = "cb"+pom;
            tr.cells[0].appendChild(checkbox);
            tr.cells[1].appendChild(document.createTextNode(podaci[i].Ime));
            tr.cells[2].appendChild(document.createTextNode(podaci[i].Ocjena));
            tr.cells[3].appendChild(document.createTextNode(podaci[i].Rang_cijena(1-10)));
            tr.cells[4].appendChild(document.createTextNode(podaci[i].Kapacitet));
            tr.cells[5].appendChild(document.createTextNode(podaci[i].Datum_sljedeceg_eventa));
          
            $('#tabela').append(tr);
        }
        
});



function sortirajRastuci(kolona){
    var tabela = document.getElementById('tabela');
    for(var i = 1; i < tabela.rows.length; i++){
        var celija1 = tabela.rows[i].cells[kolona];
        for(var j = 1; j < tabela.rows.length; j++){
            var celija2 = tabela.rows[j].cells[kolona];
            if (kolona != 1 && kolona != 2){
                if (parseInt(celija1.innerHTML) < parseInt(celija2.innerHTML)){
                    var temp = tabela.rows[i].innerHTML;
                    tabela.rows[i].innerHTML = tabela.rows[j].innerHTML;
                    tabela.rows[j].innerHTML = temp;
                }
            }
            else {
                if (celija1.innerHTML < celija2.innerHTML){
                    var temp = tabela.rows[i].innerHTML;
                    tabela.rows[i].innerHTML = tabela.rows[j].innerHTML;
                    tabela.rows[j].innerHTML = temp;
                }
            }
        }
    }       
}

function sortirajOpadajuci(kolona){
    var tabela = document.getElementById('tabela');
    for(var i = 1; i < tabela.rows.length; i++){
        var celija1 = tabela.rows[i].cells[kolona];
        for(var j = 1; j < tabela.rows.length; j++){
            var celija2 = tabela.rows[j].cells[kolona];
            if (kolona != 1 && kolona != 2){
                if (parseInt(celija1.innerHTML) > parseInt(celija2.innerHTML)){
                    var temp = tabela.rows[i].innerHTML;
                    tabela.rows[i].innerHTML = tabela.rows[j].innerHTML;
                    tabela.rows[j].innerHTML = temp;
                }
            }
            else {
                if (celija1.innerHTML > celija2.innerHTML){
                    var temp = tabela.rows[i].innerHTML;
                    tabela.rows[i].innerHTML = tabela.rows[j].innerHTML;
                    tabela.rows[j].innerHTML = temp;
                }
            }
        }
    }       
}

function oznaciSve(){
    $(".cb").attr("checked",$("#oznSve").is(":checked"));   
}


function obrisi(){
    $('#tabela tbody').find('tr').each(function () {
        var row = $(this);
        if (row.find('input[type="checkbox"]').is(':checked')){
             $(this).closest("tr").remove();  
        }
    }); 
}