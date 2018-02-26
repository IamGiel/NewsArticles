import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "../Styler/Styler.css";

const CardExampleWithAvatar = () => (
	<MuiThemeProvider>
		<div className="length">
  		<Card>
				<div className="ArticleHeader">
  		  	<CardHeader
  		      title="URL Avatar"
  		      subtitle="Subtitle"
  		      avatar="images/jsa-128.jpg"
  		  	/>
				</div>
  			<CardMedia
  		      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
  		  >
					<img src="http://www.oceansurf.com/uploads/9/8/6/9/98696462/img-1794-copy_1_orig.jpg" alt="" />
  		</CardMedia>
  		<CardTitle title="Card title" subtitle="Card subtitle" />
  		<CardText>
  		  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  		  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
  		  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
  		  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
  		</CardText>
  		  <CardActions>
  		    <FlatButton label="Save" />
  		    <FlatButton label="Delete" />
  		  </CardActions>
  		</Card>
		</div>
	</MuiThemeProvider>
);

export default CardExampleWithAvatar;