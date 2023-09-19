import React from 'react'
import Modal from 'react-bootstrap/Modal'

function DetailsModal({ show, handleClose, item }) {
  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img src={item.image} alt="Image" style={{ width: '100%' }} />
            </div>
            <div className="col-lg-7">
              <p className="primary-text modal-header-text">{item.heading}</p>
              <p className="description modal-header-desc" style={{ wordBreak: 'break-word' }}>
                {item.longDesc}
              </p>
              <div className="d-flex align-items-center" onClick={handleClose}>
                <p className="primary-text" style={{ cursor: 'pointer' }}>
                  See Less
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DetailsModal
