
var podaci = [
  {
    "Ime":"Cheers",
    "Ocjena":"3",
    "Rang_cijena":"5",
    "Kapacitet":"150",
    "Datum_sljedeceg_eventa":"25.12.2017.",
  },
  {
    "Ime":"Pasta ZEN",
    "Ocjena":"4",
    "Rang_cijena":"8",
    "Kapacitet":"65",
    "Datum_sljedeceg_eventa":"15.12.2017.",
  },
   {
    "Ime":"Brew pub",
    "Ocjena":"5",
    "Rang_cijena":"7",
    "Kapacitet":"70",
    "Datum_sljedeceg_eventa":"15.12.2017.",
  },
  {
    "Ime":"Mikser",
    "Ocjena":"5",
    "Rang_cijena":"6",
    "Kapacitet":"500",
    "Datum_sljedeceg_eventa":"20.12.2017.",
  },
  {
    "Ime":"Revolucija 1764",
    "Ocjena":"4",
    "Rang_cijena":"8",
    "Kapacitet":"40",
    "Datum_sljedeceg_eventa":"31.12.2017.",
  },
  {
    "Ime":"Ort",
    "Ocjena":"4",
    "Rang_cijena":"4",
    "Kapacitet":"45",
    "Datum_sljedeceg_eventa":"24.12.2017.",
  },
  {
    "Ime":"Cinemas Sloga",
    "Ocjena":"2",
    "Rang_cijena":"4",
    "Kapacitet":"600",
    "Datum_sljedeceg_eventa":"24.12.2017.",
  },
  {
    "Ime":"Vatra",
    "Ocjena":"4",
    "Rang_cijena":"8",
    "Kapacitet":"80",
    "Datum_sljedeceg_eventa":"24.12.2017.",
  },
  {
    "Ime":"Woki",
    "Ocjena":"3",
    "Rang_cijena":"3",
    "Kapacitet":"100",
    "Datum_sljedeceg_eventa":"26.12.2017.",
  }
];

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
            tr.cells[3].appendChild(document.createTextNode(podaci[i].Rang_cijena));
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
                    var temp2 = tabela.rows[i].innerHTML;
                    tabela.rows[i].innerHTML = tabela.rows[j].innerHTML;
                    tabela.rows[j].innerHTML = temp2;
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

function dodaj(){
  var i = 9;
	var a = document.getElementById('ime').value;
	var b = document.getElementById('ocjena').value;
	var c = document.getElementById('rang').value;
	var d = document.getElementById('kapacitet').value;
	var e = document.getElementById('datum').value;
	if(a !== "" && b !== "" && c !== "" && d !== "" && e !== "") {
	tr = document.createElement('tr');
	for (var j = 0 ; j < 6; j++)
        tr.appendChild(document.createElement('td'));
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.className = "cb";
  var pom = i+1;
  checkbox.id = "cb"+pom;
  tr.cells[0].appendChild(checkbox);
  tr.cells[1].appendChild(document.createTextNode(a));
  tr.cells[2].appendChild(document.createTextNode(b));
  tr.cells[3].appendChild(document.createTextNode(c));
  tr.cells[4].appendChild(document.createTextNode(d));
  tr.cells[5].appendChild(document.createTextNode(e));
  $('#tabela').append(tr);
	}
	else {
		document.getElementById('ime').style.border = "1px solid red";
		document.getElementById('ocjena').style.border = "1px solid red";
		document.getElementById('rang').style.border = "1px solid red";
		document.getElementById('kapacitet').style.border = "1px solid red";
		document.getElementById('datum').style.border = "1px solid red";
	}
}
