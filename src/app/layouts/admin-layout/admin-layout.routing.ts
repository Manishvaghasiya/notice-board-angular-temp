import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { CreateNoticeComponent } from '../../pages/create-notice/create-notice.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/notices/notices.component';
import { MapsComponent } from '../../pages/saved-notices/saved-notices.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'create-notice', component: CreateNoticeComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'notices',          component: IconsComponent },
    { path: 'my-saved-notices',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
