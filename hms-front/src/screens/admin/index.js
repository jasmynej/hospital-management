import './sass/dashboard.scss'
import AdminLayout from './layout.js'
import { useNavigate } from "react-router-dom";
function AdminDashboard(){
    let navigate = useNavigate()
    return (
        <AdminLayout>
            <div className="options">        
                    <div className="dashboard-option">    
                        <h3><span class="count">#</span><br/>Doctors</h3>
                        <i class="fa-solid fa-stethoscope"></i>
                    </div>
                    <div className="dashboard-option" onClick={()=> {navigate("/admin/patients")}}>
                        <h3><span class="count">#</span><br/>Patients</h3>
                        <i class="fa-solid fa-hospital-user"></i>      
                    </div>
                    <div className="dashboard-option">
                        <h3><span class="count">#</span><br/>Appoitments</h3>
                        <i class="fa-regular fa-calendar"></i>
                    </div>
                    <div className="dashboard-option">
                        <h3><span class="count">#</span><br/>Invoices</h3>
                        <i class="fa-solid fa-file-invoice"></i>
                    </div>
                </div>
                <div className="admin-stats">
                    <div className="admin-chart"></div>

                </div>
        </AdminLayout>
    )
}

export default AdminDashboard;