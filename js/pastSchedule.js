let PAST_SCHEDULE = [
  {
    title: "Prepare To Start",
    interval: 10
  },{
    title: "First 25m Underwater Swim",
    interval: 180
  }, {
    title: "Second 25m Underwater Swim",
    interval: 180
  }, {
    title: "500m Freestyle Swim",
    interval: 607
  }, {
    title: "First Rest for 30 Minutes",
    interval: 1800
  }, {
    title: "1.5 Mile Run in under 10min10sec",
    interval: 610
  }, {
    title: "Second Rest for 10 Minutes",
    interval: 600
  }, {
    title: "Pull-ups",
    repetitions: 10,
    interval: 120
  }, {
    title: "Third Rest for 2 Minutes",
    interval: 120
  }, {
    title: "Sit-Ups",
    repetitions: 54,
    interval: 120
  }, {
    title: "Fourth Rest for 2 Minutes",
    repetitions: 54,
    interval: 120
  }, {
    title: "Push-ups",
    repetitions: 52,
    interval: 120
  }
]

var totalExerciseTimeInSeconds = 0;

PAST_SCHEDULE.forEach(function(phase) {
  totalExerciseTimeInSeconds += phase.interval;
  phase.timeMap = totalExerciseTimeInSeconds;
});

PAST_SCHEDULE.forEach(function(phase) {
  phase.timeMap = totalExerciseTimeInSeconds - phase.timeMap;
});

var workoutPhases = PAST_SCHEDULE.map((phase) => phase.timeMap);
workoutPhases.unshift(totalExerciseTimeInSeconds);
