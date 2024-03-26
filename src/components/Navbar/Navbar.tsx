import { ScrollArea } from '@mantine/core';

import { LinksGroup, LinksGroupProps } from './NavbarLinksGroup';
import classes from './Navbar.module.css';

export function Navbar({navData}: {navData:[LinksGroupProps]}) {
    const links = navData.map((item) => <LinksGroup {...item} key={item.label} />);

    return (
        <nav className={classes.navbar}>
            {/* Add header if needed */}
            {/* <div className={classes.header}>
                    <Group justify="space-between">
                    <Logo style={{ width: rem(120) }} />
                    <Code fw={700}>v3.1.2</Code>
                    </Group>
                </div> */}

            <ScrollArea className={classes.links}>
                <div className={classes.linksInner}>{links}</div>
            </ScrollArea>

            {/* Add footer if needed */}
            {/* <div className={classes.footer}>
      </div> */}
        </nav>
    );
}