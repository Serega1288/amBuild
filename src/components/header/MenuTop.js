import React, {useState} from 'react';
import { graphql, useStaticQuery, Link } from "gatsby";



const MenuTop = () => {

    const data = useStaticQuery(graphql`
        query($menu : WpMenuLocationEnum = HEADER_TOP ) {
            allWpMenuItem(filter: { locations: { eq: $menu }, parentId: {eq: null} }) {
                nodes {
                    id
                    label
                    path
                    childItems {
                        nodes {
                            id
                            label
                            path
                        }
                    }
                }
            }
        }
    `);

    const { allWpMenu, allWpMenuItem } = data;

    return (
        <>
            <ul className="h100 menu style-1 ul-clear d-block d-xl-flex justify-content-center align-items-stretch">
                {allWpMenuItem.nodes.map(item => (

                    <li key={item.id} className={ item.childItems.nodes && item.childItems.nodes.length > 0 ? 'sub' : '' } >

                        <Link className="a" to={item.path} >{item.label}</Link>

                        { item.childItems.nodes && item.childItems.nodes.length > 0 ? (
                            <>
                                <ul className="ul-sub ul-clear">
                                    {item.childItems.nodes.map(li => (
                                        <li key={li.id}>
                                            <Link className="a" to={li.path}>{li.label}</Link>
                                        </li>
                                    ) )}
                                </ul>
                            </>
                        ) : null }

                    </li>

                ))}
            </ul>
        </>
    );
}
export default MenuTop;