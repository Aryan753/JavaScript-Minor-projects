let colorpara = document.getElementById("gen");
        colorpara.textContent = "#FFFFFF";

 document.getElementById("generate").onclick = function () {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
            colorpara.textContent = randomColor;
        };

document.querySelector("h1").style.backgroundColor=""      
