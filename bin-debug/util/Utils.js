function hitTestPosition(obj1, obj2) {
    var rect1 = obj1.getBounds();
    var rect2 = obj2.getBounds();
    rect1.x = obj1.x;
    rect1.y = obj1.y;
    rect2.x = obj2.x;
    rect2.y = obj2.y;
    return rect1.intersects(rect2);
}
//# sourceMappingURL=Utils.js.map