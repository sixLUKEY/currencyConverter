// const currencyAmount = document.getElementById('amount').value
const convertButton = document.getElementById('convert')
convertButton.addEventListener('click', () =>{
    // convert( 525, 'zar', 'usd')
    const amount = document.getElementById('amount').value
    const currency = document.getElementById('currencySelector').value
    const convertedTo = document.getElementById('convertedTo').value
    convert( amount, currency, convertedTo )
})

const zar = {
    dollarIndex: 0.052,
    poundIndex: 0.042,
    euroIndex: 0.048,
}

const usd = {
    randIndex: 19.38,
    poundIndex: 0.81,
    euroIndex: 0.93,
}

const gbp = {
    randIndex: 24.03,
    dollarIndex: 1.24,
    euroIndex: 1.16,
}

const eur = {
    randIndex: 20.73,
    dollarIndex: 1.07,
    poundIndex: 0.86,
}

function convert( amount , currency , convertedTo ){
    const outputBox = document.getElementById('output1')

    if ( currency == 'zar'){
        if ( convertedTo == 'usd'){
            outputBox.innerText = `R` + (zar.dollarIndex * amount).toFixed(2)
        } else if ( convertedTo == 'gbp'){
            outputBox.innerText = `R` + (zar.poundIndex * amount).toFixed(2)
        } else if ( convertedTo == 'eur'){
            outputBox.innerText = `R` + (zar.euroIndex * amount).toFixed(2)
        } else {
            outputBox.innerText = `Input a valid conversion`
        }
    }   else if ( currency == 'usd'){
        if ( convertedTo == 'zar'){
            outputBox.innerText = `$` + (usd.randIndex * amount).toFixed(2)
        } else if ( convertedTo == 'gbp'){
            outputBox.innerText = `$` + (usd.poundIndex * amount).toFixed(2)
        } else if ( convertedTo == 'eur'){
            outputBox.innerText = `$` + (usd.euroIndex * amount).toFixed(2)
        } else {
            outputBox.innerText = `Input a valid conversion`
        }
    } else if ( currency == 'gbp'){
        if ( convertedTo == 'zar'){
            outputBox.innerText = `£` + (gbp.randIndex * amount).toFixed(2)
        } else if ( convertedTo == 'usd'){
            outputBox.innerText = `£` + (gbp.dollarIndex * amount).toFixed(2)
        } else if ( convertedTo == 'eur'){
            outputBox.innerText = `£` + (gbp.euroIndex * amount).toFixed(2)
        } else {
            outputBox.innerText = `Input a valid conversion`
        }
    } else if ( currency == 'eur'){
        if ( convertedTo == 'zar'){
            outputBox.innerText =  `€` + (eur.randIndex * amount).toFixed(2)
        } else if ( convertedTo == 'usd'){
            outputBox.innerText =  `€` + (eur.dollarIndex * amount).toFixed(2)
        } else if ( convertedTo == 'gbp'){
            outputBox.innerText =  `€` + (eur.poundIndex * amount).toFixed(2)
        } else {
            outputBox.innerText = `Input a valid conversion`
        }
    } else {
        outputBox.innerText = ` Please input a valid currency` 
    }
}