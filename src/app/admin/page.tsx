import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import ChartArea from '@/layout/admin/dashboard/ChartArea';
import ChartBar from '@/layout/admin/dashboard/ChartBar';
import ChartMultiBar from '@/layout/admin/dashboard/ChartMultiBar';
import ChartPie from '@/layout/admin/dashboard/ChartPie';
import ChartRadar from '@/layout/admin/dashboard/ChartRadar';
import { IBreadcrumbs } from '@/type';

const Dashboard = () => {
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '#',
        },
    ];

    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />
            {/* Chart */}
            <div className="mb-7 flex items-center gap-x-7">
                <ChartBar />
                <ChartArea />
                <ChartRadar />
            </div>
            <div className="mb-7 flex gap-x-7">
                <ChartMultiBar />
                <ChartPie />
            </div>
        </>
    );
};

export default Dashboard;
