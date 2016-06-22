"use strict";
var admin_component_1 = require('../components/admin/admin.component');
var auth_guard_1 = require('../providers/auth.guard');
exports.AdminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
];
//# sourceMappingURL=admin.routes.js.map