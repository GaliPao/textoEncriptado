const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");


function btnEncriptar () {    
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";

}

function btnDesencriptar () {    
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    
}

btnCopiar.addEventListener("click", function() {
    mensaje.select();
    document.execCommand("copy");
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Se ha copiado el texto",
        showConfirmButton: false,
        timer: 1000
      });;
});

 function encriptar (StringEncriptado) {
    //Arreglo de arreglos
    let arrCode = [ 
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
     ];
     StringEncriptado = StringEncriptado.toLowerCase();

     for (let i = 0; i < arrCode.length; i++) {
        if (StringEncriptado.includes(arrCode[i][0])) {
            StringEncriptado = StringEncriptado.replaceAll(arrCode[i][0], arrCode[i][1])

        }
     }
     return StringEncriptado;

 }

 function desencriptar (StringDesencriptado) {
    //Arreglo de arreglos
    let arrCode = [ 
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
     ];
     StringDesencriptado = StringDesencriptado.toLowerCase();

     for (let i = 0; i < arrCode.length; i++) {
        if (StringDesencriptado.includes(arrCode[i][1])) {
            StringDesencriptado = StringDesencriptado.replaceAll(arrCode[i][1], arrCode[i][0])

        }
     }
     return StringDesencriptado;

 }

