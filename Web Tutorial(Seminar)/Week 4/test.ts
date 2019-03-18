// Defining an interface in ts
interface Point {
    x: number; // specifying the data type
    y: number; // specifying the data type
}

// function args type to be mentioned and return type is infered if not mentioned
function distance(a: Point, b: Point): number {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

// class definition in typescript
class Cow {
    // private var is accesible only inside the class
    private name = 'Ashwin';
    // Makesound method can be accessed anywhere
    public MakeSound() {
        console.log('Moo!');
    }
}

export { Cow, distance, Point }; // allows exporting of multiple things in ts