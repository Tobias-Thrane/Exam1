fetch("https://uphere-space1.p.rapidapi.com/satellite/20580/location?units=imperial&lat=47.6484346&lng=122.374199", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "uphere-space1.p.rapidapi.com",
		"x-rapidapi-key": "3bc421dc94msh27dec8ff911b009p1f68b7jsn29cb18e97fd2"
	}
})
.then(response => response.json())
.then(data => {
	const noradId = document.getElementById("id");
	noradId.innerHTML = "We have a satellite with the norad id of " + data.norad_id;
    
    const coord = document.getElementById("coordinates");
	coord.innerHTML = `We have two coordinates. The first is Latitude ${data.coordinates[0]} and the second is Longitude ${data.coordinates[1]}. You can try and track it if you want from the Norad ID.`;
    
    const hight = document.getElementById("hight");
    hight.innerHTML = `We can see the height of the satellite. right now it's ${data.height} at . Try and wait and update to see if it has changed `;
    
    const speed = document.getElementById("speed");
    speed.innerHTML = `Lets track the speed. Right now its traveling at ${data.speed}mph.`;

    console.log(noradId);
	console.log(coordinates);
	console.log(data);
})

console.log('Ready');