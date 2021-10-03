import React,{useState} from 'react'
import { Document , Page} from 'react-pdf/dist/esm/entry.webpack';
import './css/pdf.css'

function DisplayPDF({pdf}) {
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null); 

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
        <div className="pdf_container">
            <Document
                className="doc"
                file={pdf}
                options={{workerSrc: "/pdf.worker.js"}}
                onLoadSuccess={onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} /> 
            </Document>
            {
                (pdf !== undefined) ? <p style={{"color": "white"}}>Page {pageNumber} of {numPages}</p> : ""
            }
            <div className="page-navigation">
                <button className="prev" onClick={() => setPageNumber(pageNumber - 1)}>Prev page</button>
                <button className="next" onClick={() => setPageNumber(pageNumber + 1)}>Next page</button>
            </div>
        </div>
    )
}

export default DisplayPDF
