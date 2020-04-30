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

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

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
        end: false,
        score: 100
    })
  };

  adjustScore = event => {
      const { score } = this.state

      if (event.target.checked) {
          this.setState({
              score: score - 1 
          })
      } else {
        this.setState({
            score: score + 1 
        })
      }

      console.log('I was triggered during render')      
  }


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
                <br></br>
                  The official not-a-bucket-list of the COVID-19 crisis. 
                  <br></br>
                </div>
              </Typography>
            
            <Typography variant="body1" gutterBottom>
              <div class="btext">
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="1. Got tested for COVID-19                    "
                labelPlacement="end"/></ListItem>

                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="2. Contracted COVID-19 "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="3. Learned the Renegade
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="4. Downloaded TikTok
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="5. Posted a TikTok
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="6. Danced to “I’m a savage: classy, bougie, rachet”
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="7. Spent over 10 hours in one day on TikTok
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="8. Sent or received a coronavirus-themed pickup line
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="9. Downloaded a dating app
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="10. Changed your location on a dating app to see M.P.S.
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="11. Clicked “Ignore Limit” for screen time at least once
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="12. Averaged over 10 hours a day of screen time 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="13. Averaged over 15 hours a day of screen time
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="14. Did at least 1 Instagram Story challenge
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="15. Did at least 10 Instagram Story challenges
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="16. Pretended to have “extenuating circumstances” 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="17. Skipped a lecture or meeting
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="18. 'Forgot' to do an assignment
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="19. 'Forgot' to wash hands for over a day
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="20. Contracted a quarantine crush 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="21. Confessed feelings for a quarantine crush
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="22. Corona-canceled a crush
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="23. Hoarded toilet paper

                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="24. Stole materials from a hospital
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="25. Tried to watch a Trump briefing
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="26. Tried to inject oneself with disinfectants after watching a Trump briefing
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="27. Sexually aroused by Dr. Fauci 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="28. Witnessed racial profiling 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="29. Cut your own hair
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="30. Made dalgona coffee
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="31. Baked bread 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="32. Had a 5+ hour video call
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="33. Had an at-home photoshoot
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="34. Went to bed after 5 a.m. local time 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="35. Did not shower for over a week
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="36. Did not go outside for over a week
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="37. Did not do wear real pants for over a week
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="38. Averaged less than 1000 steps a day for a week
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="39. Sought out mental health-related resources 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="40. Did not social distance"
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="41. Played chicken to see who would go to the other side of the sidewalk with strangers
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="42. Gained 10 lbs
"
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="43. Gained COVID-19 lbs
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="44. Did not wear a mask outside
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="45. Questioned by police for being outside
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="46. Fined by police for being outside
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="47. Attended a social gathering or corona party 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="48. Attended a social gathering or corona party and posted about it
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="49. Attended a social gathering or corona party while diagnosed with COVID-19
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="50. Broke a shelter-in-place order
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="51. Protested a shelter-in-place order
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="52. Tried Chloe Ting workouts; quit after a week
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="53. Binged at least 1 season on Netflix
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="54. Binged at least 10 seasons total on Netflix 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="55.Binged at least 100 seasons total on Netflix 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="56. Binged Tiger King; thought about feeding living mates to tigers
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="57. Binged Love is Blind or Too Hot to Handle
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="58. Played Animal Crossing
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="59. Flamed your jungler in League of Legends
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="60. Played 500+ games of League of Legends during quarantine 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="61. Ordered an Uber or Lyft
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="62. Ordered food delivery to be left at the door
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="63. Ordered from Amazon 5+ times in one day
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="64. Lost over $10,000 on Robinhood
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="65. Bet against the “money go brrr” machine; i.e., bought puts or shorted the market
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="66. Bought oil futures"
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="67. Did not wear pants during a Zoom call 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="68. Woke up to an empty Zoom meeting
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="69. Pinned a crush’s video during a Zoom call
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="70. Attended a Zoom party
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="71.  Used substances to get through a Zoom meeting
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="72. Celebrated 4/20 on Zoom"
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="73. Sent explicit private chat messages in a public channel on Zoom                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="74. Skinny-zoomed; i.e., left the camera on while changing during a Zoom call
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="75. Engaged in an illicit activity during a Zoom call
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="76. Zoom Bombed "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="77. Engaged in a sexual act during a Zoom call
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="78. Simped "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="79. Texted an ex
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="80. Met up with an ex
                    "
                labelPlacement="end"/></ListItem>
            
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="81. Quarantined with an ex
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="82. Thanked Tim Cook that FaceTime is secure during a call
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="83. Lost an internship or summer opportunity
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="84. Posted on LinkedIn about 83
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="85. Lost a job
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="86. Lost a friend 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="87. Lost a family member
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="88. Sent or received illicit photos
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="89. Accepted a strange Instagram DM solicitation
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="90. Experimented with anime
 "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="91. Experimented with toys 
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="92. Experimented with pillows
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="93. Experimented with safety
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="94. Experimented with family
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="95. Experimented with objects that did not use to look so thicc
                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="96. Corona-conception                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="97. Abused Pornhub premium                    "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="98. Enjoyed being alone more than COVID-19 in one day"
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="99. Joined the COVID-19 times in a day club "
                labelPlacement="end"/></ListItem>
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="100. Ate a bat "
                labelPlacement="end"/></ListItem>
                
                
    

                
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
        
            <Typography variant="h5" align="center">
              <div class="htext">
                <br></br>
                Your score:
              </div>
            </Typography>
            <br></br>
            <Typography variant="h3" align="center">
              <div class="htext" class="finalscore">
                {this.state.score}
                <br></br>
              </div>
            </Typography>
            <br></br>

            <Button variant="contained" color="primary" onClick={() => {navigator.clipboard.writeText("https://quarantinepuritytest.com")}}>
               Copy URL
            </Button>
            
            <br></br>
            <br></br>

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
