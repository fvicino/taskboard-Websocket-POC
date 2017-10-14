var _inheritProtos = [];

Function.prototype.inherits = function (parent) {
    var Me = this;
    if (typeof _inheritProtos == 'undefined') _inheritProtos = [];
    if (parent) {
        var parentInst = null;
        //check if an instance of the parent exists
        $.each(_inheritProtos, function (i, obj) {
            //if instance of parent than use that as the proto
            if (obj instanceof parent) {
                parentInst = obj;
            }
        });

        if (!parentInst) {
            //no existing instance so use a new instance
            parentInst = new parent();
            //add this instance to the list
            _inheritProtos.push(parentInst);
        }

        Me.prototype = parentInst
    }
};
