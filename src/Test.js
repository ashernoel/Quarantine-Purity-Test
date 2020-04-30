import React from 'react';

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


class Test extends React.Component {
    
  state = {
    score: 100,
    start: true,
    end: false,
  }

  handleEnd = () => {
    this.setState({
        start: false,
        end: true
    })
  };

  handleStart = () => {
    this.setState({
        start: true,
        end: false
    })
  };


  render() {
    const {start, end} = this.state;

    if (start) {
      return (

        <div className='intro'>
        <Container>
          <Box m={1}>
            
            <Paper style={{ padding: 14, width: "100%", maxWidth: 600, margin: "12px auto" }}>
            
            <Typography variant="h4" align="center">
              <div class="htext">
                Quarantine Purity Test
              </div>
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              <div class="btext">
                <ol id="questionlist">
                    <li> <FormLabel component="legend">This is not a bucket list</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="Tested for COVID-19 "
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="Contracted COVID-19 "
                        labelPlacement="end"
                        />
                    </FormGroup>
                    
                    </li>
                    <li> <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="Tried to COVID-19 "
                        labelPlacement="end"
                        />
     
                    </li>
                    <li><FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="Tried to COVID-19 "
                        labelPlacement="end"
                        />
              
                    </li>
                    <li> <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="Tried to COVID-19 "
                        labelPlacement="end"
                        />
                    </li>
                </ol>

    

                
              </div>

            </Typography>

            <Button variant="contained" color="primary" onClick={this.handleEnd}>
               Finish
            </Button>

            </Paper>
          </Box>
        </Container>
        </div>
     
     )

        
    }

    if (end) {
      return (
        <div className='intro'>
        <Container>
          <Box m={1}>
            
            <Paper style={{ padding: 14, width: "100%", maxWidth: 600, margin: "12px auto" }}>
            
            <Typography variant="h4" align="center">
              <div class="htext">
                Quarantine Purity Test
              </div>
            </Typography>

            <Typography variant="h3" align="center">
              <div class="htext">
                Your score:
              </div>
            </Typography>

            <Typography variant="h3" align="center">
              <div class="htext">
                {this.state.score}
              </div>
            </Typography>

            <Button variant="contained" color="primary" onClick={this.handleStart}>
               Retry
            </Button>
            </Paper>
            
          </Box>
        </Container>
        </div>
      )
    }

  }
}

export default Test;
