

const inputBtn = document.getElementById("input-btn")
const convertBtn = document.getElementById("convert-btn")
const convertingLength = document.getElementById("length")
const convertingVolume = document.getElementById("volume")
const convertingMass = document.getElementById("mass")

convertBtn.addEventListener("click", function() {
    let convertedFeet = (Number(inputBtn.value) * 3.281).toFixed(3)
    let convertedMeter = (Number(inputBtn.value) * 0.301).toFixed(3)
    convertingLength.innerHTML = `<h3>Length (Meter/Feet)</h3> <br>
    ${inputBtn.value} meteres = ${convertedFeet} feet | ${inputBtn.value} feet = ${convertedMeter} meters`

    let convertedGallons = (Number(inputBtn.value) * 0.264).toFixed(3)
    let convertedLitres = (Number(inputBtn.value) * 3.785).toFixed(3)
    convertingVolume.innerHTML = `<h3>Volume (Liters/Gallons)</h3> <br>
    ${inputBtn.value} liters = ${convertedGallons} gallons | ${inputBtn.value} gallons = ${convertedLitres} litres`

    let convertedKilograms = (Number(inputBtn.value) * 2.204).toFixed(3)
    let convertedPounds = (Number(inputBtn.value) * 0.453).toFixed(3)
    convertingMass.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3> <br>
    ${inputBtn.value} kilograms = ${convertedKilograms} pounds | ${inputBtn.value} pounds = ${convertedPounds} kilogrmas`
})