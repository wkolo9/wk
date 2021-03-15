import React, { Component } from 'react';
import CV from '../../../src/CV.pdf'
import Aux from './../../hoc/Aux1'
import './CvPDF.css';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class CvPDF extends Component {
    state = {
      numPages: null,
      pageNumber: 1,
      back: false,
      buttonName: 'Next page ➡️'
    }
  
    onDocumentLoad = ({ numPages }) => {
      this.setState({ numPages });
    }
    cvPageHandler = () =>{
        if(this.state.pageNumber === 1){
            this.setState({pageNumber: 2, buttonName: '⬅️ Previous page' })
        }
        if(this.state.pageNumber === 2 ){
            this.setState({pageNumber: 1, buttonName: 'Next page ➡️'})
        }
        

    }
  
    render() {
      const  pageNumber = this.state.pageNumber;
  
      return (
     <Aux>
        <div className="CvPDF"> 
          <Document className="CvPDFdoc"
            file={CV}
            onLoadSuccess={this.onDocumentLoad}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          </div>
          <button className="btnCV" onClick={this.cvPageHandler}>
            {this.state.buttonName}
            </button>
            <p></p>
            <button className="btnDownload">
              <a href='/CV_Kołodziej.pdf' download>Click here to download the CV</a>
            </button>
     </Aux>
      );
    }
  }
  export default CvPDF