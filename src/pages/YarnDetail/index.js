import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Nav from '../../components/layout/Nav';
import YarnDash from '../../assets/img/yarnDash.png';
import MobileSample from '../../assets/img/mobile-sample.PNG';
import RegularUp from '../../assets/img/regular-upload.gif';
import MissingChar from '../../assets/img/missing-characters.gif';
import ScreenSize from '../../assets/img/Screen-size.gif';


require ('./style.css');
// {/* <a href="https://www.freepik.com/free-photos-vectors/tree">Tree vector created by macrovector - www.freepik.com</a> */}

const YarnDetail = () => {

    return (
        <wrapper>
            <Nav/>
            <Container id="yarnDetail-container" maxWidth="xl">
                    <div className="yarnDetailContent">
                        <h1 style={{textAlign: 'center'}}>Yarn Admin Enhancements</h1>
                        <h2 style={{textAlign: 'center'}}>Mobile Preview</h2>
                        <h3>Client</h3>
                        <p>Mammoth Media</p>
                        <h3>Concept</h3>
                        <p>This project focused on a WYSIWYG module of a larger admin interface redesign. The content team needs to have a better way to preview their content before submitting to the database. Errors such as missing characters, incorrect character alignments, and chat bubble colors were difficult to detect and correct before going live. 
                        An example of the previous version of the preview is shown below. As you can see, the characters do not have any of their pre-selected stylings visible and just appear as a block of text on a black background.
                        </p>
                        <h3>Mobile Preview - before redesign</h3>
                        <img style={{width: '100%'}} src={YarnDash} />
                        <p>Below is an example of what the content looks like in the mobile app. This is what the content team wants to be able to preview in the admin interface. 
                        </p>
                        <p><strong>Content in mobile app</strong></p>
                        <img style={{width: '40%'}} src={MobileSample} />
                        <h3>Redesign</h3>
                        <p><strong>Mobile Preview</strong></p>
                        <p>We have been able to build a much better preview of what the uploaded csv contents will look like in the mobile app. The version we built pulls in the character styling information associated with that story and applies it to the appropriate character to generate the preview.
                        </p>
                        <img style={{width: '100%'}} src={RegularUp} />
                        <p><strong>Missing Characters</strong></p>
                        <p>We have also improved the missing character notification. The previous version would only notify the user of the first missing character it would find in the csv whereas our notification lists all the missing characters at once so that the content team knows exactly which ones and how many characters need to be added to the chat story in one go. </p>
                        <img style={{width: '100%'}} src={MissingChar} />
                        <p><strong>Episode Preview Screen</strong></p>
                        <p>Additionally, we created a dropdown to change the screen size of the preview based on different phone types. </p>
                        <img style={{width: '100%'}} src={ScreenSize} />
                        <h3>Next Steps</h3>
                        <ul>
                            <li>Fully implement image upload functionality and add image authentication</li>
                            <li>Complete the option to create/edit a new character from this page if a character was missing from the story so that user does not need to navigate away from the page</li>
                            <li>Add scheduling functionality based on the needs of the content management team</li>
                            <li>Implement functionality to submit the episode to the database</li>
                            <li>Continue working with the engineering department to assist with re-designing the entire admin interface</li>
                            <li>Potentially eliminate CSV from process</li>
                            <li>Convert to React</li>
                        </ul>
                        <h3>Contributors</h3>
                            <ul>
                                <li>Peter Rydell @prydell</li>
                                <li>Stephanie Aurelio @stephmarie17</li>
                                <li>Alexandra Jackson @alexandramj92</li>
                            </ul>
                    </div>
            </Container>
        </wrapper>
    )
}

export default YarnDetail;
