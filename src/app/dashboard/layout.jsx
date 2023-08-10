import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

const layout = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row gap-10 mt-5 ">
            <DashboardNavbar />
            <div className="flex-grow">{children}</div>
        </div>
    );
};

export default layout;
