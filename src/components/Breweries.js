import React from "react";
import NotFound from "./NotFound";
import Brewery from "./Brewery";
import { LoadScript } from "@react-google-maps/api";

/** Renders a brewery component for each brewery in the list.
 * Breweries must be encapsulated in a LoadScript component for multiple maps to work.
 */

function Breweries(props) {
	return (
		<div>
			{props.breweries.length !== undefined &&
				(props.breweries.length !== 0 ? (
					props.breweries.map((brewery, i) => (
						<LoadScript key={i} googleMapsApiKey={process.env.REACT_APP_API_KEY}>
							<Brewery brewery={brewery} />
						</LoadScript>
					))
				) : (
					<NotFound />
				))}
		</div>
	);
}

export default Breweries;
