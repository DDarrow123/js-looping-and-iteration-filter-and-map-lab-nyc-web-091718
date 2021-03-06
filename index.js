// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
return drivers.filter(function (driver) {if (driver.revenue > revenue) {return driver}})
}

function driverNamesWithRevenueOver(drivers, revenue) {
return driversWithRevenueOver(drivers, revenue).map(function (driver) {return driver.name})
}


function exactMatch(drivers, obj) {
  return drivers.filter(function (driver) { return driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]] })
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function (driver) {
    return driver.name})
}
