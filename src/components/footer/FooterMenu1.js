import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FooterMenuUL from './FooterMenuUL';


const FooterMenu = () => {
    const Menu = useStaticQuery(graphql`
        query ($menu: WpMenuLocationEnum = FOOTER_1) {
            menuTitle: allWpMenu(filter: {locations: {eq: $menu}}) {
                nodes {
                    name
                }
            }
            menu: allWpMenuItem(filter: { locations: { eq: $menu }, parentId: {eq: null} }) {
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
    const title = Menu.menuTitle.nodes[0].name;
    const menu = Menu.menu.nodes;
    return (
        <>
            <h3 className="title style-1">
                {title}
            </h3>
            <div className="box-menu box-menu-1">
                <FooterMenuUL menu={menu} />
            </div>
        </>
    )
};
export default FooterMenu;