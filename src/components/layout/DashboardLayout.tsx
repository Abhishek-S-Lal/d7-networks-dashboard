import { AppShell, Avatar, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconAddressBook,
    IconApps,
    IconBrandWhatsapp,
    IconCoin,
    IconDashboard,
    IconDownload,
    IconKey,
    IconMessageCircle2,
    IconPhone,
    IconSearch,
    IconSquareRoundedCheck,
} from '@tabler/icons-react';
import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import classes from './DashboardLayout.module.css';


const DashboardLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    const [opened, { toggle }] = useDisclosure();

    const navData = [
        { label: 'Dashboard', icon: IconDashboard, link:"dashboard" },
        {
            label: 'Contacts',
            icon: IconAddressBook,
            links: [
                { label: 'List', link: '/' },
                { label: 'Contact Groups', link: '/' },
            ],
        },
        { label: 'API Tokens', icon: IconKey },
        {
            label: 'Billing',
            icon: IconCoin,
            links: [
                { label: 'Payment', link: '/' },
                { label: 'Invoice', link: '/' },
                { label: 'Auto Recharge', link: '/' },
            ],
        },
        {
            label: 'SMS',
            icon: IconMessageCircle2,
            initiallyOpened: true,
            links: [
                { label: 'Getting Started', link: '/' },
                { label: 'Campaign', link: '/sms/campaign' },
                { label: 'Manage Campaign', link: '/' },
                { label: 'Template', link: '/' },
                { label: 'Campaign Report', link: '/' },
                { label: 'API Report', link: '/' },
                { label: 'Scheduled Requests', link: '/' },
                { label: 'Pricing', link: '/' },
                { label: 'Settings', link: '/' },
            ],
        },
        {
            label: 'Verify',
            icon: IconSquareRoundedCheck,
            links: [
                { label: 'Getting Started', link: '/' },
                { label: 'Report', link: '/' },
                { label: 'Settings', link: '/' },
            ],
        },
        {
            label: 'Whatsapp',
            icon: IconBrandWhatsapp,
            links: [
                { label: 'Getting Started', link: '/' },
                { label: 'Numbers', link: '/' },
                { label: 'Template', link: '/' },
                { label: 'Whatsapp Campaign', link: '/' },
                { label: 'Mange Campaign', link: '/' },
                { label: 'Campaign Report', link: '/' },
                { label: 'Chatbot', link: '/' },
                { label: 'API Report', link: '/' },
                { label: 'Settings', link: '/' },
            ],
        },
        {
            label: 'Number Lookup',
            icon: IconSearch,
            links: [
                { label: 'Getting Started', link: '/' },
                { label: 'Lookup Report', link: '/' },
                { label: 'Pricing', link: '/' },
            ],
        },
        {
            label: 'Viber',
            icon: IconPhone,
            links: [
                { label: 'Getting Started', link: '/' },
                { label: 'API Report', link: '/' },
                { label: 'Pricing', link: '/' },
                { label: 'Settin', link: '/' },
            ],
        },
        { label: 'Integrations', icon: IconApps },
        { label: 'Import/Export', icon: IconDownload },

    ];

    return (
        <AppShell
            header={{ height: 70 }}
            navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding={{sm:"md", md:"xl"}}
        >
            <AppShell.Header className={classes.appHeader}>
                <Group h="100%" px="md" justify='space-between'>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    {/* <Logo size={30} /> */}
                    <img src='/logo.png' width={100} height={60} />
                    <Text size='sm' visibleFrom='md'>★★ Exciting News! 🚀 Introducing WhatsApp API - Connect with your audience on a whole new level. Try it today! ★★
                    </Text>
                    <Avatar color="#2b9dff" radius="xl">MK</Avatar>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar>
                <Navbar navData={navData} />
            </AppShell.Navbar>
            <AppShell.Main bg={"#fafafb"}>{children}</AppShell.Main>
        </AppShell>
    );
}

export default DashboardLayout