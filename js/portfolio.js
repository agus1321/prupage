function mostoFias(){
    document.getElementById('af').style.display = 'block';
    document.getElementById('bf').style.display = 'none';
    document.getElementById('ds').style.display = 'none';
}
function mostoBri(){
    document.getElementById('bf').style.display = 'block';
    document.getElementById('af').style.display = 'none';
    document.getElementById('ds').style.display = 'none';
}
function mostoSol(){
    document.getElementById('ds').style.display = 'block';
    document.getElementById('af').style.display = 'none';
    document.getElementById('bf').style.display = 'none';
}


/*----------------activacion de botones-----------------------*/



function activarButtFias(){
    document.getElementById('imgFias').style.boxShadow = '0px 0px 10px var(--btnPort)';
    document.getElementById('imgFias').style.opacity = '1';
    document.getElementById('imgBri').style.opacity = '0.4';
    document.getElementById('imgBri').style.boxShadow = 'none';
    document.getElementById('imgSol').style.opacity = '0.4';
    document.getElementById('imgSol').style.boxShadow = 'none';
}

function activarButtBri(){
    document.getElementById('imgBri').style.boxShadow = '0px 0px 10px var(--btnPort)';
    document.getElementById('imgBri').style.opacity = '1';
    document.getElementById('imgSol').style.opacity = '0.4';
    document.getElementById('imgSol').style.boxShadow = 'none';
    document.getElementById('imgFias').style.opacity = '0.4';
    document.getElementById('imgFias').style.boxShadow = 'none';
}

function activarButtSol(){
    document.getElementById('imgSol').style.boxShadow = '0px 0px 10px var(--btnPort)';
    document.getElementById('imgSol').style.opacity = '1';
    document.getElementById('imgBri').style.opacity = '0.4';
    document.getElementById('imgBri').style.boxShadow = 'none';
    document.getElementById('imgFias').style.opacity = '0.4';
    document.getElementById('imgFias').style.boxShadow = 'none';
}