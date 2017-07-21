//business logic
function ToDo(task, due, priority) {
  this.task = task;
  this.due = due;
  this.priority = priority;
}

ToDo.prototype.toDoDetails = function() {
  return this.task + " by " + this.due;
}

// ToDo.prototype.completed = function() {
//   delete newToDo.task;
//   delete newToDo.due;
//   delete newToDo.priority;
// }
var newToDo;
//UI logic
$(document).ready(function() {
  $("form#new-to-do").submit(function(event) {
    event.preventDefault();

    var inputtedTask = ($("input#new-task").val()).toUpperCase();
    var inputtedDue = $("input#new-due-date").val();
    var inputtedPriority = $("select#new-priority").val();

    newToDo = new ToDo(inputtedTask, inputtedDue, inputtedPriority);

    $(".output").append("<li><span class='tasks'>" + newToDo.task + "</span></li>")

    $(".tasks").last().click(function() {
      $(".well").show();
      $("#task").text(newToDo.toDoDetails());
      $("#due").text(newToDo.due);
      $("#priority").text(newToDo.priority);
    });

      // $("#completed").click(function() {
      //   debugger;
      //   newToDo.hide();
      // });


    $("input#new-task").val("");
    $("input#due-date").val("");
    $("select#priority").val("");
  });
});
