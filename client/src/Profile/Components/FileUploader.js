import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import { Grid, Container } from 'semantic-ui-react';

const handleDropRejected = (...args) => console.log('reject', args);

class FileUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: null
        };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(files) {
        console.log(".... on Drop...");
        this.setState(files[0]);
        this.props.imageFile(files[0]);
    }

    render() {
        const {preview} = this.state;
        let imgStyle = {
            float: 'left'
        };
        return (
            <Container>
                  <Grid>
                        <Grid.Row columns={2} textAlign="center">
                            <Grid.Column width={9}>
                                <Dropzone onDrop={this.onDrop} accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png"
                                        multiple={false} onDropRejected={handleDropRejected}
                                        style={{width: "100%", height: "100%", border: "2px solid white", padding: "3px", borderRadius: "5px"}}>
                                    <div>Drop Your Image, Or Click To Upload</div>
                                </Dropzone>
                            </Grid.Column>

                            <Grid.Column width={7} textAlign="center">
                                {preview &&
                                <img src={preview} alt="preview" height="150" width="150" style={imgStyle}/>
                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Container>
        );
    }
}

export default FileUploader;