let urgenteFill = document.getElementsByClassName('emergency-tasks');
let urgenteTitulo = document.querySelectorAll('section h3');
let notUrgenteFill = document.getElementsByClassName('no-emergency-tasks');

for (i in urgenteFill){
    urgenteFill[i].style.backgroundColor = 'salmon';
    urgenteTitulo[i].style.backgroundColor = 'red';
    notUrgenteFill[i].style.backgroundColor = 'yellow';
}


urgenteTitulo.style.backgroundColor = 'red';