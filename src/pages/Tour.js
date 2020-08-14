import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

export default function Tour() {
  return (
    <div className='tour-page'>
      <h2>UPCOMING TOUR DATES</h2>
      <p>
        IMPORTANT NOTE FOR ALL NEW AND RESCHEDULED UK AND EUROPE TOUR DATES:
        Please make sure to click DETAILS located under the INFO section of
        each individual date for information concerning the rescheduling of
        your specific show.
      </p>
      <Table>
        <thead>
          <Th>Date</Th>
          <Th>Venue</Th>
          <Th>City</Th>
          <Th>Tickets</Th>
          <Th>Info</Th>
        </thead>
        <Tbody>
          <Tr>
            <Td>5/18/2021</Td>
            <Td>Torwar <span className='red'>(New Venue!)</span></Td>
            <Td>Warsaw, PL</Td>
            <Td><a href='#'><FontAwesomeIcon icon='ticket-alt' /></a></Td>
            <Td><a href='#'>Details</a></Td>
          </Tr>
          <Tr>
            <Td>5/20/2021</Td>
            <Td>Stadthalle</Td>
            <Td>Graz, AT</Td>
            <Td><a href='#'><FontAwesomeIcon icon='ticket-alt' /></a></Td>
            <Td><a href='#'>Details</a></Td>
          </Tr>
          <Tr>
            <Td>5/22/2021</Td>
            <Td>Stadthalle</Td>
            <Td>Vienna, AT</Td>
            <Td><a href='#'><FontAwesomeIcon icon='ticket-alt' /></a></Td>
            <Td><a href='#'>Details</a></Td>
          </Tr>
          <Tr>
            <Td>5/23/2021</Td>
            <Td>Tips Arena</Td>
            <Td>Linz, AT</Td>
            <Td><a href='#'><FontAwesomeIcon icon='ticket-alt' /></a></Td>
            <Td><a href='#'>Details</a></Td>
          </Tr>
          <Tr>
            <Td>5/25/2021</Td>
            <Td>O2 Arena <span className='red'>(New Venue!)</span></Td>
            <Td></Td>
            <Td><a href='#'><FontAwesomeIcon icon='ticket-alt' /></a></Td>
            <Td><a href='#'>Details</a></Td>
          </Tr>
          <Tr>
            <Td>5/27/2021</Td>
            <Td>Samsung Hall <span className='red'>(New Venue!)</span></Td>
            <Td>Zurich, CH</Td>
            <Td><a href='#'><FontAwesomeIcon icon='ticket-alt' /></a></Td>
            <Td><a href='#'>Details</a></Td>
          </Tr>
          <Tr>
            <Td>5/29/2021</Td>
            <Td>Lorenzini District <span className='red'>(New Venue!)</span></Td>
            <Td>Milan, IT</Td>
            <Td><a href='#'><FontAwesomeIcon icon='ticket-alt' /></a></Td>
            <Td><a href='#'>Details</a></Td>
          </Tr>
          <Tr>
            <Td>5/30/2021</Td>
            <Td>Rockhal <span className='red'>(NEW SHOW!)</span></Td>
            <Td></Td>
            <Td><a href='#'><FontAwesomeIcon icon='ticket-alt' /></a></Td>
            <Td><a href='#'>Details</a></Td>
          </Tr>
          <Tr>
            <Td>6/01/2021</Td>
            <Td>AFAS</Td>
            <Td>Amsterdam, NL</Td>
            <Td><a href='#'><FontAwesomeIcon icon='ticket-alt' /></a></Td>
            <Td><a href='#'>Details</a></Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}