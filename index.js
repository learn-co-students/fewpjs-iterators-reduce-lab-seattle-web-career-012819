const batteryBatches = [1,2,3,4,5,6,7,3]

const totalBatteries = batteryBatches.reduce((total, element) => element + total, 0)
