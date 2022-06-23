// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {

    const takeoff = document.getElementById("takeoff")
    const landing = document.getElementById("landing")
    const missionAbort = document.getElementById("missionAbort")
    const flightStatus = document.getElementById("flightStatus")
    const flightDisplay = document.getElementById("flightDisplay")
    const shuttleBackground = document.getElementById("shuttleBackground")
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    const up = document.getElementById("up")
    const down = document.getElementById("down")
    const left = document.getElementById("left")
    const right = document.getElementById("right")
    const rocket = document.getElementById("rocket")

    takeoff.addEventListener("click", function () {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue"
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000
        }
    })
    landing.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green"
        spaceShuttleHeight.innerHTML = "0"
    })
    missionAbort.addEventListener("click", function () {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green"
            spaceShuttleHeight.innerHTML = "0"
        }
    })
})