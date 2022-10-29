let arrStart = document.querySelector(".arrStart");
let arrCountInput = document.getElementById("arrCountInput");
let userInput = document.querySelector(".userInput")

arrStart.addEventListener("click", function () {
    if (arrCountInput.value > 10 || arrCountInput.value < 0 || arrCountInput.value % 1 != 0) {
        alert("Massivin Elementlerinin sayi 1-10 ve tam reqemlerden ibaret olmasi lazimdi. \n Zəhmət olmasa yeniden təkrar edin")
    } else {
        let sortAlgContainer = document.querySelector(".sortAlgContainer");
        let sortAppContainer = document.querySelector(".sortAppContainer");
        sortAlgContainer.style.animation = "exitContainer 1s"
        sortAlgContainer.style.left = "100%"
        sortAppContainer.style.animation = "entryContainer 1s"
        sortAppContainer.style.left = "0%"
        userInput.innerHTML = arrCountInput.value + " - ";

        let x = arrCountInput.value;
        let y = parseInt(x);
        // console.log(typeof y);
        console.log(y)
        
        for (let i = 0; i < y; i++) {
            let creteInputEl = document.createElement("input")
            creteInputEl.type = "number"
            creteInputEl.value = "1"
            creteInputEl.className = "userEntereInputValue"
            document.querySelector(".userEntered").appendChild(creteInputEl)
        }
        let smallToBigBtn = document.querySelector(".smallToBigBtn");
        let bigToSmallBtn = document.querySelector(".bigToSmallBtn");
        let arr = new Array();
        let userEntereInputValue = document.querySelectorAll(".userEntereInputValue");
        smallToBigBtn.addEventListener("click", function () {
            for (let g = 0; g < userEntereInputValue.length; g++) {
                let m = parseFloat(userEntereInputValue[g].value)
                arr.push(m)

                arr.sort(function (a, b) {
                    return a - b;
                })
                // console.log(arr)
            }
            for (let v=0; v<arr.length; v++){
                let resultSort = document.querySelector(".resultSort");
                let input = document.createElement("input");
                input.value = `${arr[v]}`
                resultSort.appendChild(input);
            }
        })
        bigToSmallBtn.addEventListener("click", function () {
            for (let v = 0; v < userEntereInputValue.length; v++) {
                let m = parseFloat(userEntereInputValue[v].value)
                arr.push(m)
                arr.sort(function (a, b) {
                    return b - a;
                })
                // console.log(arr)
            }
            for (let v=0; v<arr.length; v++){
                let resultSort = document.querySelector(".resultSort");
                let input = document.createElement("input");
                input.value = `${arr[v]}`
                resultSort.appendChild(input);
                
            }
        })
    }
})