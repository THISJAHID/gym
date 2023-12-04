import { Sidebar } from 'flowbite-react';

import { NavLink } from 'react-router-dom';
import { HiChartPie,  HiTable, HiViewBoards } from 'react-icons/hi';
const Nav = () => {
    return (
        <Sidebar aria-label="Default sidebar example ">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item icon={HiChartPie}>
                        <NavLink to="dashboard"> Dashboard</NavLink>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiViewBoards} labelColor="dark">
                        <NavLink to="allsubscribers"> All Subscribe</NavLink>
                    </Sidebar.Item>
                  
                    

                    <Sidebar.Item href="#" icon={HiTable}>
                        Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default Nav;