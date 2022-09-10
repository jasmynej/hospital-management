import './sass/dashboard.scss'
import { useNavigate } from "react-router-dom";
function AdminLayout({children}){
    return (
        <div className='admin-container'>
            
            <div className='admin-nav'>
                <div className="admin-nav-search">
                    <input type="text" placeholder="Search Medical Records"/>
                    <button>Search</button>
                </div>
                <div className="admin-nav-brand">
                    <i class="fa-solid fa-square-h admin-nav-logo"></i>
                </div>
                <div className="admin-nav-controls">
                    <i class="fa-regular fa-envelope"></i>
                    <p>|</p>
                    <p>Admin Person</p>
                </div>
            </div>
            <div className="admin-bottom">
                <div className='admin-side-nav'>
                    <div className='admin-side-nav-item'>
                        <i class="fa-solid fa-table-columns"></i>
                    </div>
                    <div className='admin-side-nav-item'>
                        <i class="fa-regular fa-clipboard"></i>
                    </div>
                    <div className='admin-side-nav-item'>
                        <i class="fa-regular fa-envelope-open"></i>
                    </div>
                    <div className='admin-side-nav-item'>
                        <i class="fa-regular fa-calendar-days"></i>
                    </div>
                    <div className='admin-side-nav-item'>
                        <i class="fa-regular fa-user"></i>
                    </div>
               </div>
               <div className='admin-content'>
                    {children}
                    
               </div>
            </div>
            
        </div>
    )
}

export default AdminLayout;