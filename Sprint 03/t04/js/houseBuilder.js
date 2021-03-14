function HouseBuilder(address, date, description, owner, size, roomCount, buildSpeed = 0.5) {
    this.houseBluprint.address = address;
    this.houseBluprint.date = date;
    this.houseBluprint.description = description;
    this.houseBluprint.owner = owner;
    this.houseBluprint.size = size;
    this.houseBluprint.roomCount = roomCount;
    this.houseBluprint.buildSpeed = buildSpeed;
}
HouseBuilder.prototype = {
    houseBluprint: {
        address: null,
        date: new Date(),
        description: "",
        owner: "",
        size: 0,
        roomCount: 0,
        buildSpeed: 0.5
    },
    getDaysToBuild: function () {
        return this.houseBluprint.roomCount / this.houseBluprint.buildSpeed;
    }

}
HouseBuilder.prototype.constructor = HouseBuilder;