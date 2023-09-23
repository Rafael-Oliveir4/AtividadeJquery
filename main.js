$(document).ready(function() {
    $("#nova-tarefa").keypress(function(event) {
        if (event.which === 13) { 
            adicionarTarefa();
        }
    });

    $("#adicionar-tarefa").click(function() {
        adicionarTarefa();
    });

    function adicionarTarefa() {
        var taskText = $("#nova-tarefa").val();
        if (taskText.trim() !== "") {
            var listItem = $("<li></li>").text(taskText);
            
            listItem.click(function() {
                $(this).toggleClass("completed");
            });
            
            var deleteButton = $("<button></button>").addClass("delete").text("Excluir");

            listItem.append(deleteButton);
            $("#lista-de-tarefas").append(listItem);
            $("#nova-tarefa").val("");
        }
    }

    $("#lista-de-tarefas").on("click", ".delete", function() {
        $(this).parent().remove();
    });
});
