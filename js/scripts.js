//business logic
function ToDo(task, due, priority) {
  this.task = task;
  this.due = due;
  this.priority = priority;
}

// ToDo.prototype.everythingList = function() {
//   return this.task + this.due + this.priority;
// }

//UI logic
$(document).ready(function() {
  $("form#new-to-do").submit(function(event) {
    event.preventDefault();

    var inputtedTask = ($("input#new-task").val()).toUpperCase();
    var inputtedDue = $("input#new-due-date").val();
    var inputtedPriority = $("select#new-priority").val();

    var newToDo = new ToDo(inputtedTask, inputtedDue, inputtedPriority);

    $(".output").append("<li><span class='tasks'>" + newToDo.task + "</span></li>")


    $("#task").text(newToDo.task);
    $("#due").text(newToDo.due);
    $("#priority").text(newToDo.priority);
    $(".well").show();

    $("input#new-task").val("");
    $("input#due-date").val("");
    $("select#priority").val("");



  });
});
