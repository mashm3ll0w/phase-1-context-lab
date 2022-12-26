/* Your Code Here */
const createEmployeeRecord = array => {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

const createEmployeeRecords = array => {
  return array.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent (dateStamp){
  this.timeInEvents.push(
    {
      type: "TimeIn",
      hour: parseInt(dateStamp.split(" ")[1]),
      date: dateStamp.split(" ")[0]
    }
  )  
  return this
}

function createTimeOutEvent(dateStamp){
  this.timeOutEvents.push(
    {
      type: "TimeOut",
      hour: parseInt(dateStamp.split(" ")[1]),
      date: dateStamp.split(" ")[0]
    }
  )
  return this
}


function hoursWorkedOnDate(dateStamp){
  const [startTime, endTime] = [
      this.timeInEvents.find(time => {
      if (time.date === dateStamp){
        return time.hour
      }
    }),
    this.timeOutEvents.find(time => {
      if (time.date === dateStamp){
        return time.hour
      }
    })
  ]
  return (endTime.hour - startTime.hour) / 100
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



// Testing data
const charlesMash = createEmployeeRecord(["Charles", "Swaleh", "Cyber", 1200])
const timeInCharles = createTimeInEvent.call(charlesMash, "2022-12-23 0900")
const timeOutCharles = createTimeOutEvent.call(charlesMash, "2022-12-23 1900")
const timeInCharlesSat = createTimeInEvent.call(charlesMash, "2022-12-24 1000")
const timeOutCharlesSat = createTimeOutEvent.call(charlesMash, "2022-12-24 2200")

const swalehMash = createEmployeeRecord(["Swaleh", "Charles", "Cyber", 1400])
const timeInSwaleh = createTimeInEvent.call(swalehMash, "2022-12-23 0600")
const timeOutSwaleh = createTimeOutEvent.call(swalehMash, "2022-12-23 2300")
const timeInSwalehSat = createTimeInEvent.call(swalehMash, "2022-12-24 1100")
const timeOutSwalehSat = createTimeOutEvent.call(swalehMash, "2022-12-24 2300")

console.log(hoursWorkedOnDate.call(charlesMash, "2022-12-23"))