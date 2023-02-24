document.addEventListener("DOMContentLoaded",
    function(e){


        let change = document.querySelector("#change")
        change.addEventListener("change",
            function(e) {
                console.log(e.target.value)
            }
        )

        let input = document.querySelector("#input")
        input.addEventListener("input",
            function(e) {
                console.log(e.target.value)
            }
        )
    }
)