import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import "../Styler/Styler.css";

const style = {
    marginLeft: 20,
};


const DividerExampleForm = () => (

<MuiThemeProvider>
  <div className="GelStyle">
  <Paper zDepth={2}>
    <TextField hintText="Title Search" style={style} underlineShow={false} />
    <Divider />
    <div className="length">
        <DatePicker hintText="Open to Year" openToYearSelection={true} />
    </div>
    <Divider />
    <div className="length">
        <DatePicker hintText="Open to Year" openToYearSelection={true} />
    </div>
    <Divider />
    <RaisedButton label="Search" fullWidth={true} />
  </Paper>
  </div>
</MuiThemeProvider>


);

export default DividerExampleForm;

