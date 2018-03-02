import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import { Col, Row, Container } from 'semantic-ui-react';

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
                <Row>
                    <Col size="md-6">
                        <Dropzone onDrop={this.onDrop} accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png"
                                  multiple={false} onDropRejected={handleDropRejected}
                                  style={{"width": "100%", "height": "50%", "border": "1px solid black"}}>
                            <div>Try dropping a file here, or click to select a file to upload.</div>
                        </Dropzone>
                    </Col>
                    <Col size="md-6">
                        {preview &&
                        <img src={preview} alt="preview" height="50" width="50" style={imgStyle}/>
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FileUploader;