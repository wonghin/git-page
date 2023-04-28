import { Affix, Badge, Blockquote, Button, Card, Flex, Grid, Group, Paper, ScrollArea, Stack, Transition, useMantineColorScheme, useMantineTheme, BackgroundImage, Space, Title, Container, List } from '@mantine/core';


import { Image, Center, Text, Box } from '@mantine/core';
import { useDisclosure, useMediaQuery, useScrollIntoView, useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import { useState } from 'react';


import cat1 from '../../assets/cat1.jpg'
import HoverSpringMotion from '../../components/HoverSpringMotion/HoverSpringMotion';
import { ImageModal } from '../../components/ImageModal';
import { ScrollFadeIn } from '../../components/Animated/ScrollFadeIn';

import TestReactSpringCard from './Test/TestReactSpringCard/TestReactSpringCard';

export function Demo() {

    return (
        <Card shadow="sm"
            // @ts-ignore
            padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Norway Fjord Adventures</Text>
                <Badge color="pink" variant="light">
                    On Sale
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
            </Button>
        </Card>
    );
}
export function Content1({ targetRef }) {
    const [scroll, scrollTo] = useWindowScroll();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();

    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.lg}px)`);

    const [opened, { open, close }] = useDisclosure(false);

    const open1 = useDisclosure(false)
    const open2 = useDisclosure(false)
    const open3 = useDisclosure(false)
    const open4 = useDisclosure(false)


    const openArray = [open1, open2, open3, open4]

    // const [isShow, setShow] = useState(false)
    return (
        <>
            <Grid gutter={20}  >
                {/* Home */}
                <Grid.Col lg={12} sm={12} px={30}>
                    <Grid align={'center'} h={matches ? '100vh' : 'auto'}>
                        <Grid.Col lg={6} sm={12}>
                            <Grid>
                                <Grid.Col sm={6}>
                                    <Title order={1} size={100}>Andy</Title>
                                    <Title order={1} size={100} ml={45} >Wong</Title>
                                </Grid.Col>
                                {/* <Grid.Col sm={6} display={matches ? 'none' : 'block'}>
                                    <HoverSpringMotion image={require(`../../assets/cat.jpg`)} open={open} />
                                    <ImageModal opened={opened} open={open} close={close} image={require(`../../assets/cat.jpg`)} index={undefined} />
                                </Grid.Col> */}
                            </Grid>
                            <Space h="md" />
                            <Text fz={50} fw={500}>I am a Developer</Text>
                            <Space h={'xl'} />
                            <Text fz={20}>
                                Hands-on experience in web development and apps by reactjs, react native and backend development with
                                Spring Boot. Enthusiastic person loves learning what I don't know. Insterested in sketching, calisthenics, bouldering.
                            </Text>
                        </Grid.Col>


                        <Grid.Col lg={6} sm={12} display={matches ? 'block' : 'none'}>
                            <Stack >
                                <HoverSpringMotion image={require(`../../assets/cat.jpg`)} open={open} />
                                <ImageModal opened={opened} open={open} close={close} image={require(`../../assets/cat.jpg`)} index={undefined} />

                            </Stack>
                            {/* <Card p={'md'} shadow={'lg'} maw={'35vw'} >
                                <Image src={cat1} alt='cat1' />
                            </Card> */}
                        </Grid.Col>

                    </Grid>
                </Grid.Col>
                {/* About */}
                <Grid.Col lg={12} sm={12} px={30} >
                    <ScrollFadeIn >
                        <Grid h={matches ? '100vh' : 'auto'}>
                            <Grid.Col lg={12} sm={12} sx={{ display: 'flex', alignItems: 'flex-end' }} ref={targetRef.refAbout}>
                                <Title fz={50} sx={{ alignSelf: 'flex-end' }}> About</Title>
                            </Grid.Col>
                            {
                                Array.from(Array(4)).map((_, index) =>

                                    <Grid.Col key={index} lg={3} xs={6}  >
                                        <HoverSpringMotion image={require(`../../assets/cat${index}.jpg`)} open={openArray[index][1].open} />
                                        <ImageModal opened={openArray[index][0].valueOf()} open={openArray[index][1].open} close={openArray[index][1].close} image={require(`../../assets/cat${index}.jpg`)} index={undefined} />
                                    </Grid.Col>
                                )
                            }
                        </Grid>
                    </ScrollFadeIn>
                </Grid.Col>



                {/* Employment History */}
                <Grid.Col lg={12} sm={12} ref={targetRef.targetRef}>
                    <Grid.Col lg={12} sm={12} xs={12} >
                        <Title fz={50}> Employment</Title>
                        <Space h={'lg'} />
                    </Grid.Col>
                    <Grid h={matches ? '150vh' : 'auto'} gutter="xs" bg={'grape'} align={'stretch'}>
                        <Grid.Col lg={6} >
                            <Card shadow={'xl'} m={'xl'} radius={'md'} p={50}>
                                <Card.Section >
                                    <Box m={10}>
                                        <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>NOVEMBER  2022 - PRESENT</Badge>

                                    </Box>

                                </Card.Section>

                                <Grid align={'center'}>
                                    <Grid.Col lg={6} sm={6} xs={6} >
                                        <Title > Developer</Title>
                                        <Title order={3}>Build King</Title>

                                    </Grid.Col>

                                    <Grid.Col lg={6} sm={6} xs={6}>
                                        <List withPadding >
                                            <List.Item>Building react native app and web development with reactjs</List.Item>
                                            <List.Item>Utilizing react-hook-form, tanstack query and state management with
                                                Zustand in development</List.Item>
                                            <List.Item>Experience in UI library, such as MUI, Native Base and Mantine</List.Item>
                                        </List>
                                    </Grid.Col>
                                </Grid>
                            </Card>
                        </Grid.Col>

                        {/* <Space h='lg' /> */}
                        <Grid.Col lg={6}>
                            <Card shadow={'xl'} m={'xl'} radius={'md'} p={50}>
                                <Card.Section >
                                    <Box m={10}>
                                        <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>AUGUST  2022 - SEPTEMBER  2022</Badge>

                                    </Box>

                                </Card.Section>
                                <Grid align={'center'}>
                                    <Grid.Col lg={6} sm={6} xs={6}>
                                        <Title> Full Stack Developer</Title>
                                        <Title order={3}>Ensign Freight</Title>
                                        <Text>BooknStore team (warehouse)</Text>

                                    </Grid.Col>
                                    <Grid.Col lg={6} sm={6} xs={6}>
                                        <List>
                                            Supply Chain Management (SCM)
                                        </List>
                                        <List withPadding>
                                            <List.Item>Fetched data from courier api by react axios</List.Item>
                                            <List.Item>Utilized guzzle for JSON-RPC for backend server-side by hyperf</List.Item>
                                            <List.Item>Utilized MySQL Workbench for database queries</List.Item>
                                            <List.Item>Had hand-on experience in ERD for supplier related database design</List.Item>
                                        </List>

                                    </Grid.Col>
                                </Grid>
                            </Card>
                        </Grid.Col>

                        {/* <Space h='lg' /> */}
                        <Grid.Col lg={12} bg={'cyan'}>
                            <Card shadow={'xl'} m={'xl'} radius={'md'} p={50}>
                                <Card.Section >
                                    <Box m={10}>
                                        <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>DECEMBER  2021 - FEBRUARY 2022</Badge>

                                    </Box>

                                </Card.Section>
                                <Grid align={'center'}>
                                    <Grid.Col lg={6} sm={6} xs={6}>
                                        <Title> Senior R&D Engineer</Title>
                                        <Title order={3}>Innovation X</Title>
                                    </Grid.Col>
                                    <Grid.Col lg={6} sm={6} xs={6}>
                                        <List withPadding>
                                            <List.Item>Designed the prototype of the swept-volume display</List.Item>
                                            <List.Item>Designed the supplementary components with CAD software by 3D printers(FDM & DLP)</List.Item>
                                            <List.Item>Applied electronic components with Arduino software</List.Item>
                                            <Space h='sm' />
                                            <Title order={5}>Technical fields in IT relational</Title>
                                            <List withPadding>
                                                <List.Item>3D model slicing to a stack of dot images by python</List.Item>
                                                <List.Item>Designed Lens system with Excel, Python and Zemax</List.Item>
                                                <List.Item>Light filter layer structure</List.Item>
                                                <List.Item>Mechanism simulation by SolidWorks and python</List.Item>
                                            </List>

                                        </List>

                                    </Grid.Col>

                                </Grid>
                            </Card>

                        </Grid.Col>
                    </Grid>
                </Grid.Col>

                <Grid.Col lg={12} sm={12}>
                    <Grid h={matches ? '100vh' : 'auto'}>
                        <Box>
                            <Title fz={55} ref={targetRef.refEducation} > Education</Title>
                            <Space h='sm' />

                            <Title order={3}>Bachelor's degree, Hong Kong University of Science and Technology</Title>
                            <Title order={3}>Major in Physics</Title>
                            <List withPadding>
                                <List.Item>Familiar with library related to scientific aspects</List.Item>
                                <List.Item>Visualization: matplotlib</List.Item>
                                <List.Item>Calculation: sympy, numpy, scipy</List.Item>
                            </List>
                        </Box>

                    </Grid>
                </Grid.Col>

                <Grid.Col>
                    <Grid h={matches ? '90vh' : 'auto'}>
                        <Box>
                            <Title fz={55}> Interests</Title>
                            <Space h='sm' />

                            <Title order={3}>Bouldering</Title>
                            <Title order={3}>Calisthenics</Title>
                            <Title order={3}>Gym</Title>

                            <Title order={3}>Sketching & graphic drawing </Title>

                        </Box>

                    </Grid>
                </Grid.Col>


                {/* <Grid.Col xl={12} lg={12} sm={12} >
                    <Grid gutter={20} h={matches ? '100vh' : 'auto'} align={'center'}>
                        <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                        <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                        <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                        <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                        <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                    </Grid>
                </Grid.Col> */}
                {/* <Grid.Col xl={12} lg={12} sm={12} >
                    <Grid gutter={20} h={matches ? '90vh' : 'auto'} align={'center'}>
                        <Grid.Col lg={3} md={6} sm={12} bg={'grape'}><Box w={300} h={300} bg={'cyan'} /> </Grid.Col>
                        <Grid.Col lg={3} md={6} sm={12}><Box w={300} h={300} bg={'cyan'} /> </Grid.Col>
                        <Grid.Col lg={3} md={6} sm={12}><Box w={300} h={300} bg={'cyan'} /> </Grid.Col>
                        <Grid.Col lg={3} md={6} sm={12}><Box w={300} h={300} bg={'cyan'} /> </Grid.Col>
                    </Grid>
                </Grid.Col> */}

                {/* <Grid.Col lg={12} sm={12}>
                    <Grid h={matches ? '100vh' : 'auto'}>
                        <Grid.Col lg={12} sm={12}>

                            <TestFlip />
                        </Grid.Col>

                    </Grid>
                </Grid.Col> */}




            </Grid >


            {/* <Paper p={'md'} shadow={'lg'}>

                        <Text fz={40} fw={500}>I am Andy</Text>
                        <Text>
                            Hands-on experience in web development in frontend by reactjs and backend with
                            Spring Boot. Major in Physics at HKUST and familiar with Python in solving basic
                            numerical and symbolic computation problems.
                        </Text>

                    </Paper> */}
            {/* <Paper shadow={'lg'}>
                <Blockquote cite="– Forrest Gump"
                    bg={colorScheme === 'dark' ? theme.colors.gray[9] : 'white'} p={70}

                >
                    Life is like an npm install – you never know what you are going to get.
                </Blockquote>

            </Paper> */}





            {/* </Stack> */}

            {/* <Container>

                        <Grid gutter={20}>
                            <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                            <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                            <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                            <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                            <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                        </Grid>
            </Container> */}





            <Affix position={{ bottom: '4rem', right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            size='sm'
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                            radius={100}
                            color={colorScheme === 'dark' ? 'gray' : 'dark'}
                        >
                            <IconArrowUp size="1rem" color='white' />
                        </Button>
                    )}
                </Transition>
            </Affix>

        </ >
    );
}