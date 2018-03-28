Meteor.methods({
    adiciona : function(obj){

        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
          }

        Tarefas.insert({nome:obj.nome, data: new Date(), usuario: this.userId});
    },
    remove : function(id){

        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
          }

        Tarefas.remove({_id: id, usuario: this.userId});
    }

});