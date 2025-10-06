function somme()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number (a) + Number (b);
    document.getElementById("resultat").value = c;
}
function différence ()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number (a) - Number (b);
    document.getElementById("resultat").value = c;
}
function produit()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number (a) * Number (b);
    document.getElementById("resultat").value = c;
}
function quotient()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number (a) / Number (b);
    document.getElementById("resultat").value = c;
}

function parité()
{
	var x = document.getElementById("t1").value
	if (x % 2 ==0){
    	document.getElementById("parite").value = " Pair "
	}
	else{
    	document.getElementById("parite").value = " Impair "
	}
}
function permuter()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = document.getElementById("t1").value;
    var a = document.getElementById("t2").value;
    document.getElementById("t1").value = a;
    document.getElementById("t2").value = c;
}
function réinitialiser()
{
    t1.value = "";
    t2.value = "";
    resultat.value = "";
    parite.value = "";
}