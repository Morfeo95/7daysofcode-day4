let number = Math.floor(Math.random() * 10 + 1);
let contador = 1

function adivinador(){
    let respuesta = document.getElementById("numero").value;
    if (contador < 3){
        if(respuesta == number){
            let section = document.getElementById("felicitacion");
            section.innerHTML = "";
            p = document.createElement("p")
            p.id="felicidades"
            p.innerText="Felicidades haz acertado";
            section.appendChild(p);
        }

        else{
            if (respuesta < number ){
                alert("Error el numero secreto es mayor")
                document.getElementById("numero").value = "";
            }

            else{
                alert("Error el numero secreto es menor")
                document.getElementById("numero").value = "";
            }
            contador++;
        }
    }

    else{
        let section = document.getElementById("felicitacion");
        section.innerHTML = "";
        p = document.createElement("p")
        p.id="felicidades"
        p.innerText="Lo lamento, no haz acertado el numero secreto";
        section.appendChild(p);
    }
}

