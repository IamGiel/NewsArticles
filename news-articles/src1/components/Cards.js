import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const Cards = props =>
	<MuiThemeProvider>
		<h1>News Article Reactor</h1>
		<Card>

		<CardHeader
				title={props.results}
			subtitle="Subtitle"
		/>
			<CardActions>
				<FlatButton label="Action1" />
				<FlatButton label="Action2" />
			</CardActions>
		</Card>

	</MuiThemeProvider>

export default Cards;

