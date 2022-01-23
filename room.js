module.exports = function createRoom() {

    const state = {
        users: []
    }

    const observers = [];

    function subscribe(observerFunction){
        observers.push(observerFunction);
    }

    function notifyAll(command){
        console.log("notificando com o tipo: "+ command.eType)
        for(const observersFunction of observers)
            observersFunction(command);

    }

    function setState(newState){
        Object.assign(state, newState);
    }

    function addUser(user_id){

        state.users.push(user_id)
        notifyAll({
            eType: 'add-user',
            userId: user_id
        })
    }

    function removeUser(user_id){
        const index = state.users.indexOf(user_id);
        state.users.splice(index,1);
        notifyAll({
            eType: 'remove-user',
            userId: user_id
        })
        
    }

    return {
        state,
        setState,
        addUser,
        removeUser,
        subscribe
    };

}