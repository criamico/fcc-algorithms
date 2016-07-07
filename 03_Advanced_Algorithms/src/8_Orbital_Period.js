/*Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.*/

function orbitalPeriod(arr) {
    // function that calculates the orbital period of an object around the earth
    function getEarthOrbitalP(a){
        var GM = 398600.4418;
        var earthRadius = 6367.4447;

        return Math.round(2 * Math.PI * Math.sqrt(Math.pow(a + earthRadius, 3)/GM));
    }

    // call the function on each element of the object, add the value and remove the avgAlt property
    arr.forEach(function(item){
        item.orbitalPeriod = getEarthOrbitalP(item.avgAlt);
        delete item.avgAlt;
    });

  return arr;
}
