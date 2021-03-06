import React, { useState } from "react";
import Map from "./Map";

function Brewery({ brewery: { name, street, state, city, postal_code, latitude, longitude } }) {
	const [showMap, setShowMap] = useState(false);

	/** Map components are not rendered until showMap is set to true.
	 * When location button for brewery is clicked upon, showMap is set
	 * to true and the according map for that brewery is rendered.
	 */

	function handleClick() {
		setShowMap(true);
		if (document.getElementById(name)) {
			document.getElementById(name).style.opacity = "100%";
			document.getElementById(name).style.zIndex = "2";
		}
	}

	return (
		<div>
			<div className="brewery">
				{name === "" ? <h3>Name not found</h3> : <h3>{name}</h3>}
				{street === "" ? (
					<p>Address not found</p>
				) : (
					<button id="location" value="hello" onClick={handleClick}>
						<span>{street}</span>
						&ensp;
						<i className="fas fa-map-marker-alt"></i>
					</button>
				)}
				{city === "" || state === "" || postal_code === "" ? (
					<p>Location not found</p>
				) : (
					<p>
						{city}, {state} {postal_code}
					</p>
				)}
			</div>
			{showMap && <Map name={name} lat={latitude} lng={longitude} address={street} />}
		</div>
	);
}

export default Brewery;
