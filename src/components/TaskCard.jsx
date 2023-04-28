import { Badge, Box, Card, Grid, List, Title, Text, Space, useMantineTheme } from '@mantine/core'
import { useHover, useMediaQuery } from '@mantine/hooks'
import React from 'react'


export const buildKing = {
    jobType: 'Full-time',
    title: 'Developer',
    company: 'Build King Holdings Ltd.',
    subDetails: <Text>Cerebrohk</Text>,
    ContentComponent: <List withPadding >
        <List.Item>Building react native app and web development with reactjs</List.Item>
        <List.Item>Utilizing react-hook-form, tanstack query and state management with
            Zustand in development</List.Item>
        <List.Item>Experience in UI library, such as MUI, Native Base and Mantine</List.Item>
    </List>

}

export const ensignFreight = {
    jobType: 'Full-time',
    title: ' Full Stack Developer',
    company: 'Ensign Freight',
    subDetails: <Text>BooknStore team (warehouse)</Text>,
    ContentComponent: <>
        <List>
            Supply Chain Management (SCM)
        </List>
        <List withPadding>
            <List.Item>Fetched data from courier api by react axios</List.Item>
            <List.Item>Utilized guzzle for JSON-RPC for backend server-side by hyperf</List.Item>
            <List.Item>Utilized MySQL Workbench for database queries</List.Item>
            <List.Item>Had hand-on experience in ERD for supplier related database design</List.Item>
        </List>
    </>

}

export const innovationX = {
    jobType: 'Full-time',
    title: 'Senior R&D Enginner',
    company: 'Innovation X',
    subDetails: <Text>Volumetric display</Text>,
    ContentComponent: <>
        <Title order={5}>Research field</Title>
        <List withPadding>
            <List.Item>Designed the prototype of the swept-volume display</List.Item>
            <List.Item>Designed the supplementary components with CAD software by 3D printers(FDM & DLP)</List.Item>
            <List.Item>Applied electronic components with Arduino software</List.Item>
        </List>
        <Space h='sm' />
        <Title order={5}>Technical fields in IT relational</Title>
        <List withPadding>
            <List.Item>3D model slicing to a stack of dot images by python</List.Item>
            <List.Item>Designed Lens system with Excel, Python and Zemax</List.Item>
            <List.Item>Light filter layer structure</List.Item>
            <List.Item>Mechanism simulation by SolidWorks and python</List.Item>
        </List>
    </>

}

export const hkust = {
    jobType: 'SEPTEMBER 2017 - SEPTEMBER 2020',
    title: "Hong Kong University of Science and Technology",
    company: "Bachelor's degree",
    subDetails: <Text>Major in Physics</Text>,
    ContentComponent:
        <>
            <List>
                IT related field
            </List>
            <List withPadding>
                <List.Item>Familiar with library related to scientific aspects</List.Item>
                <List.Item>Visualization: matplotlib</List.Item>
                <List.Item>Calculation: sympy, numpy, scipy</List.Item>
            </List>
        </>

}

export const itBootCamp = {
    jobType: 'MARCH 2022 - JULY 2022',
    title: "Full-Stack Softare Development IT Bootcamp (Full-time)",
    company: "Venturenix Lab",
    subDetails: <Text>Major in Physics</Text>,
    ContentComponent:
        <>
            <List withPadding>
                <List.Item>Developed an E-commerce-based web development in both frontend and
                    backend
                </List.Item>
                <List.Item>Utilized Spring Boot in MVC structure with AWS RDS(MySQL) to develop
                    backend, deployed in AWS EC2
                </List.Item>
                <List.Item>Utilized API calls</List.Item>
            </List>
        </>
}






export const TaskCard = ({ data }) => {
    const hover = useHover();
    const theme = useMantineTheme();
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);
    return (
        <Card
            shadow={hover.hovered ? 'xl' : 'md'}
            ref={hover.ref}
            m={matches ? 'xl' : 'xs'}
            radius={'md'} p={50}
            sx={hover.hovered ? { transform: 'scale(1.05)', transition: 'all .2s ease-in-out' } : { transform: 'scale(1)', transition: 'all .3s ease-in-out' }

            }


        >
            <Card.Section >
                <Box m={10}>
                    <Badge variant="gradient"
                        gradient={{ from: 'indigo', to: 'cyan' }}
                    >{data.jobType}</Badge>
                </Box>

            </Card.Section>

            <Grid align={'center'}>
                <Grid.Col lg={6} sm={6} xs={6} >
                    <Title >{data.title}</Title>
                    <Space h={'md'} />
                    <Title order={3}>{data.company}</Title>
                    {data.subDetails}
                </Grid.Col>

                <Grid.Col lg={6} sm={6} xs={6}>
                    {data.ContentComponent}
                </Grid.Col>
            </Grid>
        </Card>
    )
}
