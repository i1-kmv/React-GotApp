import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import './RowBlock.css'


const RowBlock = ({left, right}) => {
  return(
      <Row>
          <Col md='6'>
              {left}
          </Col>
          <Col md='6'>
              {right}
          </Col>
    </Row>
  )
}

export default RowBlock;