// assets
import { IconAccessPoint } from '@tabler/icons';

// constant
const icons = { IconAccessPoint };
const customers = {
    id: 'companies',
    title: 'Companies',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Companies',
            type: 'item',
            url: '/companies',
            icon: icons.IconAccessPoint,
            breadcrumbs: false
        }
    ]
};
export default customers;