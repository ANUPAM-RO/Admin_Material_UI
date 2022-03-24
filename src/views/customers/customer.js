import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../customers/customer-list-results';
import { CustomerListToolbar } from '../customers/customer-list-toolbar';



const Customers = () => (
  <>
    <Head>
      <title>
        Customers | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults  />
        </Box>
      </Container>
    </Box>
  </>
);
// Customers.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default Customers;
