function change() {
    document.getElementById("rangeValue1").innerHTML = document.getElementById("luminosity").value
    document.getElementById("rangeValue2").innerHTML = document.getElementById("temperature").value
    L = document.getElementById("rangeValue1").innerText
    T = document.getElementById("rangeValue2").innerText
    E = 5.67 * (1 / 100000000) * (T ** 4)
    R = Math.sqrt(L * 3.846 * (10 ** 26) / (4 * Math.PI * (5.67 * (1 / 100000000)) * (T ** 4)))
console.log(T**4)
    document.getElementById("orb").style.width = R * 0.000000001 + "px"
    document.getElementById("orb").style.height = R * 0.000000001 + "px"

    document.getElementById("lum").innerText = "광도(L☉): " + L
    document.getElementById("temp").innerText = "표면 온도: " + T + " K"
    document.getElementById("energy").innerText = "단위 면적당 방출하는 에너지양: " + E + " W/m²"
    document.getElementById("radius").innerText = "별의 반지름: " + R + "km"
}