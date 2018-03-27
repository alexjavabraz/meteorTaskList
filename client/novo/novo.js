/**
 * 
 */
Template.novo.events({
    "submit form": function(e, template){
        e.preventDefault();

        var input = $("#tarefa");
        var _nome  = input.val();

        if(_nome == null || _nome == "")
            return;


        //Tarefas.insert({nome: _nome, data: new Date()});
        Meteor.call("adiciona", {nome: _nome, data: new Date()});
        input.val("");
    }
});