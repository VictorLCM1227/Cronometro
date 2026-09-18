

function start() {

    let centesimos = 0
    let segundos = 0
    let minutos = 0

    const milesimos = setInterval(() => {
        centesimos++
        if (centesimos == 100) {
            centesimos = 0
            segundos ++
        }
        if (segundos == 60) {
            segundos = 0
            minutos ++
        }
    },
    100
    )
        
    
}

