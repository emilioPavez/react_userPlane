import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { CssBaseline } from '@material-ui/core';
import { Container } from 'reactstrap';

const myStyle = {
    padding: "30px"
}


export default function Wsp_up() {
    const [value, setValue] = React.useState('100');
    const handleChange = (event) => {
        setValue(event.target.value);


  };

  return (
      <React.Fragment>
          <CssBaseline>
              <Container maxWidth="sm">
                  <div style={myStyle}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">How many Mb to test?</FormLabel>
                            <RadioGroup aria-label="mb" name="mb1" value={value} onChange={handleChange}>
                            <FormControlLabel value="100" control={<Radio />} label="100 MB" />
                            <FormControlLabel value="500" control={<Radio />} label="500 MB" />
                            <FormControlLabel value="1" control={<Radio />} label="1 GB" />
                            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Work in progress)" />
                        </RadioGroup>
                </FormControl>
                </div>
              </Container>
          </CssBaseline>

      </React.Fragment>


  );
}
