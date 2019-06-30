import React, { Component } from 'react';
import './Modal.css';



// modal component
export default class Modal extends Component {
    renderHeader = () => {
        const { useModalHeader, modalTitle, modalClosed } = this.props;
        const headerMarkup = (
            <div className="modal-header">
                <h4 className="modal-title">{modalTitle}</h4>
                <button className="close-modal" onClick={modalClosed}>
                    ×
                </button>
            </div>
        );

        if (typeof useModalHeader !== "undefined") {
            return useModalHeader && headerMarkup;
        } else {
            return headerMarkup;
        }
    };

    renderFooter = () => {
        const {
            useModalFooter,
            modalClosed,
            footerBtnText,
            footerBtnListener
        } = this.props;

        const footerMarkup = (
            <div className="modal-footer">
                <button
                    className="close-modal"
                    onClick={() => {
                        if (footerBtnListener) {
                            footerBtnListener();
                        }
                        modalClosed();
                    }}
                >
                    {footerBtnText ? footerBtnText : "close"}
                </button>
            </div>
        );

        if (typeof useModalFooter !== "undefined") {
            return useModalFooter && footerMarkup;
        } else {
            return footerMarkup;
        }
    };

    render() {
        const { show, modalClosed, children } = this.props;

        return (
            <div
                className={`modal-window ${!show ? "inactive-modal" : ""}`}
                onClick={e => {
                    if (e.target === this.refs.modalWrapper) {
                        modalClosed();
                    }
                }}
            >
                <div className="modal-wrapper" ref="modalWrapper">
                    <div className={`modal ${show ? "animate-modal" : ""}`}>
                        {this.renderHeader()}
                        <div className="modal-body">{children}</div>
                        {this.renderFooter()}
                    </div>
                </div>
            </div>
        );
    }
}

//https://codepen.io/AdamMorsi/pen/mgBdWy


        {/*Modal properties
        - modalClosed => a method to close the modal
        - show => boolean value to determine whether to show or hide the modal        
        - modalTitle => modal header text (default empty)
        - footerBtnText => the text of the footer button (default "close")         
        - footerBtnListener => a method for the footer button (Note: the footer button will trigger this method as well as the modalClosed method)
        - useModalHeader => boolean value which determines whether to use the modal header or not (default true) 
        - useModalFooter => boolean value which determines whether to use the modal footer or not (default true)  */}