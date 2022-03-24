import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import axios  from 'axios'
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';


export const CustomerListResults = ({ customers, ...rest }) => {
  const [users, setUser] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const user = {
    
  };
  
  const Data = () => {
    axios.post(`https://demo1779595.mockable.io/companies`, { user })
      .then(res => {
        console.log(res.data.companiesList)
        setUser(res.data.companiesList)
      })
  }
  useEffect(() => {
    
    Data();
  },[])

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = users.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setUser(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = setUser.indexOf(id);
    let newSelectedCustomerIds = [];

    // if (selectedIndex === -1) {
    //   newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    // } else if (selectedIndex === 0) {
    //   newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    // } else if (selectedIndex === selectedCustomerIds.length - 1) {
    //   newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelectedCustomerIds = newSelectedCustomerIds.concat(
    //     selectedCustomerIds.slice(0, selectedIndex),
    //     selectedCustomerIds.slice(selectedIndex + 1)
    //   );
    // }

    setUser(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    // checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    // indeterminate={
                    //   selectedCustomerIds.length > 0
                    //   && selectedCustomerIds.length < customers.length
                    // }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Company
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Roll
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                Verified
                </TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                </Box>
                  <TableCell>
                    {customer.company}
                  </TableCell>
                     </TableCell>
                  <TableCell>
                    {customer.name}
                  </TableCell>
                  <TableCell>
                    {customer.role}
                  </TableCell>
                  
                  <TableCell>
                    {customer.status}
                  </TableCell>
                  <TableCell>
                    {customer.varified}
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};