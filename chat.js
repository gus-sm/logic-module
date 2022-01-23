module.exports = function createChat(){
    const state = [];

    const observers = [];

    function subscribe(observerFunction){
        observers.push(observerFunction);
    }

    function notifyAll(command){
        console.log("notificando com o tipo: "+ command.eType)
        for(const observersFunction of observers)
            observersFunction(command);
    }

    function addMessage(user_id, message){
        console.log(message);
        if(message !== "" && message !== undefined){
            state.push({
                userId: user_id,
                message: message
            });
    
            notifyAll({
                eType: 'message-has-been-received',
                userId: user_id,
                message: message
            });
        }

    }

    function setState(newState){
        Object.assign(state, newState);
    }

    return{
        state,
        subscribe,
        setState,
        addMessage
    }
}