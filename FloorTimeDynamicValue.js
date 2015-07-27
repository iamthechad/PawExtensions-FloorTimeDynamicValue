var FloorTimeDynamicValue = function() {

    this.offset = 0;

    this.evaluate = function() {
        var now = Date.now();
        var floored = Math.floor(now/60000)*60000;
        if (this.offset && this.offset !== 0) {
            floored += this.offset * 1000;
        }
        return floored;
    };

    this.title = function() {
        return "Floor Minute";
    };

    this.text = function() {
        var text =  "(Now";
        if (this.offset && this.offset !== 0) {
            if (this.offset > 0) {
                text += "+";
            }
            text += this.offset + "s";
        }
        text += ")";
        return text;
    };
};

FloorTimeDynamicValue.identifier = "com.megatome.PawExtensions.FloorTimeDynamicValue";
FloorTimeDynamicValue.title = "Time Floor Dynamic Value";
FloorTimeDynamicValue.inputs = [
    DynamicValueInput("offset", "Offset in seconds", "Number")
];

registerDynamicValueClass(FloorTimeDynamicValue);
