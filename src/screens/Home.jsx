import { Title, Grid, Space, Text, Stack, Box, useMantineTheme } from '@mantine/core'
import React from 'react'
import HoverSpringMotion from '../components/HoverSpringMotion/HoverSpringMotion'
import { ImageModal } from '../components/ImageModal'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

export const Home = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme()
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.lg}px)`);


    return (
        <Grid align={'center'} >
            <Grid.Col lg={6} sm={12}>
                {/* <Grid>
                    <Grid.Col sm={6}>
                        <Title order={1} size={100}>Andy</Title>
                        <Title order={1} size={100} ml={45} >Wong</Title>
                    </Grid.Col>
                </Grid> */}
                <Title order={1} size={100}>Andy</Title>
                <Title order={1} size={100} ml={45} >Wong</Title>
                <Space h="md" />
                <Text fz={50} fw={500}>I am a Frontend Developer</Text>
                <Space h={'xl'} />
                <Text fz={20}>
                    Hands-on experience in web development and apps by reactjs, react native and backend development with
                    Spring Boot. Enthusiastic person loves learning what I am curious. Insterested in sketching, calisthenics and bouldering.
                </Text>
            </Grid.Col>


            <Grid.Col
                lg={6} sm={12}
                display={matches ? 'block' : 'none'}
            >
                {/* <Stack > */}
                <HoverSpringMotion image={require(`../assets/cat.jpg`)} open={open} />
                <ImageModal opened={opened} open={open} close={close} image={require(`../assets/cat.jpg`)} index={undefined} />

                {/* </Stack> */}
            </Grid.Col>

        </Grid>

    )
}







