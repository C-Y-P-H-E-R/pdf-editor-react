import React,{useState} from 'react'
import { Document , Page} from 'react-pdf/dist/esm/entry.webpack';

function DisplayPDF({pdf}) {
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null); 

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
        <div className="pdf_container">
            <Document 
                file={pdf}
                options={{workerSrc: "/pdf.worker.js"}}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} /> 
            </Document>
            <button className="next" onClick={() => setPageNumber(pageNumber + 1)}>Next page</button>
            <button className="prev" onClick={() => setPageNumber(pageNumber - 1)}>Prev page</button>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    )
}

export default DisplayPDF
