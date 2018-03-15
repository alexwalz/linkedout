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
        this.props.update()
    }

    render() {
        const {preview} = this.state;
        let imgStyle = {
            maxHeight: "125px",
            minHeight: "125px",
            maxWidth: "125px",
            minWidth: "125px",
            overflow: "hidden",
            borderRadius: "999px",
            border: "1px solid grey",
            padding: "2px",
            backgroundColor: "white"
        };
        return (
            <Container>
                  {/* <Grid>
                        <Grid.Row columns={1} textAlign="center" verticalAlign="middle">
                            <Grid.Column width={16}> */}
                                <Dropzone onDrop={this.onDrop} accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png"
                                        multiple={false} onDropRejected={handleDropRejected}
                                        style={{width: "110%", height: "100%", border: "2px solid white", padding: "8px", borderRadius: "5px"}}>
                                    <div style={{textAlign: "center"}}>Drop Your Image, Or Click To Upload</div>
                                </Dropzone>
                            {/* </Grid.Column> */}

                            {/* <Grid.Column width={7} textAlign="center">
                                {preview &&
                                <img src={preview} alt="preview" style={imgStyle}/>
                                }
                            </Grid.Column> */}
                        {/* </Grid.Row> */}
                    {/* </Grid> */}
            </Container>
        );
    }
}

export default FileUploader;