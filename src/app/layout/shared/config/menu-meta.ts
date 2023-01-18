import {MenuItem} from '../models/menu.model';

// menu items for vertcal and detached layout
const MENU_ITEMS: MenuItem[] = [
    //dashbroad
    {
        key: 'dashboard',
        label: 'Dashboards',
        isTitle: false,
        icon: 'trello',
        collapsed: false,
        // badge: {variant: 'success', text: '02'},
        children: [
            {
                key: 'ds-ecommerce',
                label: 'Ecommerce',
                link: '/dashboard/ecommerce',
                parentKey: 'dashboard',
            },
        ],
    },

    //// nhà xe
    {key: 'apps', label: 'Quản lý nhà xe', isTitle: true},
    {
        key: 'company-management',
        label: 'Quản lý nhà xe',
        isTitle: false,
        icon: 'home',
        collapsed: true,
        children: [
            {
                key: 'create-company',
                label: 'Tạo mới',
                link: '/apps/company/create',
                parentKey: 'company-management',
            },
            {
                key: 'list-company',
                label: 'Danh sách nhà xe',
                link: '/apps/company/list',
                parentKey: 'company-management',
            },
        ],
    },
    {
        key: 'vehicle-management',
        label: 'Quản lý xe',
        isTitle: false,
        icon: 'truck',
        collapsed: true,
        children: [
            {
                key: 'vehicle-create',
                label: 'Tạo mới',
                link: '/apps/vehicle/create',
                parentKey: 'vehicle-management',
            },
            {
                key: 'vehicle-list',
                label: 'Danh sách nhà xe',
                link: '/apps/vehicle/list',
                parentKey: 'vehicle-management',
            },
        ],
    },

    // chuyến đi
    {key: 'apps', label: 'Quản lý chuyến đi', isTitle: true},
    {
        key: 'apps-trip',
        label: 'Lộ trình',
        isTitle: false,
        icon: 'mail',
        collapsed: true,
        children: [
            {
                key: 'create-trip',
                label: 'Danh sách lộ trình',
                link: '/apps/trip/list',
                parentKey: 'apps-trip',
            },
            {
                key: 'log-trip',
                label: 'Log chuyến đi',
                link: '/apps/trip/list',
                parentKey: 'apps-trip',
            },
        ],
    },

    //// Người dùng
    {key: 'apps', label: 'Quản lý người dùng', isTitle: true},
    {
        key: 'apps-customer',
        label: 'Khách hàng',
        isTitle: false,
        icon: 'users',
        collapsed: true,
        children: [
            {
                key: 'customer-list',
                label: 'Danh sách',
                // link: '/apps/trip/list',
                parentKey: 'apps-member',
            },
            {
                key: 'customer-list',
                label: 'Lịch sử tích điểm',
                // link: '/apps/trip/list',
                parentKey: 'apps-member',
            },
        ],
    },
    {
        key: 'apps-member',
        label: 'Người dùng hệ thống',
        isTitle: false,
        icon: 'user',
        collapsed: true,
        children: [
            {
                key: 'member-list',
                label: 'Danh sách',
                // link: '/apps/trip/list',
                parentKey: 'apps-member',
            },
        ],
    },

    // Voucher
    {key: 'apps', label: 'Quản lý tiện ích', isTitle: true},
    {
        key: 'apps-utilities',
        label: 'Voucher',
        isTitle: false,
        icon: 'clipboard',
        collapsed: true,
        children: [
            {
                key: 'utilities',
                label: 'Danh sách voucher',
                // link: '/apps/trip/list',
                parentKey: 'apps-utilities',
            },
            {
                key: 'utilities',
                label: 'Gửi voucher',
                // link: '/apps/trip/list',
                parentKey: 'apps-utilities',
            },
        ],
    },


    // Hệ thống
    {key: 'apps', label: 'Nhật ký hệ thống', isTitle: true},
    {
        key: 'apps-logsys',
        label: 'Nhật ký',
        isTitle: false,
        icon: 'book-open',
        collapsed: true,
        children: [
            {
                key: 'logsys',
                label: 'Danh sách nhật ký hệ thống',
                // link: '/apps/trip/list',
                parentKey: 'apps-logsys',
            },
        ],
    },









    // {key: 'apps', label: 'Apps', isTitle: true},
    // {
    //     key: 'apps-calendar',
    //     label: 'Calendar',
    //     isTitle: false,
    //     icon: 'calendar',
    //     link: '/apps/calendar',
    // },
    // {
    //     key: 'apps-chat',
    //     label: 'Chat',
    //     isTitle: false,
    //     icon: 'message-square',
    //     link: '/apps/chat',
    // },
    // {
    //     key: 'apps-email',
    //     label: 'Email',
    //     isTitle: false,
    //     icon: 'mail',
    //     collapsed: true,
    //     children: [
    //         {
    //             key: 'email-inbox',
    //             label: 'Inbox',
    //             link: '/apps/email/inbox',
    //             parentKey: 'apps-email',
    //         },
    //         {
    //             key: 'email-read-email',
    //             label: 'Read Email',
    //             link: '/apps/email/details',
    //             parentKey: 'apps-email',
    //         },
    //         {
    //             key: 'email-compose-email',
    //             label: 'Compose Email',
    //             link: '/apps/email/compose',
    //             parentKey: 'apps-email',
    //         },
    //     ],
    // },
    // {
    //     key: 'apps-projects',
    //     label: 'Projects',
    //     isTitle: false,
    //     icon: 'briefcase',
    //     collapsed: true,
    //     children: [
    //         { key: 'project-list', label: 'List', link: '/apps/projects/list', parentKey: 'apps-projects' },
    //         {
    //             key: 'project-details',
    //             label: 'Detail',
    //             link: '/apps/projects/details',
    //             parentKey: 'apps-projects',
    //         }
    //     ],
    // },
    // {
    //     key: 'apps-tasks',
    //     label: 'Tasks',
    //     isTitle: false,
    //     icon: 'clipboard',
    //     collapsed: true,
    //     children: [
    //         { key: 'task-list', label: 'List', link: '/apps/tasks/list', parentKey: 'apps-tasks' },
    //         { key: 'task-kanban', label: 'Kanban Board', link: '/apps/tasks/kanban', parentKey: 'apps-tasks' },
    //     ],
    // },
    // {
    //     key: 'apps-file-manager',
    //     label: 'File Manager',
    //     isTitle: false,
    //     icon: 'file-plus',
    //     link: '/apps/file-manager',
    // },
    // { key: 'custom', label: 'Custom', isTitle: true },
    // {
    //     key: 'extra-pages',
    //     label: 'Pages',
    //     isTitle: false,
    //     icon: 'file-text',
    //     collapsed: true,
    //     children: [
    //         { key: 'page-starter', label: 'Starter', link: '/pages/starter', parentKey: 'extra-pages' },
    //         { key: 'page-profile', label: 'Profile', link: '/pages/profile', parentKey: 'extra-pages' },
    //         { key: 'page-activity', label: 'Activity', link: '/pages/activity', parentKey: 'extra-pages' },
    //         { key: 'page-invoice', label: 'Invoice', link: '/pages/invoice', parentKey: 'extra-pages' },
    //         { key: 'page-pricing', label: 'Pricing', link: '/pages/pricing', parentKey: 'extra-pages' },
    //         {
    //             key: 'page-maintenance',
    //             label: 'Maintenance',
    //             link: '/maintenance',
    //             parentKey: 'extra-pages',
    //         },
    //         { key: 'page-error-404', label: 'Error - 404', link: '/error-404', parentKey: 'extra-pages' },
    //         { key: 'page-error-500', label: 'Error - 500', link: '/error-500', parentKey: 'extra-pages' },
    //     ],
    // },
    // { key: 'components', label: 'Components', isTitle: true },
    // { key: 'ui-elements', label: 'UI Elements', isTitle: false, icon: 'package', link: '/ui-element' },
    // { key: 'widgets', label: 'Widgets', isTitle: false, icon: 'gift', link: '/widgets' },
    // {
    //     key: 'icons',
    //     label: 'Icons',
    //     isTitle: false,
    //     icon: 'cpu',
    //     collapsed: true,
    //     children: [
    //         { key: 'icon-unicons', label: 'Unicons', link: '/icons/unicon', parentKey: 'icons' },
    //         { key: 'icon-feather', label: 'Feather', link: '/icons/feather', parentKey: 'icons' },
    //         { key: 'icon-bootstrap', label: 'Bootstrap', link: '/icons/bootstrap', parentKey: 'icons' },
    //     ],
    // },
    // {
    //     key: 'forms',
    //     label: 'Forms',
    //     isTitle: false,
    //     icon: 'bookmark',
    //     collapsed: true,
    //     children: [
    //         { key: 'form-basic', label: 'Basic Elements', link: '/forms/basic', parentKey: 'forms' },
    //         { key: 'form-advanced', label: 'Advanced', link: '/forms/advanced', parentKey: 'forms' },
    //         { key: 'form-validation', label: 'Validation', link: '/forms/validation', parentKey: 'forms' },
    //         { key: 'form-wizard', label: 'Wizard', link: '/forms/wizard', parentKey: 'forms' },
    //         { key: 'form-editors', label: 'Editors', link: '/forms/editors', parentKey: 'forms' },
    //         { key: 'form-upload', label: 'File Uploads', link: '/forms/upload', parentKey: 'forms' }
    //     ],
    // },
    // { key: 'charts', label: 'Charts', isTitle: false, icon: 'bar-chart-2', link: '/charts' },
    // {
    //     key: 'tables',
    //     label: 'Tables',
    //     isTitle: false,
    //     icon: 'grid',
    //     collapsed: true,
    //     children: [
    //         { key: 'table-basic', label: 'Basic', link: '/tables/basic', parentKey: 'tables' },
    //         { key: 'table-advanced', label: 'Advanced Tables', link: '/tables/advanced', parentKey: 'tables' },
    //     ],
    // },
    // {
    //     key: 'maps',
    //     label: 'Maps',
    //     isTitle: false,
    //     icon: 'map',
    //     collapsed: true,
    //     children: [
    //         { key: 'maps-googlemaps', label: 'Google Maps', link: '/maps/googlemaps', parentKey: 'maps' },
    //         { key: 'maps-vectormaps', label: 'Vector Maps', link: '/maps/vectormaps', parentKey: 'maps' },
    //     ],
    // },
    // {
    //     key: 'menu-levels',
    //     label: 'Menu Levels',
    //     isTitle: false,
    //     icon: 'share-2',
    //     collapsed: true,
    //     children: [
    //         {
    //             key: 'menu-levels-1-1',
    //             label: 'Level 1.1',
    //             link: '/',
    //             parentKey: 'menu-levels',
    //             collapsed: true,
    //             children: [
    //                 {
    //                     key: 'menu-levels-2-1',
    //                     label: 'Level 2.1',
    //                     link: '/',
    //                     parentKey: 'menu-levels-1-1',
    //                     collapsed: true,
    //                     children: [
    //                         { key: 'menu-levels-3-1', label: 'Level 3.1', link: '/', parentKey: 'menu-levels-2-1' },
    //                         { key: 'menu-levels-3-2', label: 'Level 3.2', link: '/', parentKey: 'menu-levels-2-1' },
    //                     ],
    //                 },
    //                 { key: 'menu-levels-2-2', label: 'Level 2.2', link: '/', parentKey: 'menu-levels-1-1' },
    //             ],
    //         },
    //         { key: 'menu-levels-1-2', label: 'Level 1.2', link: '/', parentKey: 'menu-levels' },
    //     ],
    // },

];
export {MENU_ITEMS};
