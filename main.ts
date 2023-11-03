let 左 = KSR030.RGB_LED().range(0, 1)
let 右 = KSR030.RGB_LED().range(1, 1)
basic.forever(function () {
    for (let 亮度 = 0; 亮度 <= 150; 亮度++) {
        左.setBrightness(亮度)
        右.setBrightness(225 - 亮度)
        左.showColor(neopixel.colors(NeoPixelColors.Red))
        右.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(10)
    }
    for (let 亮度 = 0; 亮度 <= 150; 亮度++) {
        右.setBrightness(亮度)
        左.setBrightness(225 - 亮度)
        左.showColor(neopixel.colors(NeoPixelColors.Red))
        右.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(10)
    }
})
